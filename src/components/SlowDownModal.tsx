import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface SlowDownModalProps {
  open: boolean
  /** A different recent post, for readers who bailed because of the topic. */
  suggestion?: { slug: string; title: string }
  onClose: () => void
}

/**
 * Shown once per post when someone scrolls the whole way down at speed. Either
 * they slow down and read, or the topic is not for them and we hand them a
 * different one — both are better than watching them leave.
 */
export function SlowDownModal({ open, suggestion, onClose }: SlowDownModalProps) {
  const dismissRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow

    // Holding the page still is the whole point — you cannot skim past this one.
    document.body.style.overflow = 'hidden'
    dismissRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[1100] grid place-items-center bg-black/60 px-4"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="slow-down-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-[440px] border border-black bg-white p-7 shadow-[0_6px_20px_rgba(0,0,0,0.35)] sm:p-9"
          >
            <h2
              id="slow-down-title"
              className="font-body text-[clamp(1.5rem,4.5vw,2rem)] leading-[1.2] font-semibold text-black"
            >
              Whoaaa! Slow down there, homie
            </h2>
            <p className="font-body mt-4 text-[15px] leading-[1.6] text-black/70">
              Read it — you might actually learn something.
            </p>

            <button
              ref={dismissRef}
              type="button"
              onClick={onClose}
              className="font-body mt-7 w-full rounded-full border border-black bg-black px-5 py-3 text-[13px]
                         font-bold tracking-wide text-white uppercase transition-colors hover:bg-white hover:text-black"
            >
              Alright, I'll read
            </button>

            {suggestion && (
              <div className="mt-6 border-t border-black/15 pt-5">
                <p className="font-body text-[11px] font-bold tracking-[1.2px] text-black/40 uppercase">
                  Don't like this topic?
                </p>
                <a
                  href={`/blog/${suggestion.slug}`}
                  onClick={onClose}
                  className="font-body group mt-2 flex items-start gap-2 text-[15px] leading-[1.4] font-bold text-black transition-opacity hover:opacity-60"
                >
                  <span>Read this one — {suggestion.title}</span>
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
                    className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
