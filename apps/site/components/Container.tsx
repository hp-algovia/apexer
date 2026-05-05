import { cn } from '@apexer/ui'
import type { HTMLAttributes } from 'react'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('max-w-ultra mx-auto w-full px-6 md:px-10 lg:px-12', className)}
      {...props}
    />
  )
}
