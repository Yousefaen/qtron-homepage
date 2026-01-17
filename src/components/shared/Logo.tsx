'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white'
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const sizes = {
    sm: { height: 32, width: 160 },
    md: { height: 40, width: 200 },
    lg: { height: 56, width: 280 },
  }

  const dimensions = sizes[size]

  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src="/logo.png"
        alt="Qtron Investments"
        width={dimensions.width}
        height={dimensions.height}
        className={cn(
          'h-auto w-auto object-contain',
          variant === 'white' && 'brightness-0 invert'
        )}
        priority
      />
    </div>
  )
}
