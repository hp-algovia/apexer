'use client'

import { Button } from '@/components/ui/Button'
import { SelectableCard } from '@/components/ui/SelectableCard'
import { OBJECTIVE_TEMPLATES } from '@/lib/constants/contexts'
import { createClient } from '@/lib/supabase/client'
import type { UserContext } from '@apexer/db'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const MAX_LENGTH = 80

// E-04 — Objectif des 30 prochains jours
export default function ObjectivePage() {
  const router = useRouter()
  const supabase = createClient()

  const [templates, setTemplates] = useState<string[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [customText, setCustomText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadTemplates() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data: profile } = await supabase
        .from('profiles')
        .select('context')
        .eq('id', user.id)
        .single()
      const context = (profile?.context ?? 'objectif_libre') as UserContext
      setTemplates(OBJECTIVE_TEMPLATES[context] ?? [])
    }
    void loadTemplates()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chargement initial uniquement
  }, [])

  const title = customText.trim() || selectedTemplate
  const isCustom = customText.trim().length > 0

  async function saveAndContinue() {
    if (!title) return
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    const targetAt = new Date()
    targetAt.setDate(targetAt.getDate() + 30)

    await supabase.from('objectives').insert({
      user_id: user.id,
      title,
      is_custom: isCustom,
      target_days: 30,
      target_at: targetAt.toISOString(),
    })
    await supabase.from('profiles').update({ objective_text: title }).eq('id', user.id)

    router.push('/onboarding/diagnostic')
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <h1 className="font-sans text-3xl font-black text-white">
        Quel est ton objectif des 30 prochains jours ?
      </h1>
      <p className="text-fumee mt-2">Un seul objectif. La régularité bat l’ambition.</p>

      <div className="mt-8 flex flex-1 flex-col gap-3">
        {templates.map((template) => (
          <SelectableCard
            key={template}
            selected={selectedTemplate === template && !isCustom}
            onSelect={() => {
              setSelectedTemplate(template)
              setCustomText('')
            }}
          >
            <p className="font-sans text-base font-bold text-white">{template}</p>
          </SelectableCard>
        ))}

        <div className="mt-2">
          <label htmlFor="custom-objective" className="text-fumee text-sm font-medium">
            Ou écris le tien
          </label>
          <input
            id="custom-objective"
            type="text"
            maxLength={MAX_LENGTH}
            placeholder="Mon objectif…"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="border-acier bg-forge placeholder:text-fumee focus:border-feu mt-2 w-full rounded-md border px-4 py-3.5 text-base text-white focus:outline-none"
          />
          <p className="text-fumee mt-1 text-right font-mono text-xs">
            {customText.length}/{MAX_LENGTH}
          </p>
        </div>
      </div>

      <div className="pb-6">
        <Button fullWidth onClick={saveAndContinue} disabled={!title || loading}>
          {loading ? 'Un instant…' : 'Continuer'}
        </Button>
      </div>
    </main>
  )
}
