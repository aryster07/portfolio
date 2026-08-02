import { motion } from 'framer-motion'
import type { CSSProperties, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  /** Hero entrances run on mount; lower-page content enters on first viewport reveal. */
  trigger?: 'mount' | 'viewport'
  /** Set false when a one-time entrance has already played during this page session. */
  play?: boolean
  className?: string
  style?: CSSProperties
}

/**
 * Scroll-triggered fade + translate. Fires once, with a generous viewport
 * margin so elements are already settled by the time they're properly in view.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  trigger = 'viewport',
  play = true,
  className,
  style,
}: FadeInProps) {
  const visible = { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={play ? { opacity: 0, y } : false}
      animate={trigger === 'mount' ? visible : undefined}
      whileInView={trigger === 'viewport' ? visible : undefined}
      viewport={trigger === 'viewport' ? { once: true, margin: '50px', amount: 0 } : undefined}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
