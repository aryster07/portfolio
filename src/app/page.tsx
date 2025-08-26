import HeroSection from '@/components/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "7framesaryan - Professional Portfolio",
  description: "7framesaryan - Professional Portfolio of Aryan Rana, UI/UX designer and web developer from Himachal Pradesh. Official website showcasing professional design and development projects.",
  openGraph: {
    title: "7framesaryan - Professional Portfolio",
    description: "7framesaryan - Professional Portfolio of Aryan Rana, UI/UX designer and web developer from Himachal Pradesh. Official website showcasing professional work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "7framesaryan - Professional Portfolio",
    description: "7framesaryan - Professional Portfolio of Aryan Rana, UI/UX designer and web developer from Himachal Pradesh. Official website showcasing professional work.",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      
    </main>
  )
}
