'use client'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { usePathname } from 'next/navigation'

// Étapes post-connexion qui affichent la barre de progression
const STEPS = [
  '/onboarding/photo',
  '/onboarding/context',
  '/onboarding/objective',
  '/onboarding/diagnostic',
  '/onboarding/profile-reveal',
  '/onboarding/notifications',
]

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const stepIndex = STEPS.indexOf(pathname)

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col">
      {stepIndex >= 0 ? (
        <div className="px-6 pt-6">
          <ProgressBar value={((stepIndex + 1) / STEPS.length) * 100} />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  )
}
