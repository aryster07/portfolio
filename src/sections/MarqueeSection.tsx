import { useEffect, useRef, useState } from 'react'
import { marqueeImages } from '@/data/content'

const HALF = Math.ceil(marqueeImages.length / 2)
const ROW_ONE = marqueeImages.slice(0, HALF)
const ROW_TWO = marqueeImages.slice(HALF)

function Row({ images, tag }: { images: string[]; tag: string }) {
  // Tripled so the strip stays filled as it slides in either direction.
  return images.concat(images, images).map((src, i) => (
    <div key={`${tag}-${i}`} className="shrink-0">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-auto rounded-[clamp(8px,1.4vw,16px)] object-cover"
        style={{ width: 'clamp(144px, 38vw, 420px)', aspectRatio: '14 / 9' }}
      />
    </div>
  ))
}

/**
 * Two rows of work sliding in opposite directions, driven by scroll position.
 *
 * The whole strip also eases down in scale as it leaves — the tiles shrink on
 * both axes rather than just sliding off, so the section recedes instead of
 * simply scrolling away.
 */
export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return

      setOffset((window.scrollY - el.offsetTop + window.innerHeight) * 0.3)

      // 1 while the section sits mid-viewport, easing to 0.82 as it exits.
      const rect = el.getBoundingClientRect()
      const travelled = Math.min(Math.max(-rect.top / window.innerHeight, 0), 1)
      setScale(1 - travelled * 0.18)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const shift = offset - 200

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pt-10 pb-6 sm:pt-16 sm:pb-8 md:pt-24 md:pb-10 lg:pt-40"
    >
      <div
        className="flex flex-col gap-2 md:gap-3"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        <div
          className="flex gap-2 md:gap-3"
          style={{ transform: `translateX(${shift}px)`, willChange: 'transform' }}
        >
          <Row images={ROW_ONE} tag="a" />
        </div>
        <div
          className="flex gap-2 md:gap-3"
          style={{ transform: `translateX(${-shift}px)`, willChange: 'transform' }}
        >
          <Row images={ROW_TWO} tag="b" />
        </div>
      </div>
    </section>
  )
}
