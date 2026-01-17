'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white'
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  }

  const colors = {
    default: {
      primary: '#8f1a40',
      secondary: '#243b53',
    },
    white: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  }

  const color = colors[variant]

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {/* QI Symbol - Concentric circles design */}
      <svg
        viewBox="0 0 60 60"
        className={cn(sizes[size], 'w-auto')}
        aria-label="Qtron Investments Logo"
      >
        {/* Outer circle */}
        <circle
          cx="30"
          cy="30"
          r="28"
          fill="none"
          stroke={color.primary}
          strokeWidth="2"
        />
        {/* Middle circle */}
        <circle
          cx="30"
          cy="30"
          r="20"
          fill="none"
          stroke={color.primary}
          strokeWidth="2"
        />
        {/* Inner circle */}
        <circle
          cx="30"
          cy="30"
          r="12"
          fill="none"
          stroke={color.primary}
          strokeWidth="2"
        />
        {/* Center dot */}
        <circle
          cx="30"
          cy="30"
          r="4"
          fill={color.primary}
        />
        {/* Vertical line (I in QI) */}
        <rect
          x="46"
          y="14"
          width="3"
          height="32"
          fill={color.primary}
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={cn(
            'text-xl font-semibold tracking-wide leading-tight',
            variant === 'white' ? 'text-white' : 'text-navy-900'
          )}
        >
          QTRON
        </span>
        <span
          className={cn(
            'text-[10px] tracking-[0.2em] uppercase',
            variant === 'white' ? 'text-white/80' : 'text-slate-500'
          )}
        >
          Investments
        </span>
      </div>
    </div>
  )
}
