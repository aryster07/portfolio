import { lazy, Suspense, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router'
import { SectionHeading } from '@/components/SectionHeading'
import { categories, work, type CategoryId, type WorkItem } from '@/data/content'

type Filter = CategoryId | 'all'

const RADIUS = 'rounded-[18px] sm:rounded-[22px]'
const WorkVector = lazy(() =>
  import('@/components/WorkVectors').then((module) => ({ default: module.WorkVector })),
)

function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 border-[#D7E2EA]
                 text-[#D7E2EA] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-8"
    >
      <svg className="size-2.5 sm:size-[13px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function Card({ item }: { item: WorkItem }) {
  const hasDestination = Boolean(item.caseStudyId || item.href)
  const caption = (
    <div className="mt-2 flex items-start justify-between gap-2 px-0.5 sm:mt-3.5 sm:gap-3">
      <div className="min-w-0">
        <h3 className="truncate text-[11px] font-medium text-[#D7E2EA] uppercase transition-colors duration-300 group-hover:text-white sm:text-[14px]">
          {item.name}
        </h3>
        <p className="mt-1 truncate text-[8px] font-light tracking-[0.12em] text-[#D7E2EA] uppercase opacity-50 sm:text-[10px] sm:tracking-widest">
          {item.meta}
        </p>
      </div>
      {hasDestination && <ArrowBadge />}
    </div>
  )

  if ('status' in item) {
    return (
      <div className="group">
        <div
          className={`flex aspect-16/10 items-center justify-center border-2 border-dashed
                      border-[#D7E2EA]/25 ${RADIUS}`}
        >
          <span className="text-[8px] font-medium tracking-[0.2em] text-[#D7E2EA]/50 uppercase sm:text-[10px] sm:tracking-[0.3em]">
            Launching Soon
          </span>
        </div>
        {caption}
      </div>
    )
  }

  // Published work always has either a raster cover or a deliberate vector.
  const artwork = 'cover' in item ? (
    <div className={`overflow-hidden ${RADIUS}`}>
      <img
        src={item.cover}
        alt={item.name}
        loading="lazy"
        decoding="async"
        className="aspect-16/10 w-full object-cover transition-transform duration-700
                   ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
    </div>
  ) : (
    <div
      className={`aspect-16/10 overflow-hidden border border-[#D7E2EA]/15 bg-[#141414]
                  transition-colors duration-500 group-hover:border-[#D7E2EA]/35 ${RADIUS}`}
    >
      <div
        className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                   group-hover:scale-[1.025]"
      >
        <Suspense fallback={<span aria-hidden="true" className="block size-full bg-[#141414]" />}>
          <WorkVector name={item.vector} />
        </Suspense>
      </div>
    </div>
  )

  const body = (
    <>
      {artwork}
      {caption}
    </>
  )

  if (item.caseStudyId) {
    return (
      <Link
        to={`/case-studies/${item.caseStudyId}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
      >
        {body}
      </Link>
    )
  }

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
    >
      {body}
    </a>
  ) : (
    <div className="group">{body}</div>
  )
}

/**
 * Two-column layout: a sticky rail carrying the heading, category list and
 * count, with the grid beside it. Filters that used to sit above the grid now
 * live in the rail, which cuts a lot of vertical height out of the section.
 */
const INITIAL_VISIBLE = 6

export function WorkSection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [expanded, setExpanded] = useState(false)

  const matching = useMemo(
    () => (filter === 'all' ? work : work.filter((w) => w.category === filter)),
    [filter],
  )

  const visible = expanded ? matching : matching.slice(0, INITIAL_VISIBLE)
  const hidden = matching.length - visible.length

  const chips: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...categories.map((category) => ({ id: category.id, label: category.label })),
  ]

  return (
    <section id="work" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
        {/* --- Rail ------------------------------------------------------- */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading align="left" className="!my-0">
            Work
          </SectionHeading>

          <div
            role="tablist"
            aria-label="Filter work by category"
            className="mt-8 flex flex-wrap gap-2 lg:flex-col lg:items-start lg:gap-1"
          >
            {chips.map((chip) => {
              const active = filter === chip.id
              const count =
                chip.id === 'all' ? work.length : work.filter((w) => w.category === chip.id).length

              return (
                <button
                  key={chip.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(chip.id)
                    setExpanded(false)
                  }}
                  className={`relative rounded-full px-4 py-2 text-[11px] font-medium tracking-widest
                              uppercase transition-colors duration-300 lg:w-full lg:text-left
                              ${active ? 'text-[#0C0C0C]' : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'}`}
                >
                  {active && (
                    <motion.span
                      layoutId="work-chip"
                      className="absolute inset-0 rounded-full bg-[#D7E2EA]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {chip.label}
                    <span className={active ? 'opacity-50' : 'opacity-40'}>{count}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* --- Grid ------------------------------------------------------- */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8">
          <AnimatePresence mode="sync" initial={false}>
            {visible.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card item={item} />
              </motion.div>
            ))}
          </AnimatePresence>

          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="col-span-full mt-2 justify-self-start rounded-full border-2 border-[#D7E2EA]/30
                         px-6 py-2.5 text-[11px] font-medium tracking-widest text-[#D7E2EA]/80
                         uppercase transition-colors duration-300 hover:border-[#D7E2EA]
                         hover:text-[#D7E2EA]"
            >
              Show {hidden} more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}