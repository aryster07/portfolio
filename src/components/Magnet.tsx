import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react'

interface MagnetProps {
  children: ReactNode
  /** How far outside the element's bounds the effect starts, in px. */
  padding?: number
  /** Higher = weaker pull. The offset is divided by this. */
  strength?: number
  /**
   * Confine the effect to this element's bounds. Without it the padded hit
   * area spills over neighbouring controls — in the hero it reached the
   * Contact button, so hovering the button still dragged the portrait.
   */
  boundsRef?: RefObject<HTMLElement | null>
}

/**
 * Magnetic hover — the element drifts toward the cursor once it enters a
 * padded hit area around the element's bounds, and springs back when it leaves.
 */
export function Magnet({
  children,
  padding = 100,
  strength = 2,
  boundsRef,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      // Hard boundary first: outside it, the magnet is simply off.
      if (boundsRef?.current) {
        const b = boundsRef.current.getBoundingClientRect()
        const inside =
          e.clientX >= b.left && e.clientX <= b.right && e.clientY >= b.top && e.clientY <= b.bottom
        if (!inside) {
          setActive(false)
          setOffset({ x: 0, y: 0 })
          return
        }
      }

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const withinX = Math.abs(e.clientX - centerX) < rect.width / 2 + padding
      const withinY = Math.abs(e.clientY - centerY) < rect.height / 2 + padding

      if (withinX && withinY) {
        setActive(true)
        setOffset({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        })
      } else {
        setActive(false)
        setOffset({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength, boundsRef])

  return (
    <div ref={ref}>
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
