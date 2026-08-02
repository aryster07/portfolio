import { Link, useLocation, useParams } from 'react-router'
import { BlogVector } from '@/components/BlogVectors'
import { SiteChrome } from '@/components/SiteChrome'
import { NotFoundView } from '@/routes/NotFound'
import { formatPostDate, getPost, profile, sortedPosts } from '@/data/content'
import { getBlogReturnTo } from '@/lib/blogNavigation'
import { SITE_URL, useSeo } from '@/lib/seo'

/** /blog/:slug — one article per URL. */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const returnTo = getBlogReturnTo(location.state)
  const post = slug ? getPost(slug) : undefined

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
          wordCount: [post.intro, ...post.sections.flatMap((s) => s.body)]
            .join(' ')
            .split(/\s+/).length,
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
      <main className="min-h-svh bg-white px-6 pt-36 pb-28 sm:px-12">
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

            <h1 className="font-heading mt-4 text-[clamp(2rem,5vw,56px)] leading-[1.15] text-black uppercase">
              {post.title}
            </h1>
            <p className="font-body mt-5 text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.6] text-black/70">
              {post.excerpt}
            </p>

            <div className="mt-8 aspect-[384/240] w-full overflow-hidden border border-black bg-white">
              <BlogVector name={post.vector} />
            </div>
          </header>

          <div className="font-body mt-12">
            <p className="text-[17px] leading-[1.75] text-black">{post.intro}</p>

            {post.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="text-[clamp(1.25rem,2.2vw,1.6rem)] font-bold text-black"
                >
                  {section.heading}
                </h2>
                {section.body.map((para, i) => (
                  <p key={i} className="mt-4 text-[17px] leading-[1.75] text-black/85">
                    {para}
                  </p>
                ))}
              </section>
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

          <nav className="mt-12 border-t border-black/15 pt-8">
            <p className="font-body text-[11px] font-bold tracking-[1.2px] text-black/40 uppercase">
              Next
            </p>
            <Link
              to={`/blog/${next.slug}`}
              state={{ returnTo }}
              className="font-body mt-2 block text-[clamp(1.15rem,2vw,1.5rem)] font-bold text-black transition-opacity hover:opacity-60"
            >
              {next.title}
            </Link>
          </nav>
        </article>
      </main>
    </SiteChrome>
  )
}
