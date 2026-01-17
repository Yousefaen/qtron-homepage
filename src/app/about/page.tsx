import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { Outperformance } from '@/components/sections/about/Outperformance'
import { Transparency } from '@/components/sections/about/Transparency'
import { CostEfficiency } from '@/components/sections/about/CostEfficiency'
import { CTASection } from '@/components/sections/home/CTASection'

export const metadata: Metadata = {
  title: 'About Us | Qtron Investments',
  description: 'Learn about Qtron Investments - a quantitative investment manager focused on outperformance, transparency, and cost efficiency.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Outperformance />
      <Transparency />
      <CostEfficiency />
      <CTASection />
    </main>
  )
}
