import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./HeroSection'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-zinc-950 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="w-32 h-32 bg-neutral-800 rounded-full mx-auto mb-4"></div>
          <div className="h-8 bg-neutral-800 rounded w-48 mx-auto mb-2"></div>
          <div className="h-4 bg-neutral-700 rounded w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  ),
})

export default HeroSection
