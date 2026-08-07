import { useCallback, useState } from 'react'
import { SlowDownModal } from '@/components/SlowDownModal'
import { useFastScroll } from '@/lib/readingSignals'

interface BlogReadingNudgeProps {
  /** Picked at build time so the island ships no post data of its own. */
  suggestion?: { slug: string; title: string }
}

/**
 * The only interactive part of an article page, so it is the only thing that
 * needs to hydrate. Everything else on the post renders to static HTML.
 */
export default function BlogReadingNudge({ suggestion }: BlogReadingNudgeProps) {
  const [open, setOpen] = useState(false)
  /** One nudge per page load — a second would be nagging, not helping. */
  const [alreadyNudged, setAlreadyNudged] = useState(false)

  const onFastScroll = useCallback(() => {
    setOpen(true)
    setAlreadyNudged(true)
  }, [])

  useFastScroll(onFastScroll, !alreadyNudged)

  return <SlowDownModal open={open} suggestion={suggestion} onClose={() => setOpen(false)} />
}
