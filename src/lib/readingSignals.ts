import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

/** Sustained speed that reads as skimming rather than reading, in px/ms. */
const FAST_VELOCITY = 2.2
/** A pause longer than this ends the current burst. */
const IDLE_RESET_MS = 220
/** Bigger single steps are jumps — anchor links, the End key, the route reset. */
const MAX_STEP = 400
/** Share of the page someone has to blow through before we say anything. */
const BURST_SHARE = 0.5
/** Floor and ceiling for that share, so short and long pages both behave. */
const MIN_BURST = 1000
const MAX_BURST = 2600

/**
 * A fixed pixel threshold does not work: a short post has less scrollable
 * height than the threshold, so the nudge could never fire at all. Scale it to
 * the page instead — half of it, within sane bounds.
 */
function burstTarget() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  return Math.min(MAX_BURST, Math.max(MIN_BURST, scrollable * BURST_SHARE))
}

/**
 * Fires once the reader has covered a long stretch without ever slowing down.
 * A single flick, a tap on the scrollbar or a programmatic jump does not count;
 * only a sustained run does, so the nag stays rare enough to be fair.
 */
export function useFastScroll(onFastScroll: () => void, enabled: boolean) {
  const handler = useRef(onFastScroll)
  handler.current = onFastScroll

  useEffect(() => {
    if (!enabled) return

    let lastY = window.scrollY
    let lastTime = performance.now()
    let burst = 0

    const onScroll = () => {
      const now = performance.now()
      const y = window.scrollY
      const elapsed = now - lastTime
      const travelled = Math.abs(y - lastY)

      lastTime = now
      lastY = y

      if (elapsed <= 0) return

      // Paused, or teleported rather than scrolled: start counting again.
      if (elapsed > IDLE_RESET_MS || travelled > MAX_STEP) {
        burst = 0
        return
      }

      if (travelled / elapsed < FAST_VELOCITY) {
        burst = 0
        return
      }

      burst += travelled
      if (burst >= burstTarget()) {
        burst = 0
        handler.current()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled])
}

/** Taller than any page here, so "above the viewport" still counts as reached. */
const ABOVE_VIEWPORT = 100000

/**
 * True once the reader has scrolled down to the element, and false again if
 * they scroll back above it.
 *
 * Plain intersection is wrong twice over: the element marks the end of the
 * article and the footer below it is taller than a phone screen, so the chips
 * would drop out again at the very bottom; and jumping straight past it — the
 * End key, a restored scroll position — never crosses an intersection boundary
 * at all, so nothing fires. Extending the root upwards makes the test simply
 * "is the element at or above the bottom of the viewport", which changes state
 * exactly once in each direction no matter how the reader got there.
 */
export function useReachedElement(ref: RefObject<HTMLElement | null>) {
  const [reached, setReached] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setReached(entry.isIntersecting)
      },
      { rootMargin: `${ABOVE_VIEWPORT}px 0px 0px 0px` },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref])

  return reached
}
