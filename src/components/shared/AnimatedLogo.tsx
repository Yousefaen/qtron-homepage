'use client'

import { cn } from '@/lib/utils'

interface AnimatedLogoProps {
  className?: string
}

export function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Spirograph-like decorative element */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full animate-spin-slow"
        style={{ animationDuration: '60s' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8f1a40" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8f1a40" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Multiple rotating ellipses to create spirograph effect */}
        {Array.from({ length: 36 }).map((_, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="200"
            rx="150"
            ry="80"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="0.5"
            transform={`rotate(${i * 10} 200 200)`}
          />
        ))}

        {/* Center circles */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="#8f1a40"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        <circle
          cx="200"
          cy="200"
          r="70"
          fill="none"
          stroke="#8f1a40"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <circle
          cx="200"
          cy="200"
          r="40"
          fill="none"
          stroke="#8f1a40"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <circle
          cx="200"
          cy="200"
          r="15"
          fill="#8f1a40"
          fillOpacity="0.5"
        />
      </svg>
    </div>
  )
}
