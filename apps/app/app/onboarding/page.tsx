'use client'

import { ApexerLogo } from '@/components/logo/ApexerLogo'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

// E-01 — Splash : logo qui pulse 1,5 s puis transition automatique
export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => router.replace('/onboarding/welcome'), 1500)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <ApexerLogo size={120} className="animate-pulse-logo" />
    </main>
  )
}
