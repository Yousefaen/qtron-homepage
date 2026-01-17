'use client'

import { Container } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'

export function Transparency() {
  return (
    <section className="py-24 bg-burgundy-50/50">
      <Container>
        {/* Section Header */}
        <FadeIn>
          <div className="bg-gradient-to-r from-navy-800 to-navy-700 text-white px-8 py-4 rounded-t-2xl">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
              Transparency
            </h2>
          </div>
        </FadeIn>

        <div className="bg-white rounded-b-2xl p-8 md:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual first on desktop (reversed order) */}
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-navy-50 to-slate-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  {/* Trust/Eye visual */}
                  <svg viewBox="0 0 200 200" className="w-full max-w-xs">
                    {/* Outer ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#243b53"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                    />

                    {/* Eye shape */}
                    <path
                      d="M 30 100 Q 100 40 170 100 Q 100 160 30 100"
                      fill="none"
                      stroke="#243b53"
                      strokeWidth="3"
                    />

                    {/* Iris */}
                    <circle cx="100" cy="100" r="30" fill="#243b53" fillOpacity="0.1" stroke="#243b53" strokeWidth="2" />

                    {/* Pupil */}
                    <circle cx="100" cy="100" r="15" fill="#243b53" />

                    {/* Light reflection */}
                    <circle cx="108" cy="92" r="5" fill="white" />
                  </svg>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                  <div className="text-sm font-semibold text-navy-800">Full Visibility</div>
                  <div className="text-xs text-slate-500">100% Transparent</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                  <div className="text-sm font-semibold text-navy-800">Open Dialogue</div>
                  <div className="text-xs text-slate-500">Always Available</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" className="order-1 lg:order-2">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-navy-800 mb-6">
                  Qtron is and will always be a transparent company.
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our success is always and everywhere a matter of your trust. And we are transparent
                  to earn it. We do not subscribe to the practice of corporate bureaucracy filled with
                  misaligned incentives and accountability vacuums.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  At Qtron, you know who loses sleep over your portfolio.
                </p>
                <ul className="space-y-3">
                  {[
                    'Regular detailed reporting',
                    'Open communication channels',
                    'Clear fee structures',
                    'Direct access to portfolio managers',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <svg className="w-5 h-5 text-navy-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}
