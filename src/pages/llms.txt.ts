import type { APIRoute } from 'astro'
import { sortedPosts, profile, work } from '@/data/content'

const SITE = 'https://aryanrana.design'

/**
 * llms.txt — a plain-text map of the site for AI crawlers and assistants.
 * Generated from the same data the pages use, so it cannot drift out of date.
 */
export const GET: APIRoute = () => {
  const plugins = work.filter((item) => item.category === 'plugins')

  const body = `# ${profile.name} (${profile.brand})

> ${profile.role} based in ${profile.location}. Designs product interfaces and design systems, builds Figma plugins, and writes about design practice and product thinking.

## Writing

${sortedPosts.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.excerpt} (${p.topic}, ${p.readingMinutes} min)`).join('\n')}

## Figma plugins

${plugins.map((p) => `- ${p.name}: ${p.meta}${'href' in p && p.href ? ` (${p.href})` : ''}`).join('\n')}

## Contact

- Email: ${profile.email}
- Portfolio: ${SITE}
- Blog index: ${SITE}/blog
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
