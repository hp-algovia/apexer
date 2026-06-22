'use client'

import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  fullWidth?: boolean
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'btn-forge text-white',
  secondary: 'bg-forge text-white border border-acier hover:border-fumee',
  ghost: 'bg-transparent text-fumee hover:text-white',
  white: 'bg-white text-noir hover:bg-cendre',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', fullWidth = false, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={[
        'inline-flex items-center justify-center gap-3 rounded-md px-6 py-4',
        'font-sans text-base font-bold',
        'ease-apexer transition-all duration-200 active:scale-[0.98]',
        'disabled:pointer-events-none disabled:opacity-50',
        VARIANTS[variant],
        fullWidth ? 'w-full' : '',
        className ?? '',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
})
