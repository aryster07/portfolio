import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router'
import { SiteChrome } from '@/components/SiteChrome'
import {
  caseStudies,
  type CaseStudyGallery,
  type CaseStudyImage,
} from '@/data/caseStudies'
import { profile } from '@/data/content'
import { SITE_URL, useSeo } from '@/lib/seo'
import { NotFoundView } from '@/routes/NotFound'

const WORK_SECTION_RETURN = '/#work'

function Arrow({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === 'left' ? '' : 'transition-transform duration-300 group-hover:translate-x-1'}
    >
      {direction === 'left' ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  )
}

function ImageFigure({ image }: { image: CaseStudyImage }) {
  return (
    <figure className="flex h-full flex-col rounded-[22px] border border-black/10 bg-white p-3 sm:p-5">
      <div className="grid min-h-0 flex-1 place-items-center overflow-hidden rounded-[14px] bg-[#F1F1ED] p-3 sm:p-6">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="max-h-[760px] max-w-full object-contain"
        />
      </div>
      <figcaption className="font-body px-1 pt-3 text-[12px] leading-[1.5] text-black/55 sm:text-[13px]">
        {image.caption}
      </figcaption>
    </figure>
  )
}

function Gallery({ gallery }: { gallery: CaseStudyGallery }) {
  const columns =
    gallery.layout === 'comparison'
      ? 'grid-cols-1 md:grid-cols-2'
      : gallery.images.length === 3
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-1 sm:grid-cols-2'

  return (
    <section aria-labelledby={`gallery-${gallery.id}`} className="mt-24 sm:mt-32">
      <div className="max-w-[720px]">
        <p className="font-body text-[11px] font-bold tracking-[0.18em] text-black/45 uppercase">
          Design evidence
        </p>
        <h2
          id={`gallery-${gallery.id}`}
          className="font-heading mt-3 text-[clamp(2rem,5vw,4rem)] leading-[1.08] text-black uppercase"
        >
          {gallery.heading}
        </h2>
        <p className="font-body mt-5 text-[16px] leading-[1.7] text-black/65 sm:text-[18px]">
          {gallery.description}
        </p>
      </div>

      <div className={`mt-10 grid items-stretch gap-5 sm:gap-7 ${columns}`}>
        {gallery.images.map((image) => (
          <ImageFigure key={image.src} image={image} />
        ))}
      </div>
    </section>
  )
}

