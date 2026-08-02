import { ScrollRefresh } from '@/components/ScrollRefresh'
import { HeroSection } from '@/sections/HeroSection'
import { MarqueeSection } from '@/sections/MarqueeSection'
import { AboutSection } from '@/sections/AboutSection'
import { WorkSection } from '@/sections/WorkSection'
import { BlogSection } from '@/sections/BlogSection'
import { VideosSection } from '@/sections/VideosSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { ContactSection } from '@/sections/ContactSection'
import { Footer } from '@/sections/Footer'
import { about, footerSocials, profile } from '@/data/content'
import { SITE_URL, useSeo } from '@/lib/seo'

export default function Home() {
  useSeo({
    title: `${profile.name} — ${profile.role}`,
    description: about.description,
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      alternateName: profile.brand,
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      url: SITE_URL,
      address: { '@type': 'PostalAddress', addressRegion: 'Himachal Pradesh', addressCountry: 'IN' },
      sameAs: footerSocials.map((social) => social.href),
    },
  })

  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <ScrollRefresh />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <BlogSection />
      <VideosSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
