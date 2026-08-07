import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// Drives canonicals, Open Graph URLs and the generated sitemap.
export const SITE = 'https://aryanrana.design'

export default defineConfig({
  site: SITE,
  // Every route is pre-rendered to real HTML at build time. That is the whole
  // point of the move: a crawler that never runs JavaScript still gets the
  // article text, the headings and the per-page metadata.
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { '@': new URL('./src', import.meta.url).pathname },
    },
  },
  build: { format: 'directory' },
})
