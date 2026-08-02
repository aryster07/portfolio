/** Featured videos refreshed with `npm run refresh:videos`. */
import generated from './videos.generated.json'

interface Video {
  /** YouTube watch id. */
  id: string
  title: string
  /** ISO date. */
  published?: string
}

export const videos: Video[] = generated.videos

export const channelUrl = 'https://www.youtube.com/@7frames_aryan'

/** Public thumbnail CDN — your own content, served by YouTube for embedding. */
export const thumbnailFor = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
export const watchUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`
