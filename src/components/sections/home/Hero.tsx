'use client'

import { motion } from 'framer-motion'
import { Container, Button } from '@/components/ui'
import { AnimatedLogo } from '@/components/shared/AnimatedLogo'
import { CONTENT } from '@/lib/constants'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-burgundy-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <AnimatedLogo className="w-full h-full" />
        </div>
      </div>

      <Container size="xl" className="relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold tracking-[0.2em] text-burgundy-700 uppercase mb-4"
            >
              Quantitative Investment Management
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight"
            >
              {CONTENT.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-lg font-medium tracking-widest text-burgundy-800"
            >
              {CONTENT.hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg text-slate-600 leading-relaxed"
            >
              {CONTENT.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link href="/about">
                <Button size="lg">
                  Learn More
                </Button>
              </Link>
              <Link href="#">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Visual - Mobile visible */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <AnimatedLogo className="w-full h-full" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-burgundy-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-burgundy-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
