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
 * "Core Design Skills" — Figma node 6:353.
 *
 * Centred heading with no eyebrow and no description, matching About Me and
 * From The Blog. The cards then run in a single horizontal band beneath it
 * rather than sitting in a column beside an intro.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] px-4 py-24 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16"
    >
      <SectionHeading className="mb-12 sm:mb-16">{skillsIntro.title}</SectionHeading>

      <div className="relative mx-auto max-w-[1400px]">
        <Sparkle className="-top-4 -left-1 size-4" />
        <Sparkle className="-top-2 right-[18%] size-3" />

        {/* Two across on mobile, then the full band once there's room for it. */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-7">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, icon, delay }: { name: string; icon: SkillIcon; delay: number }) {
  return (
    <FadeIn delay={delay} y={28} className="h-full">
      <div
        className="group flex h-[130px] flex-col items-center justify-center gap-3 rounded-[18px]
                   border border-[#D7E2EA]/40 bg-[#121212] px-3 transition-colors duration-500
                   hover:border-[#D7E2EA] hover:bg-[#16191B] sm:h-[150px] sm:gap-4 sm:rounded-[20px]
                   sm:px-4"
      >
        <span className="size-9 text-[#D7E2EA] transition-transform duration-500 group-hover:scale-110 sm:size-11">
          <SkillVector name={icon} />
        </span>
        <p className="font-mono text-center text-[10px] leading-[1.3] font-medium text-[#D7E2EA] uppercase sm:text-[12px]">
          {name}
        </p>
      </div>
    </FadeIn>
  )
}
