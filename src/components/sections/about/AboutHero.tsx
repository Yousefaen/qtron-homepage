'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-burgundy-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={10 + i * 10}
              fill="none"
              stroke="#8f1a40"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-[0.2em] text-burgundy-700 uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight mb-6">
            Driven by Research,<br />
            <span className="text-burgundy-800">Powered by Technology</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Qtron Investments is a quantitative investment manager serving institutional clients
            in the Global Equity space. We combine rigorous research with cutting-edge technology
            to deliver consistent alpha.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
