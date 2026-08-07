import { useEffect, useState } from 'react'

interface BlogFilterProps {
  /** Only topics that actually have posts behind them. */
  topics: string[]
}

/**
 * Filters a list that is already in the HTML rather than rendering one.
 *
 * The posts are server-rendered by the Astro page so every crawler sees all of
 * them; this island only hides and shows the `[data-topic]` items. If the
 * JavaScript never runs, the reader still gets the full list.
 */
export default function BlogFilter({ topics }: BlogFilterProps) {
  const [active, setActive] = useState('All')
  const options = ['All', ...topics]

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-topic]')
    items.forEach((item) => {
      const show = active === 'All' || item.dataset.topic === active
      item.hidden = !show
    })
  }, [active])

  return (
    <div role="group" aria-label="Filter posts by topic" className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === active
        return (
          <button
            key={option}
            type="button"
            onClick={() => setActive(option)}
            aria-pressed={isActive}
            className={`font-body rounded-full border px-4 py-2 text-[11px] font-bold tracking-wide uppercase
                        transition-colors sm:text-[12px] ${
                          isActive
                            ? 'border-black bg-black text-white'
                            : 'border-black/20 bg-white text-black/60 hover:border-black hover:text-black'
                        }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
