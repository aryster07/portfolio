import { useEffect } from 'react'

/** Change this once the domain is live — it drives canonicals and JSON-LD. */
export const SITE_URL = 'https://aryanrana.design'

interface SeoOptions {
  title: string
  description: string
  /** Path only, e.g. '/blog/user-research-101'. */
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  /** Root-relative or absolute social preview image. */
  image?: string
  imageAlt?: string
  /** Any JSON-LD object; serialised into a script tag. */
  jsonLd?: Record<string, unknown>
}

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function removeMeta(selector: string) {
  document.head.querySelector(selector)?.remove()
}

/**
 * Per-route document head.
 *
 * This runs on the client. The generic tags in index.html remain the fallback
 * for crawlers that do not execute JavaScript.
 */
export function useSeo({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  image,
  imageAlt,
  jsonLd,
}: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const imageUrl = image ? new URL(image, SITE_URL).toString() : undefined

    document.title = title
    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertLink('canonical', url)

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })

    if (imageUrl) {
      upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
      upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    } else {
      removeMeta('meta[property="og:image"]')
      removeMeta('meta[name="twitter:image"]')
    }

    if (imageAlt) {
      upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt })
      upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt })
    } else {
      removeMeta('meta[property="og:image:alt"]')
      removeMeta('meta[name="twitter:image:alt"]')
    }

    if (publishedTime) {
      upsertMeta('meta[property="article:published_time"]', {
        property: 'article:published_time',
        content: publishedTime,
      })
    } else {
      removeMeta('meta[property="article:published_time"]')
    }

    const scriptId = 'route-jsonld'
    document.getElementById(scriptId)?.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [title, description, path, type, publishedTime, image, imageAlt, jsonLd])
}
