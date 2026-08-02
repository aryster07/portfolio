import { Link, useLocation } from 'react-router'
import { profile } from '@/data/content'
import { useSeo } from '@/lib/seo'

export default function NotFound() {
  const { pathname } = useLocation()

  useSeo({
    title: `Page not found — ${profile.name}`,
    description: 'The requested portfolio page could not be found.',
    path: pathname,
  })

  return <NotFoundView />
}

export function NotFoundView() {
  return (
    <main className="grid min-h-svh place-items-center bg-[#0C0C0C] px-6 text-center">
      <div>
        <p className="font-heading text-[clamp(4rem,14vw,10rem)] leading-none text-[#D7E2EA]/25">
          404
        </p>
        <h1 className="font-heading mt-6 text-[clamp(1.25rem,3vw,2rem)] text-[#D7E2EA] uppercase">
          Page not found
        </h1>
        <p className="font-body mt-4 text-[15px] text-[#D7E2EA]/60">
          The link may be out of date, or the page may not be published yet.
        </p>
        <Link
          to="/"
          className="font-body mt-10 inline-block rounded-full bg-[#D7E2EA] px-7 py-3 text-[13px]
                     font-bold tracking-widest text-[#0C0C0C] uppercase transition-transform
                     duration-300 hover:scale-105"
        >
          Back home
        </Link>
      </div>
    </main>
  )
}
