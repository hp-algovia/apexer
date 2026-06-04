'use client'

import { Button } from '@/components/ui/Button'
import { SelectableCard } from '@/components/ui/SelectableCard'
import { CONTEXTS } from '@/lib/constants/contexts'
import { createClient } from '@/lib/supabase/client'
import type { UserContext } from '@apexer/db'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// E-03 — « Tu utilises APEXER pour ? »
export default function ContextPage() {
  const router = useRouter()
  const supabase = createClient()

  const [selected, setSelected] = useState<UserContext | null>(null)
  const [loading, setLoading] = useState(false)

  async function saveAndContinue() {
    if (!selected) return
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    await supabase.from('profiles').update({ context: selected }).eq('id', user.id)
    router.push('/onboarding/objective')
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <h1 className="font-sans text-3xl font-black text-white">Tu utilises APEXER pour ?</h1>
      <p className="text-fumee mt-2">Un seul choix — celui qui compte le plus aujourd’hui.</p>

      <div className="mt-8 grid flex-1 grid-cols-2 content-start gap-3">
        {CONTEXTS.map((context) => (
          <SelectableCard
            key={context.key}
            selected={selected === context.key}
            onSelect={() => setSelected(context.key)}
          >
            <span className="text-2xl" aria-hidden>
              {context.emoji}
            </span>
            <p className="mt-2 font-sans text-sm font-bold text-white">{context.label}</p>
          </SelectableCard>
        ))}
      </div>

      <div className="pb-6 pt-6">
        <Button fullWidth onClick={saveAndContinue} disabled={!selected || loading}>
          {loading ? 'Un instant…' : 'Continuer'}
        </Button>
      </div>
    </main>
  )
}
