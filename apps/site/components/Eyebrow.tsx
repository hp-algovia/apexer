import { cn } from '@apexer/ui'
import type { HTMLAttributes } from 'react'

export function Eyebrow({
  className,
  children,
  tone = 'orange',
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: 'orange' | 'white' }) {
  return (
    <span
      className={cn(
        'font-body inline-block text-sm font-medium uppercase tracking-[0.18em]',
        tone === 'orange' ? 'text-orange' : 'text-white/90',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
