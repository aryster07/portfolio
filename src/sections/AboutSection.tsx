import { FadeIn } from '@/components/FadeIn'
import { SectionHeading, CircleBleed } from '@/components/SectionHeading'
import { about, profile } from '@/data/content'

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/** White band, Figma node 6:231. */
export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-clip border-b-[12px] border-black bg-white px-6 pt-16 pb-28 sm:px-12 sm:pb-32 lg:px-[188px]"
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
        <SectionHeading tone="dark">{about.title}</SectionHeading>

        <FadeIn delay={0.12} y={24}>
          <p
            className="font-body font-medium text-black"
            style={{ fontSize: 'clamp(1.05rem, 1.55vw, 1.5rem)', lineHeight: 1.6 }}
          >
            {about.description}
          </p>
        </FadeIn>

        {/* Location, called out rather than buried in the paragraph. */}
        <FadeIn delay={0.24} y={20}>
          <p className="font-body inline-flex items-center gap-3 rounded-full border border-black/15 px-5 py-2.5 text-[15px] font-medium text-black">
            <svg width="18" height="18" viewBox="0 0 24 24" {...icon}>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
            <span aria-hidden="true" className="h-4 w-px bg-black/20" />
            <svg width="22" height="22" viewBox="0 0 24 24" {...icon}>
              <path d="M2 19h20L14.5 7l-4 6-2.5-3z" />
              <path d="m10.5 13 2-3" />
              <circle cx="18" cy="6" r="2" />
            </svg>
          </p>
        </FadeIn>
      </div>

      {/* Only the top sliver of the disc shows — a notch, not a bubble. */}
      <CircleBleed edge="bottom" size={234} reveal={0.28} />
    </section>
  )
}
