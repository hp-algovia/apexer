'use client'

import { Button } from '@/components/ui/Button'
import { SelectableCard } from '@/components/ui/SelectableCard'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const HOURS = [
  { value: '07:30', label: '7h30', hint: 'Avant la journée' },
  { value: '12:00', label: '12h00', hint: 'Pause déjeuner' },
  { value: '20:00', label: '20h00', hint: 'Le soir au calme' },
]

// E-07 — Pré-écran notifications + heure du rappel quotidien
export default function NotificationsPage() {
  const router = useRouter()
  const supabase = createClient()

  const [hour, setHour] = useState('07:30')
  const [loading, setLoading] = useState(false)

  async function finish(enable: boolean) {
    setLoading(true)

    let granted = false
    if (enable && typeof Notification !== 'undefined') {
      const permission = await Notification.requestPermission()
      granted = permission === 'granted'
    }

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    await supabase
      .from('profiles')
      .update({
        notification_hour: hour,
        notifications_enabled: granted,
        onboarding_completed: true,
      })
      .eq('id', user.id)

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <h1 className="font-sans text-3xl font-black text-white">
        Un rappel par jour. Pas un de plus.
      </h1>
      <p className="text-fumee mt-2">
        Les Forgerons qui reçoivent leur rappel quotidien tiennent leur série plus longtemps.
      </p>

      <div className="mt-8 flex flex-1 flex-col gap-3">
        {HOURS.map((option) => (
          <SelectableCard
            key={option.value}
            selected={hour === option.value}
            onSelect={() => setHour(option.value)}
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xl font-bold text-white">{option.label}</span>
              <span className="text-fumee text-sm">{option.hint}</span>
            </div>
          </SelectableCard>
        ))}
      </div>

      <div className="flex flex-col gap-3 pb-6">
        <Button fullWidth onClick={() => void finish(true)} disabled={loading}>
          {loading ? 'Un instant…' : 'Activer mes rappels'}
        </Button>
        <button
          type="button"
          onClick={() => void finish(false)}
          disabled={loading}
          className="text-fumee text-center text-sm transition-colors hover:text-white"
        >
          Plus tard
        </button>
      </div>
    </main>
  )
}
