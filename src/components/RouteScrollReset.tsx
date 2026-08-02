import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Land at the top of every new route, and recompute ScrollTriggers for the
 * page we just moved to — their cached positions belong to the old document.
 */
export function RouteScrollReset() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory('manual')

    const scrollToRoute = () => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        target?.scrollIntoView({ block: 'start' })
      } else {
        window.scrollTo(0, 0)
      }
    }

    scrollToRoute()
    const frame = window.requestAnimationFrame(scrollToRoute)
    window.addEventListener('pageshow', scrollToRoute)
    const t = window.setTimeout(() => {
      ScrollTrigger.refresh()
      scrollToRoute()
    }, 120)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pageshow', scrollToRoute)
      window.clearTimeout(t)
    }
  }, [pathname, hash])

  return null
}
