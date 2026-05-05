import { cn } from '@apexer/ui'
import Link from 'next/link'
import type { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center font-sans text-sm md:text-base font-semibold tracking-tight rounded-md px-6 py-3 transition-colors duration-150'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-navy hover:bg-gold-deep hover:text-white',
  secondary: 'border border-navy text-navy bg-transparent hover:bg-navy hover:text-light',
  ghost: 'text-navy underline underline-offset-4 decoration-gold hover:decoration-2 px-0 py-0',
}

type LinkButtonProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant
  className?: string
}

export function Button({ variant = 'primary', className, children, ...props }: LinkButtonProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
