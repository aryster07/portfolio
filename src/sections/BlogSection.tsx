import type { MouseEvent } from 'react'
import { Link } from 'react-router'
import { SectionHeading, CircleBleed } from '@/components/SectionHeading'
import { BlogVector } from '@/components/BlogVectors'
import { homePosts } from '@/data/content'
import { BLOG_SECTION_RETURN } from '@/lib/blogNavigation'

function rememberBlogSectionForBrowserBack(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    window.location.pathname !== '/'
  ) {
    return
  }

  // Keep React Router's history metadata intact, but give the current home
  // entry a meaningful anchor so the browser Back button restores this section.
  window.history.replaceState(window.history.state, '', BLOG_SECTION_RETURN)
}

/**
 * "From The Blog" — the second white band, Figma node 6:171.
 *
 * The three posts share one full-width row at every viewport size so the
 * section reads as a complete composition instead of a clipped rail.
 */
export function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-20 md:py-24">
      <CircleBleed edge="top" size={120} reveal={0.5} />

      <div className="px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeading tone="dark">From The Blog</SectionHeading>
      </div>

      <div className="mt-12 grid w-full grid-cols-3 gap-x-3 gap-y-12 px-4 sm:gap-x-6 sm:px-8 lg:gap-x-8 lg:px-12 xl:px-16">
        {homePosts.map(({ post, badge }) => (
          <article
            key={post.slug}
            className="group flex min-w-0 flex-col"
          >
            <div className="aspect-[384/240] w-full overflow-hidden border border-black bg-white">
              <div className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                <BlogVector name={post.vector} />
              </div>
            </div>

            <span className="font-body mt-3 block text-[9px] font-bold tracking-[1.2px] text-black/40 uppercase sm:mt-5 sm:text-[11px]">
              {badge}
            </span>

            <h3 className="font-body mt-1.5 text-[13px] leading-[1.25] font-bold text-black sm:mt-2 sm:text-[clamp(1.05rem,1.4vw,1.25rem)] sm:leading-normal">
              {post.title}
            </h3>
            <p className="font-body mt-2 text-[11px] leading-[1.45] text-black/80 sm:text-[14px] sm:leading-[1.5]">
              {post.excerpt}
            </p>

            <Link
              to={`/blog/${post.slug}`}
              state={{ returnTo: BLOG_SECTION_RETURN }}
              onClick={rememberBlogSectionForBrowserBack}
              className="font-body mt-auto inline-flex w-fit items-center gap-1 border-b border-black
                         pt-4 pb-1 text-[11px] font-bold text-black sm:gap-2 sm:pt-5 sm:text-[14px]"
            >
              Read More
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
                className="size-3 transition-transform duration-300 group-hover:translate-x-1 sm:size-3.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </article>
        ))}
      </div>

      {/* The section is a teaser; the full archive lives on its own page. */}
      <div className="mt-14 flex justify-center px-4 sm:px-8">
        <Link
          to="/blog"
          state={{ returnTo: BLOG_SECTION_RETURN }}
          onClick={rememberBlogSectionForBrowserBack}
          className="font-body inline-flex items-center gap-2 rounded-full border-2 border-black
                     px-7 py-3 text-[12px] font-bold tracking-widest text-black uppercase
                     transition-colors duration-300 hover:bg-black hover:text-white sm:text-[13px]"
        >
          Explore All Blogs
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <CircleBleed edge="bottom" size={120} reveal={0.5} />
    </section>
  )
}
