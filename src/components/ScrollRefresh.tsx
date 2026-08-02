import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Recomputes every ScrollTrigger once the page has finished settling.
 *
 * Triggers cache their start/end pixel positions when created. On this page
 * that happens before the self-hosted fonts swap in and before the work
 * covers load, both of which move everything below them by hundreds of
 * pixels — leaving headings stuck at their pre-animation state because their
 * trigger range now sits somewhere the user never scrolls through.
 */
export function ScrollRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()

    if (document.readyState === 'complete') refresh()
    else window.addEventListener('load', refresh, { once: true })

    document.fonts?.ready.then(refresh).catch(() => {})

    // Late-loading images below the fold shift everything under them.
    const imgs = Array.from(document.images).filter((i) => !i.complete)
    imgs.forEach((i) => i.addEventListener('load', refresh, { once: true }))

    // Belt and braces for anything that settles after the above.
    const t = window.setTimeout(refresh, 1200)

    return () => {
      window.removeEventListener('load', refresh)
      imgs.forEach((i) => i.removeEventListener('load', refresh))
      window.clearTimeout(t)
    }
  }, [])

  return null
}
