import { Hero } from '@/components/sections/home/Hero'
import { ValueProps } from '@/components/sections/home/ValueProps'
import { QuoteSection } from '@/components/sections/home/QuoteSection'
import { Philosophy } from '@/components/sections/home/Philosophy'
import { CTASection } from '@/components/sections/home/CTASection'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <QuoteSection />
      <Philosophy />
      <CTASection />
    </main>
  )
}
