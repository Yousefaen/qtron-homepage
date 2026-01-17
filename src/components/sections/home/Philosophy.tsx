'use client'

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
            <div className="relative">
              {/* Abstract data visualization */}
              <div className="aspect-square bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 relative overflow-hidden">
                {/* Grid lines */}
                <div className="absolute inset-8 border border-slate-100 rounded-xl" />
                <div className="absolute inset-16 border border-slate-100 rounded-lg" />

                {/* Data points */}
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Connecting lines */}
                  <path
                    d="M 40 160 L 70 120 L 100 140 L 130 80 L 160 60"
                    fill="none"
                    stroke="#8f1a40"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.3"
                  />
                  <path
                    d="M 40 140 L 70 100 L 100 110 L 130 50 L 160 40"
                    fill="none"
                    stroke="#8f1a40"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {[
                    { x: 40, y: 140 },
                    { x: 70, y: 100 },
                    { x: 100, y: 110 },
                    { x: 130, y: 50 },
                    { x: 160, y: 40 },
                  ].map((point, i) => (
                    <circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#8f1a40"
                    />
                  ))}

                  {/* Axis */}
                  <line x1="30" y1="170" x2="180" y2="170" stroke="#e2e8f0" strokeWidth="2" />
                  <line x1="30" y1="170" x2="30" y2="20" stroke="#e2e8f0" strokeWidth="2" />
                </svg>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 text-xs text-slate-400 font-medium">
                  Performance Over Time
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-burgundy-800" />
                  <span className="text-xs text-slate-500">Qtron Strategy</span>
                </div>
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
