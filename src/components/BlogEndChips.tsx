import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router'

interface BlogEndChipsProps {
  /** True while the end of the article is on screen. */
  visible: boolean
  next: { slug: string; title: string }
  returnTo: string
}

/**
 * Colours are set per chip so the two never fight over the same utility. The
 * bar floats over the footer as often as over the article, so the filled chip
 * carries a light border — otherwise its edge disappears against the dark.
 */
const chipBase =
  'font-body pointer-events-auto inline-flex max-w-[70vw] items-center gap-2 rounded-full border ' +
  'px-4 py-2.5 text-[12px] font-bold tracking-wide uppercase ' +
  'shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-colors sm:max-w-none sm:px-5 sm:text-[13px]'

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

/**
 * Floats up once the reader reaches the bottom of a post: where to go next,
 * without making them scroll back to the nav to decide.
 */
export function BlogEndChips({ visible, next, returnTo }: BlogEndChipsProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-5 z-[900] flex flex-wrap
                     items-center justify-center gap-2 px-4 sm:bottom-8 sm:gap-3"
        >
          <Link
            to={`/blog/${next.slug}`}
            state={{ returnTo }}
            className={`${chipBase} border-black bg-white text-black hover:bg-black hover:text-white`}
          >
            {/* A half-truncated headline says nothing, so phones get the label alone. */}
            <span className="truncate">
              Read next<span className="hidden sm:inline"> — {next.title}</span>
            </span>
            <Arrow />
          </Link>

          <Link
            to="/#work"
            className={`${chipBase} border-white/40 bg-black text-white hover:border-black hover:bg-white hover:text-black`}
          >
            See work
            <Arrow />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
