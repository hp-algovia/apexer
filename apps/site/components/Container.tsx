import { cn } from '@apexer/ui'
import type { HTMLAttributes } from 'react'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('max-w-wide mx-auto w-full px-6 md:px-10', className)} {...props} />
}
