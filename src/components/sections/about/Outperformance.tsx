'use client'

import { Container, Button } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'
import Link from 'next/link'

export function Outperformance() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-white px-8 py-4 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Outperformance
            </h2>
          </div>
        </FadeIn>

        <div className="bg-slate-50 rounded-b-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6">
                  The existence of Qtron hinges on achieving one goal — outperforming the market.
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We only do what helps to outperform, and we only hire people who we believe can outperform.
                  Our business centers upon creative research to push boundaries between the known and the unknown.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At Qtron, we ride technology waves to shake the foundation of the investment management
                  with passion, creativity, and humility.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Risk-adjusted returns focused',
                    'Systematic quantitative approach',
                    'Data-driven decision making',
                    'Continuous research and innovation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-burgundy-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                  {/* Performance chart visualization */}
                  <div className="aspect-[4/3] relative">
                    <svg viewBox="0 0 300 200" className="w-full h-full">
                      {/* Grid */}
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={i}
                          x1="40"
                          y1={30 + i * 35}
                          x2="280"
                          y2={30 + i * 35}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Benchmark line */}
                      <path
                        d="M 40 140 L 80 135 L 120 130 L 160 125 L 200 120 L 240 115 L 280 110"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Qtron performance line */}
                      <path
                        d="M 40 150 L 80 130 L 120 110 L 160 85 L 200 70 L 240 55 L 280 45"
                        fill="none"
                        stroke="#8f1a40"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Data points */}
                      {[
                        { x: 40, y: 150 },
                        { x: 80, y: 130 },
                        { x: 120, y: 110 },
                        { x: 160, y: 85 },
                        { x: 200, y: 70 },
                        { x: 240, y: 55 },
                        { x: 280, y: 45 },
                      ].map((point, i) => (
                        <circle key={i} cx={point.x} cy={point.y} r="4" fill="#8f1a40" />
                      ))}
                    </svg>

                    {/* Legend */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-burgundy-800" />
                        <span className="text-slate-600">Qtron Strategy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-0.5 bg-slate-400 border-dashed" style={{ borderTopWidth: '2px', borderStyle: 'dashed' }} />
                        <span className="text-slate-600">Benchmark</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-burgundy-100 rounded-full opacity-50 blur-xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}