function NumberedList({ items, tone }: { items: readonly string[]; tone: 'light' | 'dark' }) {
  const dark = tone === 'dark'

  return (
    <ol className="mt-8 space-y-3">
      {items.map((item, index) => (
        <li
          key={item}
          className={`font-body grid grid-cols-[32px_minmax(0,1fr)] gap-3 rounded-[16px] border p-4 text-[14px] leading-[1.6] sm:grid-cols-[38px_minmax(0,1fr)] sm:gap-4 sm:p-5 sm:text-[16px] ${
            dark
              ? 'border-[#D7E2EA]/15 bg-[#D7E2EA]/5 text-[#D7E2EA]/80'
              : 'border-black/10 bg-black/[0.025] text-black/70'
          }`}
        >
          <span
            aria-hidden="true"
            className={`grid size-8 place-items-center rounded-full text-[11px] font-bold sm:size-[38px] ${
              dark ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'bg-[#0C0C0C] text-[#D7E2EA]'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="self-center">{item}</span>
        </li>
      ))}
    </ol>
  )
}

/** One reusable detail-view route for all internally published case studies. */
export default function CaseStudy() {
  const { id } = useParams<{ id: string }>()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const project = caseStudies.find((caseStudy) => caseStudy.id === id)

  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true })
  }, [project?.id])

  useSeo({
    title: project ? `${project.title} — ${profile.name}` : `Case study not found — ${profile.name}`,
    description: project?.description ?? 'The requested portfolio case study could not be found.',
    path: `/case-studies/${id ?? ''}`,
    image: project?.hero.src,
    imageAlt: project?.hero.alt,
    jsonLd: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          alternateName: project.subtitle,
          description: project.description,
          url: `${SITE_URL}/case-studies/${project.id}`,
          image: `${SITE_URL}${project.hero.src}`,
          creator: { '@type': 'Person', name: profile.name, url: SITE_URL },
          keywords: [project.category, ...project.tools].join(', '),
        }
      : undefined,
  })

  if (!project) return <NotFoundView />

  const projectIndex = caseStudies.indexOf(project)
  const nextProject = caseStudies[(projectIndex + 1) % caseStudies.length]

  return (
    <SiteChrome>
      <main className="bg-[#F4F4F0] px-5 pt-32 pb-28 text-black sm:px-8 sm:pt-40 md:px-10 lg:px-14">
        <article className="mx-auto max-w-[1400px]">
          <header className="mx-auto max-w-[1040px]">
            <Link
              to={WORK_SECTION_RETURN}
              className="font-body inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-black/55 uppercase transition-colors hover:text-black"
            >
              <Arrow direction="left" />
              Back to work
            </Link>

            <p className="font-body mt-12 text-[11px] font-bold tracking-[0.2em] text-black/45 uppercase sm:mt-16">
              {project.category}
            </p>
            <h1
              ref={titleRef}
              tabIndex={-1}
              className="font-heading mt-4 max-w-[980px] text-[clamp(3rem,8vw,7.5rem)] leading-[0.94] text-black uppercase outline-none"
            >
              {project.title}
            </h1>
            <p className="font-body mt-7 max-w-[780px] text-[clamp(1.15rem,2.2vw,1.75rem)] leading-[1.45] text-black/65">
              {project.description}
            </p>

            <ul className="font-body mt-8 flex flex-wrap gap-2" aria-label="Project focus">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/15 px-4 py-2 text-[11px] font-medium tracking-[0.05em] text-black/65 uppercase sm:text-[12px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </header>

          <figure className="mt-14 overflow-hidden rounded-[22px] border border-black/10 bg-white p-2 sm:mt-20 sm:rounded-[32px] sm:p-3">
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              width={project.hero.width}
              height={project.hero.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[3/2] w-full rounded-[16px] object-cover sm:rounded-[24px]"
            />
            <figcaption className="font-body px-3 py-3 text-[12px] text-black/50 sm:px-5 sm:py-4 sm:text-[13px]">
              {project.hero.caption}
            </figcaption>
          </figure>

          <section
            aria-labelledby="project-details"
            className="mt-12 grid gap-10 border-y border-black/15 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16 sm:mt-16 sm:py-14"
          >
            <div>
              <p className="font-body text-[11px] font-bold tracking-[0.18em] text-black/45 uppercase">
                Project
              </p>
              <h2 id="project-details" className="font-heading mt-3 text-[clamp(2rem,4vw,3.5rem)] uppercase">
                Details
              </h2>
            </div>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
              <div>
                <dt className="font-body text-[10px] font-bold tracking-[0.16em] text-black/40 uppercase">Role</dt>
                <dd className="font-body mt-2 text-[15px] font-medium text-black/80">{project.role}</dd>
              </div>
              <div>
                <dt className="font-body text-[10px] font-bold tracking-[0.16em] text-black/40 uppercase">
                  Timeline
                </dt>
                <dd className="font-body mt-2 text-[15px] font-medium text-black/80">{project.timeline}</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="font-body text-[10px] font-bold tracking-[0.16em] text-black/40 uppercase">
                  Focus
                </dt>
                <dd className="font-body mt-2 text-[15px] font-medium text-black/80">{project.subtitle}</dd>
              </div>
              <div className="col-span-2 sm:col-span-3">
                <dt className="font-body text-[10px] font-bold tracking-[0.16em] text-black/40 uppercase">Tools</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-body rounded-full bg-black px-3.5 py-1.5 text-[11px] font-medium text-[#D7E2EA]"
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </section>

          <section
            aria-labelledby="reported-outcomes"
            className="mt-20 rounded-[24px] bg-[#0C0C0C] px-5 py-8 text-[#D7E2EA] sm:mt-28 sm:rounded-[32px] sm:px-10 sm:py-12 lg:px-14"
          >
            <p className="font-body text-[10px] font-bold tracking-[0.18em] text-[#D7E2EA]/45 uppercase">
              {project.evidenceLabel}
            </p>
            <h2
              id="reported-outcomes"
              className="font-heading mt-3 text-[clamp(2rem,5vw,4rem)] leading-none uppercase"
            >
              Project impact
            </h2>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-[#D7E2EA]/15 bg-[#D7E2EA]/15 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-[#0C0C0C] p-5 sm:p-7">
                  <dt className="font-heading text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#D7E2EA] uppercase">
                    {stat.metric}
                  </dt>
                  <dd className="font-body mt-4 text-[14px] font-bold text-[#D7E2EA]">{stat.label}</dd>
                  <dd className="font-body mt-1 text-[12px] leading-[1.5] text-[#D7E2EA]/50">
                    {stat.description}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="font-body mt-5 max-w-[760px] text-[11px] leading-[1.6] text-[#D7E2EA]/45">
              {project.evidenceNote}
            </p>
          </section>

          <section className="mt-24 grid gap-12 sm:mt-32 lg:grid-cols-2 lg:gap-8" aria-label="Problem and response">
            <div className="rounded-[24px] border border-black/10 bg-white p-5 sm:p-8">
              <p className="font-body text-[11px] font-bold tracking-[0.18em] text-black/45 uppercase">01 / Problem</p>
              <h2 className="font-heading mt-3 text-[clamp(2rem,4vw,3.5rem)] leading-none uppercase">
                The challenge
              </h2>
              <NumberedList items={project.challenges} tone="light" />
            </div>

            <div className="rounded-[24px] bg-[#0C0C0C] p-5 text-[#D7E2EA] sm:p-8">
              <p className="font-body text-[11px] font-bold tracking-[0.18em] text-[#D7E2EA]/45 uppercase">
                02 / Response
              </p>
              <h2 className="font-heading mt-3 text-[clamp(2rem,4vw,3.5rem)] leading-none uppercase">
                The solution
              </h2>
              <NumberedList items={project.solutions} tone="dark" />
            </div>
          </section>

          {project.galleries.map((gallery) => (
            <Gallery key={gallery.id} gallery={gallery} />
          ))}

          <section
            aria-labelledby="case-study-results"
            className="mt-24 grid gap-10 border-t border-black/15 pt-14 sm:mt-32 sm:pt-20 lg:grid-cols-[minmax(260px,0.75fr)_minmax(0,1.5fr)] lg:gap-20"
          >
            <div>
              <p className="font-body text-[11px] font-bold tracking-[0.18em] text-black/45 uppercase">
                03 / Outcome
              </p>
              <h2
                id="case-study-results"
                className="font-heading mt-3 text-[clamp(2.25rem,5vw,4.5rem)] leading-none uppercase"
              >
                Results
              </h2>
            </div>
            <NumberedList items={project.results} tone="light" />
          </section>

          <nav
            aria-label="Case study navigation"
            className="mt-24 grid gap-4 rounded-[24px] bg-[#D7E2EA] p-5 sm:mt-32 sm:grid-cols-[1fr_auto] sm:items-end sm:p-9"
          >
            <div>
              <p className="font-body text-[10px] font-bold tracking-[0.18em] text-black/45 uppercase">
                Next case study
              </p>
              <p className="font-heading mt-3 text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.05] text-black uppercase">
                {nextProject.title}
              </p>
            </div>
            <Link
              to={`/case-studies/${nextProject.id}`}
              className="group font-body inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-[11px] font-bold tracking-[0.12em] text-[#D7E2EA] uppercase sm:px-6"
            >
              View project
              <Arrow />
            </Link>
          </nav>

          <div className="mt-8 text-center">
            <Link
              to={WORK_SECTION_RETURN}
              className="font-body inline-flex items-center gap-2 border-b border-black pb-1 text-[12px] font-bold tracking-[0.12em] text-black uppercase"
            >
              View all work
              <Arrow />
            </Link>
          </div>
        </article>
      </main>
    </SiteChrome>
  )
}
