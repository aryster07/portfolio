/**
 * Pulls the latest uploads from a YouTube channel's public RSS feed and writes
 * them to src/data/videos.generated.json, which the Videos section reads.
 *
 * Why RSS and not the Data API:
 *   - no API key, so nothing to leak in a client bundle
 *   - no quota
 *   - the feed is public and stable
 * The trade-off is that it only exposes the 15 most recent uploads, which is
 * all this section needs.
 *
 * Run `npm run refresh:videos` when the featured list should be updated, then
 * commit the generated JSON so production builds remain deterministic.
 *
 * Requires YOUTUBE_CHANNEL_ID (looks like UCxxxxxxxxxxxxxxxxxxxxxx).
 * Find it at https://www.youtube.com/account_advanced while signed in.
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/videos.generated.json')
// Public identifiers, not secrets — defaulted so the build works with no env
// setup. Set YOUTUBE_PLAYLIST_ID to curate exactly which uploads appear.
const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCjdo7W3ofVYwwbn83dHY6rQ'
const playlistId = process.env.YOUTUBE_PLAYLIST_ID

function write(videos) {
  writeFileSync(OUT, `${JSON.stringify({ videos }, null, 2)}\n`)
}

// A playlist feed wins when configured: the channel feed is strictly
// chronological, so a personal upload would otherwise outrank the design work.
const feed = playlistId
  ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`
  : `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`

try {
  const res = await fetch(feed)
  if (!res.ok) throw new Error(`feed responded ${res.status}`)
  const xml = await res.text()

  const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .map(([, entry]) => ({
      id: entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1],
      title: entry
        .match(/<title>([\s\S]*?)<\/title>/)?.[1]
        ?.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim(),
      published: entry.match(/<published>(.*?)<\/published>/)?.[1]?.slice(0, 10),
    }))
    .filter((v) => v.id && v.title)
    .slice(0, 3)

  if (!videos.length) throw new Error('feed parsed but contained no entries')

  write(videos)
  console.log(`[youtube] wrote ${videos.length} videos.`)
} catch (err) {
  // Never fail the build over this — fall back to whatever is committed.
  console.warn(`[youtube] skipped: ${err.message}`)
}
