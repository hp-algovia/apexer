import { cn } from '@apexer/ui'
import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type ButtonVariant =
  | 'orange'
  | 'orange-outline'
  | 'gold-outline'
  | 'white'
  | 'white-outline'
  | 'ghost-orange'

const base =
  'group inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight rounded-md transition-all duration-200 ease-apexer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 active:scale-[0.98] active:duration-100'

const sizes = {
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base md:text-lg',
} as const

const variants: Record<ButtonVariant, string> = {
  orange: 'bg-orange text-white hover:bg-orange-deep hover:shadow-glow',
  'orange-outline': 'border border-orange text-orange bg-white hover:bg-orange hover:text-white',
  'gold-outline': 'border border-gold text-gold-deep bg-white hover:bg-gold hover:text-white',
  white: 'bg-white text-charbon hover:bg-off',
  'white-outline': 'border border-white text-white hover:bg-white hover:text-charbon',
  'ghost-orange':
    'text-orange hover:text-orange-deep underline underline-offset-[6px] decoration-2 decoration-transparent hover:decoration-orange px-0 py-0',
}

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant
  size?: keyof typeof sizes
  className?: string
  children: ReactNode
}

export function Button({
  variant = 'orange',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const isGhost = variant === 'ghost-orange'
  return (
    <Link className={cn(base, isGhost ? '' : sizes[size], variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
