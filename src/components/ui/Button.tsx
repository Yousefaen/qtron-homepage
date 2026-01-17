import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-burgundy-800 text-white hover:bg-burgundy-700 shadow-lg shadow-burgundy-800/25 hover:shadow-xl hover:shadow-burgundy-800/30',
      secondary: 'bg-navy-800 text-white hover:bg-navy-700 shadow-lg shadow-navy-800/25',
      outline: 'border-2 border-burgundy-800 text-burgundy-800 hover:bg-burgundy-50',
      ghost: 'text-burgundy-800 hover:bg-burgundy-50',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
