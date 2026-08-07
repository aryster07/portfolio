import type { APIRoute } from 'astro'
import { caseStudies } from '@/data/caseStudies'
import { sortedPosts } from '@/data/content'

const SITE = 'https://aryanrana.design'

interface Entry {
  path: string
  /** Omitted rather than faked: a build timestamp would claim every page
   *  changed on every deploy, which is exactly the signal not to send. */
  lastmod?: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
}

function buildEntries(): Entry[] {
  // The newest post is the last time the home page and the index actually
  // changed, since both are lists driven by that data.
  const newestPost = sortedPosts[0]?.date

  return [
    { path: '/', lastmod: newestPost, changefreq: 'monthly', priority: '1.0' },
    { path: '/blog', lastmod: newestPost, changefreq: 'weekly', priority: '0.9' },
    ...sortedPosts.map(
      (post): Entry => ({
        path: `/blog/${post.slug}`,
        lastmod: post.date,
        changefreq: 'yearly',
        priority: '0.8',
      }),
    ),
    ...caseStudies.map(
      (study): Entry => ({
        path: `/case-studies/${study.id}`,
        changefreq: 'yearly',
        priority: '0.7',
      }),
    ),
  ]
}

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * /sitemap.xml — generated from the same data that generates the routes, so it
 * cannot drift out of sync the way a hand-maintained file does.
 */
export const GET: APIRoute = () => {
  const urls = buildEntries()
    .map((entry) => {
      const loc = `${SITE}${entry.path === '/' ? '/' : entry.path}`
      return [
        '  <url>',
        `    <loc>${escape(loc)}</loc>`,
        entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>` : null,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
