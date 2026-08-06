import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { BlogVector } from '@/components/BlogVectors'
import { SiteChrome } from '@/components/SiteChrome'
import { BLOG_TOPICS } from '@/data/blogPosts'
import type { BlogTopic } from '@/data/blogPosts'
import { formatPostDate, profile, sortedPosts } from '@/data/content'
import { getBlogReturnTo } from '@/lib/blogNavigation'
import { SITE_URL, useSeo } from '@/lib/seo'

/**
 * /blog — the index. A real page rather than an anchor, so it can be crawled,
 * indexed and linked to on its own.
 */
type Filter = BlogTopic | 'All'

export default function BlogIndex() {
  const location = useLocation()
  const returnTo = getBlogReturnTo(location.state)
  const [filter, setFilter] = useState<Filter>('All')

  // Only offer a chip for a topic that actually has posts behind it.
  const filters = useMemo<Filter[]>(
    () => ['All', ...BLOG_TOPICS.filter((topic) => sortedPosts.some((p) => p.topic === topic))],
    [],
  )

  const visible = useMemo(
    () => (filter === 'All' ? sortedPosts : sortedPosts.filter((p) => p.topic === filter)),
    [filter],
  )

  useSeo({
    title: `Blog — ${profile.name}`,
    description:
      'Short, casual notes from Aryan Rana about design, products, teamwork and making things that actually work.',
    path: '/blog',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: `${profile.name} — Blog`,
      url: `${SITE_URL}/blog`,
      author: { '@type': 'Person', name: profile.name, url: SITE_URL },
      blogPost: sortedPosts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        datePublished: p.date,
        url: `${SITE_URL}/blog/${p.slug}`,
      })),
    },
  })

  return (
    <SiteChrome>
      <main className="min-h-svh bg-white px-4 pt-36 pb-28 sm:px-8 lg:px-12 xl:px-16">
        <header className="mx-auto max-w-[900px]">
          <Link
            to={returnTo}
            className="font-body inline-flex items-center gap-2 text-[13px] font-bold tracking-wide
                       text-black/60 uppercase transition-colors hover:text-black"
          >
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back
          </Link>

          <h1 className="font-heading mt-5 text-[clamp(2.25rem,6vw,72px)] leading-[1.1] text-black uppercase">
            Blog
          </h1>
          <p className="font-body mt-5 max-w-[640px] text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.6] text-black/70">
            A few short thoughts on design, products, teams, and the small things that can make work better or mess it up.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-[900px]">
          <div
            role="group"
            aria-label="Filter posts by topic"
            className="flex flex-wrap gap-2"
          >
            {filters.map((option) => {
              const active = option === filter
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  aria-pressed={active}
                  className={`font-body rounded-full border px-4 py-2 text-[11px] font-bold tracking-wide uppercase
                              transition-colors sm:text-[12px] ${
                                active
                                  ? 'border-black bg-black text-white'
                                  : 'border-black/20 bg-white text-black/60 hover:border-black hover:text-black'
                              }`}
                >
                  {option}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[900px]">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:flex sm:flex-col sm:gap-0">
            {visible.map((post) => (
              <li key={post.slug} className="sm:border-t sm:border-black/15 sm:last:border-b">
                <Link
                  to={`/blog/${post.slug}`}
                  state={{ returnTo }}
                  className="group grid h-full grid-cols-1 content-start items-start gap-3 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center sm:gap-10 sm:py-8"
                >
                  <div className="aspect-[384/240] w-full overflow-hidden border border-black bg-white sm:w-[180px]">
                    <div className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                      <BlogVector name={post.vector} />
                    </div>
                  </div>

                  <div>
                    <div className="font-body flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] tracking-wide text-black/50 uppercase sm:gap-x-3 sm:text-[12px]">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingMinutes} min read</span>
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="hidden rounded-full border border-black/20 px-2 py-1 text-[10px] sm:inline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-body mt-2 text-[13px] leading-[1.25] font-bold text-black sm:text-[clamp(1.2rem,2vw,1.6rem)] sm:leading-normal">
                      {post.title}
                    </h2>
                    <p className="font-body mt-2 line-clamp-3 max-w-[560px] text-[11px] leading-[1.45] text-black/70 sm:line-clamp-none sm:text-[15px] sm:leading-[1.55]">
                      {post.excerpt}
                    </p>

                    <span className="font-body mt-3 inline-flex items-center gap-2 border-b border-black pb-1 text-[11px] font-bold text-black sm:mt-4 sm:text-[14px]">
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
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </SiteChrome>
  )
}
