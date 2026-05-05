'use client'

import { cn } from '@apexer/ui'
import { useEffect, useRef, useState, type HTMLAttributes } from 'react'

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number
  as?: 'div' | 'section' | 'article'
}

export function FadeIn({ className, children, delay = 0, as = 'div', ...props }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag
      ref={ref as never}
      className={cn(
        'duration-800 ease-apexer transition-all will-change-transform',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-[30px] opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
