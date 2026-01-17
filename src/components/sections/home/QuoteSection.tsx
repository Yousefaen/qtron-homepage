'use client'

import { Container } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'
import { CONTENT } from '@/lib/constants'

export function QuoteSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[200px] font-serif text-white leading-none">&ldquo;</div>
        <div className="absolute bottom-10 right-10 text-[200px] font-serif text-white leading-none rotate-180">&rdquo;</div>
      </div>

      <Container size="md" className="relative z-10">
        <FadeIn>
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed italic">
              &ldquo;{CONTENT.quote.text}&rdquo;
            </p>
            <footer className="mt-8">
              <cite className="text-burgundy-300 text-lg font-medium not-italic">
                — {CONTENT.quote.author}
              </cite>
            </footer>
          </blockquote>
        </FadeIn>
      </Container>
    </section>
  )
}
