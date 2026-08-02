import { FadeIn } from '@/components/FadeIn'
import { SectionHeading } from '@/components/SectionHeading'
import { channelUrl, thumbnailFor, videos, watchUrl } from '@/data/videos'

function PlayBadge() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-0 grid place-items-center transition-transform duration-500
                 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
    >
      <span className="grid size-9 place-items-center rounded-full bg-[#0C0C0C]/70 ring-2 ring-[#D7E2EA]/70 backdrop-blur-sm sm:size-12 lg:size-14">
        <svg className="size-3 sm:size-4 lg:size-[18px]" viewBox="0 0 24 24" fill="#D7E2EA" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  )
}

/** Latest uploads. Populated from the channel feed at build time — see data/videos.ts. */
export function VideosSection() {
  return (
    <section id="videos" className="bg-[#0C0C0C] px-4 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
      <SectionHeading className="mb-10 sm:mb-14">On YouTube</SectionHeading>

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
        {videos.map((video, i) => (
          <FadeIn key={video.id} delay={i * 0.08} y={28}>
            <a
              href={watchUrl(video.id)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA]"
            >
              <div className="relative aspect-video overflow-hidden rounded-[14px] bg-[#161616] sm:rounded-[18px] lg:rounded-[22px]">
                <img
                  src={thumbnailFor(video.id)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700
                             ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-[#0C0C0C]/20 transition-colors duration-500 group-hover:bg-[#0C0C0C]/40" />
                <PlayBadge />
              </div>

              <h3 className="font-body mt-3 line-clamp-3 text-[12px] leading-[1.35] font-medium text-[#D7E2EA] transition-colors group-hover:text-white sm:mt-4 sm:text-[15px] sm:leading-[1.4] lg:text-[16px]">
                {video.title}
              </h3>
              {video.published && (
                <p className="font-body mt-1 text-[10px] text-[#D7E2EA]/45 sm:text-[12px]">{video.published}</p>
              )}
            </a>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/30
                     px-7 py-3 text-[12px] font-bold tracking-widest text-[#D7E2EA]/80 uppercase
                     transition-colors duration-300 hover:border-[#D7E2EA] hover:text-[#D7E2EA]"
        >
          Explore Channel
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </section>
  )
}
