import { FadeIn } from '@/components/FadeIn'
import { SectionHeading } from '@/components/SectionHeading'
import { SkillVector } from '@/components/SkillVectors'
import { skills, skillsIntro, type SkillIcon } from '@/data/content'

function Sparkle({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none absolute text-[#D7E2EA]/70 ${className}`}
    >
      <path d="M12 0c.9 6.4 4.7 9.7 12 12-7.3 2.3-11.1 5.6-12 12-.9-6.4-4.7-9.7-12-12C7.3 9.7 11.1 6.4 12 0Z" />
    </svg>
  )
}

/**
 * "Core Design Skills" — Figma node 6:353. Monospace type, outlined cards in a
 * 4 + 3 layout with the second row inset so it reads as a staggered block.
 */
export function SkillsSection() {
  const rowOne = skills.slice(0, 4)
  const rowTwo = skills.slice(4)

  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-6 py-24 sm:px-12 lg:px-24 lg:py-[120px]"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
        {/* --- Intro column ------------------------------------------------ */}
        <div className="lg:w-[720px] lg:shrink-0">
          <FadeIn delay={0} y={24}>
            <p className="font-mono text-[13px] font-bold tracking-[0.2em] text-[#D7E2EA] uppercase">
              // {skillsIntro.eyebrow}
            </p>
          </FadeIn>
          <SectionHeading align="left" className="mt-6">
            {skillsIntro.title}
          </SectionHeading>
          <FadeIn delay={0.2} y={24}>
            <p className="font-body mt-7 max-w-[560px] text-[15px] leading-[1.75] text-[#D7E2EA]/80">
              {skillsIntro.description}
            </p>
          </FadeIn>
        </div>

        {/* --- Card grid ---------------------------------------------------- */}
        <div className="relative flex flex-1 flex-col gap-6">
          <Sparkle className="-top-3 left-[-10px] size-4" />
          <Sparkle className="top-[-8px] right-1/4 size-3" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {rowOne.map((skill, i) => (
              <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 0.08} />
            ))}
          </div>

          {/* Row two is inset by half a column so the block staggers. */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:px-[12.5%]">
            {rowTwo.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                delay={0.32 + i * 0.08}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, icon, delay }: { name: string; icon: SkillIcon; delay: number }) {
  return (
    <FadeIn delay={delay} y={28}>
      <div
        className="group flex h-[160px] flex-col items-center justify-center gap-4 rounded-[20px]
                   border border-[#D7E2EA]/40 px-3 transition-colors duration-500
                   hover:border-[#D7E2EA]"
      >
        <span className="size-12 text-[#D7E2EA] transition-transform duration-500 group-hover:scale-110">
          <SkillVector name={icon} />
        </span>
        <p className="font-mono text-center text-[13px] leading-[1.3] font-medium text-[#D7E2EA] uppercase">
          {name}
        </p>
      </div>
    </FadeIn>
  )
}
