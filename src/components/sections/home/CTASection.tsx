'use client'

import { Container, Button } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 bg-burgundy-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy-700 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-burgundy-900 rounded-full opacity-30 translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-burgundy-100 mb-10">
              Discover how Qtron&apos;s quantitative approach can help achieve your investment goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#">
                <Button
                  size="lg"
                  className="bg-white text-burgundy-800 hover:bg-burgundy-50 shadow-lg"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
