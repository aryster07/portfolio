import { useEffect, useRef } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Magnet } from '@/components/Magnet'
import BubbleMenu from '@/components/BubbleMenu'
import SpecularButton from '@/components/SpecularButton'
import { hero, profile } from '@/data/content'

// Module lifetime matches one loaded document. Client-side remounts keep the
// completed hero state; a hard reload evaluates the module again and permits
// one fresh entrance sequence.
let hasPlayedHeroEntrance = false

export function HeroSection() {
  // The magnet is confined to this box, so the pull stops at the edge of the
  // U/X composition instead of reaching the Contact button below it.
  const letterformRef = useRef<HTMLDivElement>(null)
  const playHeroEntrance = useRef(!hasPlayedHeroEntrance).current

  useEffect(() => {
    hasPlayedHeroEntrance = true
  }, [])

  return (
    <section id="home" className="relative flex h-svh min-h-[640px] flex-col bg-[#0C0C0C]">
      <BubbleMenu />

      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-4 pt-28 pb-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:pt-24 xl:gap-16 xl:px-16">
        {/* --- Headline ---------------------------------------------------- */}
        <div className="flex flex-col justify-center gap-2 uppercase">
          <FadeIn delay={0.15} y={40} trigger="mount" play={playHeroEntrance}>
            <h1
              className="hero-heading font-display font-bold"
              style={{
                fontSize: 'clamp(3.5rem, 12.45vw, 223px)',
                lineHeight: 1,
                letterSpacing: '-0.025em',
              }}
            >
              {hero.greeting} {hero.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20} trigger="mount" play={playHeroEntrance}>
            <p
              className="max-w-[482px] font-light tracking-[0.6px] text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 1.34vw, 24px)', lineHeight: 1.375 }}
            >
              {hero.tagline}
            </p>
          </FadeIn>
        </div>

        {/* --- U / X letterforms + portrait -------------------------------- */}
        <div className="flex shrink-0 flex-col items-center justify-center gap-16">
          <div
            ref={letterformRef}
            className="relative grid place-items-center"
            style={{ width: 'clamp(20rem, 39.8vw, 714px)', height: 'clamp(18rem, 26vw, 466px)' }}
          >
            <FadeIn
              delay={0.45}
              duration={0.8}
              y={20}
              trigger="mount"
              play={playHeroEntrance}
              className="pointer-events-none absolute inset-0"
            >
              <span
                aria-hidden="true"
                className="letterform-outline font-letterform pointer-events-none absolute
                           top-1/2 left-0 -translate-y-1/2 leading-none select-none"
                style={{ fontSize: 'clamp(11rem, 26.27vw, 470px)' }}
              >
                U
              </span>
              <span
                aria-hidden="true"
                className="font-letterform pointer-events-none absolute top-1/2 right-0
                           -translate-y-1/2 leading-none text-[#B6B6B6] select-none"
                style={{ fontSize: 'clamp(11rem, 26.27vw, 470px)' }}
              >
                X
              </span>
            </FadeIn>

            <FadeIn
              delay={0.6}
              y={30}
              trigger="mount"
              play={playHeroEntrance}
              className="relative z-10"
              style={{ width: 'clamp(18rem, 26vw, 466px)', height: 'clamp(18rem, 26vw, 466px)' }}
            >
              <Magnet
                padding={80}
                strength={3}
                boundsRef={letterformRef}
              >
                <img
                  src={profile.portrait}
                  alt={`${profile.name}, ${profile.role}`}
                  className="size-full object-contain"
                  fetchPriority="high"
                />
              </Magnet>
            </FadeIn>
          </div>

          {/* --- Contact pill --------------------------------------------- */}
          <FadeIn delay={0.75} y={20} trigger="mount" play={playHeroEntrance}>
            <SpecularButton
              aria-label={`Email ${profile.name}`}
              onClick={() => {
                window.location.href = `mailto:${profile.email}`
              }}
              className="tracking-[1.6px] uppercase"
            >
              Contact Me
            </SpecularButton>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
