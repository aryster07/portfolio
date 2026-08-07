import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { bubbleNavItems, profile } from '@/data/content'

const MENU_BG = '#D7E2EA'
const MENU_COLOR = '#0C0C0C'
const ANIMATION_DURATION = 0.5
const STAGGER_DELAY = 0.12

/**
 * BubbleMenu (React Bits).
 *
 * Three additions to the upstream source, all for the open overlay state:
 *  1. Escape closes the menu. Upstream leaves the only exit as the toggle.
 *  2. Page scroll is locked while open, so the page behind doesn't move under
 *     a full-screen overlay.
 *  3. The logo bubble sizes to its content instead of a fixed 120px, which
 *     clipped a wordmark longer than the demo's two-letter one.
 */
export default function BubbleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  // Starts expanded rather than reading scrollY here: this component is
  // server-rendered into the static HTML, where `window` does not exist. The
  // scroll listener below corrects it on the first frame in the browser.
  const [compact, setCompact] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const bubblesRef = useRef<HTMLAnchorElement[]>([])
  const labelRefs = useRef<HTMLSpanElement[]>([])

  const containerClassName = [
    'bubble-menu',
    'fixed',
    'left-0 right-0',
    compact ? 'top-3' : 'top-8',
    'transition-[top] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
    'flex items-center justify-between',
    'gap-4 px-8',
    'pointer-events-none',
    'z-[1001]',
  ]
    .join(' ')

  const handleToggle = () => {
    const nextState = !isMenuOpen
    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape to close, and hold the page still while the overlay is up.
  useEffect(() => {
    if (!isMenuOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter(Boolean)
    const labels = labelRefs.current.filter(Boolean)
    if (!overlay || !bubbles.length) return

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' })
      gsap.killTweensOf([...bubbles, ...labels])
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' })
      gsap.set(labels, { y: 24, autoAlpha: 0 })

      bubbles.forEach((bubble, i) => {
        const delay = i * STAGGER_DELAY + gsap.utils.random(-0.05, 0.05)
        const tl = gsap.timeline({ delay })
        tl.to(bubble, { scale: 1, duration: ANIMATION_DURATION, ease: 'back.out(1.5)' })
        if (labels[i]) {
          tl.to(
            labels[i],
            { y: 0, autoAlpha: 1, duration: ANIMATION_DURATION, ease: 'power3.out' },
            '-=' + ANIMATION_DURATION * 0.9,
          )
        }
      })
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels])
      gsap.to(labels, { y: 24, autoAlpha: 0, duration: 0.2, ease: 'power3.in' })
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' })
          setShowOverlay(false)
        },
      })
    }

    return () => gsap.killTweensOf([...bubbles, ...labels])
  }, [isMenuOpen, showOverlay])

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean)
        const isDesktop = window.innerWidth >= 900
        bubbles.forEach((bubble, i) => {
          const item = bubbleNavItems[i]
          if (bubble && item) {
            gsap.set(bubble, { rotation: isDesktop ? item.rotation : 0 })
          }
        })
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 120px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list { row-gap: 16px; }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3vw, 4rem);
            padding: clamp(1rem, 2vw, 2rem) 0;
            min-height: 80px !important;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.06);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active { transform: scale(.94); }
        }
      `}</style>

      <nav className={containerClassName} aria-label="Main navigation">
        <div
          className={[
            'inline-flex items-center justify-center',
            'rounded-full',
            compact
              ? 'shadow-[0_6px_20px_rgba(0,0,0,0.35)] ring-1 ring-[#0C0C0C]/15'
              : 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            compact ? 'h-11 px-3 md:h-12 md:px-4' : 'h-12 px-4 md:h-14 md:px-6',
            'gap-2',
            'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            'will-change-transform',
          ].join(' ')}
          style={{ background: MENU_BG, color: MENU_COLOR, borderRadius: '9999px' }}
        >
          <span className="inline-flex h-full w-auto min-w-[48px] items-center justify-center">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <img
                src={profile.portrait}
                alt=""
                className="size-8 shrink-0 rounded-full bg-[#0C0C0C] object-cover"
              />
              <span className="text-[15px] font-semibold tracking-[0.6px]">{profile.brand}</span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className={[
            'inline-flex flex-col items-center justify-center',
            'rounded-full',
            compact
              ? 'shadow-[0_6px_20px_rgba(0,0,0,0.35)] ring-1 ring-[#0C0C0C]/15'
              : 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
            'pointer-events-auto',
            compact ? 'w-11 h-11 md:w-12 md:h-12' : 'w-12 h-12 md:w-14 md:h-14',
            'border-0 cursor-pointer p-0',
            'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
            'will-change-transform',
          ].join(' ')}
          onClick={handleToggle}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          style={{ background: MENU_BG }}
        >
          <span
            className="menu-line mx-auto block rounded-[2px]"
            style={{
              width: 26,
              height: 2,
              background: MENU_COLOR,
              transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="menu-line mx-auto block rounded-[2px]"
            style={{
              marginTop: '6px',
              width: 26,
              height: 2,
              background: MENU_COLOR,
              transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {showOverlay && (
        <div
          ref={overlayRef}
          className={[
            'bubble-menu-items',
            'fixed',
            'inset-0',
            'flex items-center justify-center',
            'pointer-events-none',
            'z-[1000]',
          ].join(' ')}
          aria-hidden={!isMenuOpen}
        >
          {/* Upstream has no backdrop, so page content reads through the gaps
              between pills. Dim + blur the hero behind the menu, and let a
              click anywhere on it close. */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={closeMenu}
            className="pointer-events-auto absolute inset-0 cursor-default border-0 bg-[#0C0C0C]/80 backdrop-blur-sm"
          />

          <ul
            className={[
              'pill-list',
              'list-none m-0 px-6',
              'w-full max-w-[1600px] mx-auto',
              'flex flex-wrap',
              'gap-x-0 gap-y-1',
              'pointer-events-auto',
              'relative',
            ].join(' ')}
            role="menu"
            aria-label="Menu links"
          >
            {bubbleNavItems.map((item, idx) => (
              <li
                key={item.href}
                role="none"
                className="pill-col box-border flex items-stretch justify-center [flex:0_0_calc(100%/3)]"
              >
                <a
                  role="menuitem"
                  href={item.href}
                  onClick={closeMenu}
                  className={[
                    'pill-link',
                    'w-full',
                    'rounded-[999px]',
                    'no-underline',
                    'text-inherit',
                    'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                    'flex items-center justify-center',
                    'relative',
                    'transition-[background,color] duration-300 ease-in-out',
                    'box-border',
                    'whitespace-nowrap overflow-hidden',
                  ].join(' ')}
                  style={
                    {
                      ['--item-rot']: `${item.rotation}deg`,
                      ['--hover-bg']: MENU_COLOR,
                      ['--hover-color']: MENU_BG,
                      background: MENU_BG,
                      color: MENU_COLOR,
                      minHeight: 160,
                      padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                      fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                      fontWeight: 400,
                      lineHeight: 0,
                      willChange: 'transform',
                    } as CSSProperties
                  }
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el
                  }}
                >
                  <span
                    className="inline-block"
                    style={{ willChange: 'transform, opacity', height: '1.2em', lineHeight: 1.2 }}
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
