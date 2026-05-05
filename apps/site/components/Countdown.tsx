'use client'

import { useEffect, useRef, useState } from 'react'

const TARGET_DATE = new Date('2026-08-31T23:59:59+02:00').getTime()

function compute(now: number): { days: number; hours: number; minutes: number; closed: boolean } {
  const diff = TARGET_DATE - now
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, closed: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  return { days, hours, minutes, closed: false }
}

function pad(value: number): string {
  return value.toString().padStart(2, '0')
}

export function Countdown() {
  const [state, setState] = useState(() => compute(Date.now()))
  const [animated, setAnimated] = useState(false)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const id = window.setInterval(() => setState(compute(Date.now())), 30_000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const node = wrapperRef.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setAnimated(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimated(true)
            obs.disconnect()
            break
          }
        }
      },
      { threshold: 0.4 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  if (state.closed) {
    return (
      <div
        ref={wrapperRef}
        className="rounded-2xl bg-black/15 px-6 py-8 text-center backdrop-blur-sm"
      >
        <p className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
          Candidatures fermées.
        </p>
        <p className="font-body mt-2 text-sm text-white/80">
          Le Cercle des 30 Pionniers est complet.
        </p>
      </div>
    )
  }

  const items = [
    { label: 'jours', value: state.days },
    { label: 'heures', value: state.hours },
    { label: 'minutes', value: state.minutes },
  ]

  return (
    <div
      ref={wrapperRef}
      className="grid grid-cols-3 gap-3 rounded-2xl bg-black/15 px-4 py-6 backdrop-blur-sm md:gap-6 md:px-8 md:py-8"
      aria-label="Compte à rebours avant fermeture des candidatures Pionniers"
      role="timer"
    >
      {items.map((item, idx) => (
        <div
          key={item.label}
          className={animated ? 'animate-count-pop' : 'opacity-0'}
          style={{ animationDelay: `${idx * 120}ms` }}
        >
          <div className="text-center font-sans text-4xl font-black tabular-nums leading-none text-white md:text-6xl lg:text-7xl">
            {item.label === 'jours' ? item.value : pad(item.value)}
          </div>
          <div className="font-body mt-2 text-center text-[11px] uppercase tracking-[0.18em] text-white/80 md:text-xs">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
