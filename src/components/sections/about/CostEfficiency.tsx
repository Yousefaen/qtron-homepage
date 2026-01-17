'use client'

import { Container } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'

export function CostEfficiency() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 text-white px-8 py-4 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Cost Efficiency
            </h2>
          </div>
        </FadeIn>

        <div className="bg-slate-50 rounded-b-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6">
                  Economies of scale and vertical integration are collapsing.
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Advancements in technology have reduced transaction costs that glued together
                  vertical integration and economies of scale in the past. Today, horizontal
                  &ldquo;coopetition&rdquo; — cooperative competition — defines how firms create value.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At Qtron, we embrace this new paradigm. We leverage technology to minimize
                  operational overhead while maximizing value for our clients.
                </p>
                <ul className="space-y-3">
                  {[
                    'Technology-driven operations',
                    'Streamlined processes',
                    'Lower overhead costs',
                    'Better value for clients',
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
                  {/* Technology/efficiency visual */}
                  <div className="aspect-square relative flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full max-w-xs">
                      {/* Central hub */}
                      <circle cx="100" cy="100" r="25" fill="#8f1a40" fillOpacity="0.1" stroke="#8f1a40" strokeWidth="2" />
                      <circle cx="100" cy="100" r="10" fill="#8f1a40" />

                      {/* Connection lines */}
                      {[0, 60, 120, 180, 240, 300].map((angle) => {
                        const rad = (angle * Math.PI) / 180
                        const x1 = 100 + 25 * Math.cos(rad)
                        const y1 = 100 + 25 * Math.sin(rad)
                        const x2 = 100 + 70 * Math.cos(rad)
                        const y2 = 100 + 70 * Math.sin(rad)
                        return (
                          <g key={angle}>
                            <line
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#8f1a40"
                              strokeWidth="2"
                              strokeDasharray="4 2"
                            />
                            <circle cx={x2} cy={y2} r="12" fill="white" stroke="#8f1a40" strokeWidth="2" />
                            <circle cx={x2} cy={y2} r="5" fill="#8f1a40" fillOpacity="0.3" />
                          </g>
                        )
                      })}

                      {/* Outer ring */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#8f1a40"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                  <p className="text-center text-sm text-slate-500 mt-4">
                    Integrated Technology Ecosystem
                  </p>
                </div>

                {/* Stats badges */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-burgundy-800 text-white rounded-xl shadow-lg px-6 py-3">
                  <div className="text-center">
                    <div className="text-xs text-burgundy-200 uppercase tracking-wider">Operational Efficiency</div>
                    <div className="text-2xl font-bold">Maximized</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}
