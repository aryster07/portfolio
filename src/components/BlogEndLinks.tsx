import { Link } from 'react-router'

interface BlogEndLinksProps {
  next: { slug: string; title: string }
  returnTo: string
}

const cardBase =
  'group flex h-full flex-col justify-between gap-6 border border-black p-5 transition-colors sm:p-6'

const labelBase = 'font-body text-[11px] font-bold tracking-[1.2px] uppercase'

const titleBase =
  'font-body flex items-start justify-between gap-3 text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.3] font-bold'

const Arrow = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

/**
 * Sits at the end of the article, inside the text column, the way a blog
 * footer normally does: what to read next, or where to go see the actual work.
 */
export function BlogEndLinks({ next, returnTo }: BlogEndLinksProps) {
  return (
    <nav
      aria-label="Where to go next"
      className="mt-12 grid gap-4 border-t border-black/15 pt-8 sm:grid-cols-2"
    >
      <Link
        to={`/blog/${next.slug}`}
        state={{ returnTo }}
        className={`${cardBase} bg-white hover:bg-black`}
      >
        <span className={`${labelBase} text-black/40 group-hover:text-white/60`}>Read next</span>
        <span className={`${titleBase} text-black group-hover:text-white`}>
          {next.title}
          <Arrow />
        </span>
      </Link>

      <Link to="/#work" className={`${cardBase} bg-black hover:bg-white`}>
        <span className={`${labelBase} text-white/50 group-hover:text-black/40`}>Or</span>
        <span className={`${titleBase} text-white group-hover:text-black`}>
          See the work
          <Arrow />
        </span>
      </Link>
    </nav>
  )
}
