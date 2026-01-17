'use client'

import { Container } from '@/components/ui'
import { FadeIn } from '@/components/shared/FadeIn'
import { CONTENT } from '@/lib/constants'

const icons = {
  Outperformance: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  Transparency: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'Cost Efficiency': (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
}

export function ValueProps() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Why Choose Qtron?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Our approach is built on three fundamental principles that guide everything we do.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {CONTENT.values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-burgundy-100/50 transition-all duration-300 border border-slate-100 hover:border-burgundy-100">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center mb-6 group-hover:bg-burgundy-100 transition-colors">
                  {icons[value.title as keyof typeof icons]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-burgundy-700 font-medium mb-3">
                  {value.headline}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-burgundy-200 rounded-full" />
                  <div className="absolute top-4 right-8 w-1 h-1 bg-burgundy-300 rounded-full" />
                  <div className="absolute top-8 right-4 w-1 h-1 bg-burgundy-300 rounded-full" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
