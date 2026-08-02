import { FadeIn } from '@/components/FadeIn'
import { SectionHeading, CircleBleed } from '@/components/SectionHeading'
import { contact, contactChannels } from '@/data/content'

/**
 * "Contact Me" — Figma node 17:75, updated to a light band.
 *
 * Three full-width buttons stacked one under another: brand mark, channel,
 * handle, and an affordance on the right. The exported Figma glyphs are
 * flat-coloured artwork, so they're forced to ink with a brightness filter and
 * inverted on hover.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-clip bg-[#F8F9FA] px-6 py-24 sm:px-12 lg:px-24"
    >
      <CircleBleed edge="top" size={122} reveal={0.32} />

      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
        <SectionHeading tone="dark">{contact.title}</SectionHeading>
        <FadeIn delay={0.1} y={24}>
          <p className="font-body text-[clamp(0.95rem,1.2vw,18px)] leading-[1.6] text-[#4B5563]">
            {contact.description}
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-12 flex max-w-[560px] flex-col gap-4">
        {contactChannels.map((channel, i) => (
          <FadeIn key={channel.label} delay={0.15 + i * 0.08} y={20}>
            <a
              href={channel.href}
              {...(channel.href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className="group flex w-full items-center gap-4 rounded-full border-2 border-[#111827]
                         bg-transparent px-5 py-4 transition-colors duration-300
                         hover:bg-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4
                         focus-visible:outline-[#111827] sm:px-6"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#111827] transition-colors duration-300 group-hover:bg-[#F8F9FA]">
                <img
                  src={channel.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 brightness-0 invert transition group-hover:invert-0"
                />
              </span>

              <span className="min-w-0 flex-1 text-left">
                <span className="block text-[11px] font-bold tracking-[1.2px] text-[#6B7280] uppercase transition-colors group-hover:text-[#F8F9FA]/60">
                  {channel.label}
                </span>
                <span className="font-body block truncate text-[15px] font-medium text-[#111827] transition-colors group-hover:text-[#F8F9FA]">
                  {channel.value}
                </span>
              </span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-[#111827] transition-all duration-300 group-hover:translate-x-1
                           group-hover:-translate-y-1 group-hover:text-[#F8F9FA]"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
