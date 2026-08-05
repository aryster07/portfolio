import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { BlogEndChips } from '@/components/BlogEndChips'
import { BlogVector } from '@/components/BlogVectors'
import { SiteChrome } from '@/components/SiteChrome'
import { SlowDownModal } from '@/components/SlowDownModal'
import { NotFoundView } from '@/routes/NotFound'
import { formatPostDate, getPost, profile, sortedPosts } from '@/data/content'
import { getBlogReturnTo } from '@/lib/blogNavigation'
import { useFastScroll, useReachedElement } from '@/lib/readingSignals'
import { SITE_URL, useSeo } from '@/lib/seo'

/** How many of the newest posts the skim-detector can offer as an alternative. */
const SUGGESTION_POOL = 4

/** /blog/:slug — one article per URL. */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const returnTo = getBlogReturnTo(location.state)
  const post = slug ? getPost(slug) : undefined

  const endRef = useRef<HTMLDivElement>(null)
  const atEnd = useReachedElement(endRef)

  const [slowDownOpen, setSlowDownOpen] = useState(false)
  /** One nudge per post — a second one would be nagging, not helping. */
  const [alreadyNudged, setAlreadyNudged] = useState(false)

  useEffect(() => {
    setSlowDownOpen(false)
    setAlreadyNudged(false)
  }, [slug])

  const onFastScroll = useCallback(() => {
    setSlowDownOpen(true)
    setAlreadyNudged(true)
  }, [])

  useFastScroll(onFastScroll, Boolean(post) && !alreadyNudged)

  // Picked once per post so it does not shuffle underneath the reader.
  const suggestion = useMemo(
    () => {
      const others = sortedPosts.filter((p) => p.slug !== slug).slice(0, SUGGESTION_POOL)
      return others.length ? others[Math.floor(Math.random() * others.length)] : undefined
    },
    [slug],
  )

  useSeo({
    title: post ? `${post.title} — ${profile.name}` : 'Not found',
    description: post?.excerpt ?? 'The requested portfolio article could not be found.',
    path: `/blog/${slug ?? ''}`,
    type: post ? 'article' : 'website',
    publishedTime: post?.date,
    jsonLd: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.tags.join(', '),
          wordCount: post.body.join(' ').split(/\s+/).length,
          author: { '@type': 'Person', name: profile.name, url: SITE_URL },
          publisher: { '@type': 'Person', name: profile.brand, url: SITE_URL },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
        }
      : undefined,
  })

  if (!post) return <NotFoundView />

  const index = sortedPosts.findIndex((p) => p.slug === post.slug)
  const next = sortedPosts[(index + 1) % sortedPosts.length]

  return (
    <SiteChrome>
      <main className="min-h-svh bg-white px-4 pt-36 pb-28 sm:px-8 lg:px-12 xl:px-16">
        <article className="mx-auto max-w-[720px]">
          <Link
            to="/blog"
            state={{ returnTo }}
            className="font-body inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-black/60 uppercase transition-colors hover:text-black"
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
            All blogs
          </Link>

          <header className="mt-8">
            <div className="font-body flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] tracking-wide text-black/50 uppercase">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>

            <h1 className="font-body mt-4 text-[clamp(2rem,5vw,56px)] leading-[1.15] font-semibold text-black">
              {post.title}
            </h1>
            <p className="font-body mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.6] text-black/70">
              {post.excerpt}
            </p>

            <div className="mt-8 aspect-[384/240] w-full overflow-hidden border border-black bg-white">
              <BlogVector name={post.vector} />
            </div>
          </header>

          <div className="font-body mt-12 space-y-6">
            {post.body.map((paragraph, index) => (
              <p key={index} className="text-[17px] leading-[1.75] text-black/85">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-2 border-t border-black/15 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-body rounded-full border border-black/20 px-3 py-1 text-[12px] tracking-wide text-black/60 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Marks the end of the read, so the chips know when to come up. */}
          <div ref={endRef} aria-hidden="true" className="mt-12 h-px w-full" />
        </article>
      </main>

      <BlogEndChips visible={atEnd} next={next} returnTo={returnTo} />
      <SlowDownModal
        open={slowDownOpen}
        suggestion={suggestion}
        returnTo={returnTo}
        onClose={() => setSlowDownOpen(false)}
      />
    </SiteChrome>
  )
}
