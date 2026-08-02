import type { ReactNode } from 'react'
import BubbleMenu from '@/components/BubbleMenu'
import { Footer } from '@/sections/Footer'

/**
 * Nav + footer for the standalone pages. The home page keeps its own copy of
 * the nav inside the hero, because there it sits over the hero composition
 * rather than over a plain background.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white" style={{ overflowX: 'clip' }}>
      <BubbleMenu />
      {children}
      <Footer />
    </div>
  )
}
