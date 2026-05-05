import { cn } from '@apexer/ui'
import type { HTMLAttributes } from 'react'

export function Eyebrow({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'text-gold inline-block font-sans text-sm font-bold uppercase tracking-[0.14em]',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
