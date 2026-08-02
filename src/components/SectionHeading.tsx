import { useLayoutEffect, useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Short one-to-three-word section titles: Moonrock, uppercase, with one shared
 * character reveal so typography and motion cannot drift between sections.
 */
export function SectionHeading({
  children,
  tone = 'light',
  align = 'center',
  className = '',
}: {
  children: string
  /** 'light' = on the dark bands, 'dark' = on the white bands. */
  tone?: 'light' | 'dark'
  align?: 'center' | 'left'
  className?: string
}) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const words = useMemo(
    () =>
      children.trim().split(/\s+/).map((word, wordIndex, allWords) => (
        <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
          {word.split('').map((character, characterIndex) => (
            <span
              data-section-heading-character
              className="inline-block"
              key={`${character}-${characterIndex}`}
            >
              {character}
            </span>
          ))}
          {wordIndex < allWords.length - 1 && (
            <span aria-hidden="true" className="inline-block w-[0.3em]" />
          )}
        </span>
      )),
    [children],
  )

  useLayoutEffect(() => {
    const heading = headingRef.current
    if (!heading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        heading.querySelectorAll('[data-section-heading-character]'),
        {
          willChange: 'opacity, transform',
          opacity: 0,
          y: '1.2em',
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%',
        },
        {
          opacity: 1,
          y: 0,
          scaleY: 1,
          scaleX: 1,
          duration: 1,
          ease: 'back.inOut(2)',
          stagger: 0.03,
          scrollTrigger: {
            trigger: heading,
            start: 'center bottom+=50%',
            end: 'bottom bottom-=40%',
            scrub: true,
          },
        },
      )
    }, heading)

    return () => context.revert()
  }, [children])

  return (
    <h2
      ref={headingRef}
      className={`font-heading my-5 overflow-hidden text-[clamp(2rem,5vw,64px)] leading-[1.2] uppercase ${
        tone === 'dark' ? 'text-black' : 'text-[#D7E2EA]'
      } ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <span className="inline-block text-inherit leading-[inherit]">{words}</span>
    </h2>
  )
}

/**
 * The dark disc that punches into a white band at a section boundary.
 *
 * `reveal` is the fraction of the disc left visible inside the band — 0.5 is a
 * clean half, lower values push it further out for a subtler notch.
 */
export function CircleBleed({
  edge,
  size,
  reveal,
}: {
  edge: 'top' | 'bottom'
  size: number
  reveal: number
}) {
  const shift = `${(1 - reveal) * 100}%`

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 rounded-full bg-[#0C0C0C] ${
        edge === 'top' ? 'top-0' : 'bottom-0'
      }`}
      style={{
        width: `min(${size}px, 30vw)`,
        height: `min(${size}px, 30vw)`,
        transform: `translateX(-50%) translateY(${edge === 'top' ? `-${shift}` : shift})`,
      }}
    />
  )
}
