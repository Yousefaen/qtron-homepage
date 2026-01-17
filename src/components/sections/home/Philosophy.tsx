'use client'

import Image from 'next/image'
import { Container, Button } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'
import { CONTENT } from '@/lib/constants'
import Link from 'next/link'

export function Philosophy() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <div>
              <p className="text-sm font-semibold tracking-widest text-burgundy-700 uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                {CONTENT.philosophy.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {CONTENT.philosophy.description}
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                At Qtron, we ride technology waves to shake the foundation of investment management with passion, creativity, and humility. Our quantitative strategies are designed to capture market inefficiencies while managing risk systematically.
              </p>
              <Link href="/about">
                <Button variant="outline">
                  Read More About Us
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* Visual */}
          <FadeIn direction="right">
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/spirograph.png"
                  alt="Qtron quantitative patterns"
                  width={500}
                  height={500}
                  className="w-full h-auto opacity-80"
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-burgundy-100 rounded-full opacity-50 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy-100 rounded-full opacity-50 blur-2xl" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
