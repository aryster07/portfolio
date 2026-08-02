import { lazy, Suspense } from 'react'

const CaseStudy = lazy(() => import('@/routes/CaseStudy'))

/** Route-level boundary keeps case-study data and galleries out of the homepage bundle. */
export default function CaseStudyRoute() {
  return (
    <Suspense
      fallback={
        <main className="grid min-h-svh place-items-center bg-[#F4F4F0] text-black">
          <p className="font-body text-[12px] font-bold tracking-[0.18em] uppercase">
            Loading case study
          </p>
        </main>
      }
    >
      <CaseStudy />
    </Suspense>
  )
}
