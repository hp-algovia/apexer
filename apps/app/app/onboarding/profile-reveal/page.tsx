'use client'

import { ApexerLogoAnimated } from '@/components/logo/ApexerLogoAnimated'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ARCHETYPES, type ArchetypeDefinition } from '@/lib/constants/archetypes'
import { awardPoints } from '@/lib/engine/points'
import { createClient } from '@/lib/supabase/client'
import type { Archetype } from '@apexer/db'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// E-06 — Révélation de l'archétype + plan, +75 pts « Plan Activé »
export default function ProfileRevealPage() {
  const router = useRouter()
  const supabase = createClient()

  const [definition, setDefinition] = useState<ArchetypeDefinition | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadArchetype() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data: profile } = await supabase
        .from('profiles')
        .select('archetype')
        .eq('id', user.id)
        .single()
      const archetype = (profile?.archetype ?? 'explorateur') as Archetype
      setDefinition(ARCHETYPES[archetype])
    }
    void loadArchetype()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- chargement initial uniquement
  }, [])

  async function enterTheGame() {
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }
    await awardPoints(supabase, user.id, 'PLAN_ACTIVATED')
    router.push('/onboarding/notifications')
  }

  if (!definition) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <ApexerLogoAnimated progress={15} size={80} />
      </main>
    )
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center"
      >
        <ApexerLogoAnimated progress={15} size={88} />
        <p className="text-feu mt-6 text-sm font-medium uppercase tracking-wider">Ton profil</p>
        <h1 className="mt-2 font-sans text-4xl font-black text-white">
          Tu as le profil d’{definition.article} {definition.name}.
        </h1>
        <p className="text-fumee mt-3">{definition.tagline}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 flex flex-1 flex-col gap-3"
      >
        <Card>
          <p className="text-valide text-sm font-medium uppercase tracking-wider">Ton point fort</p>
          <p className="mt-2 text-white">{definition.strength}</p>
        </Card>
        <Card>
          <p className="text-alerte text-sm font-medium uppercase tracking-wider">
            Ton frein principal
          </p>
          <p className="mt-2 text-white">{definition.brake}</p>
        </Card>
        <Card>
          <p className="text-feu text-sm font-medium uppercase tracking-wider">
            Tes 3 premières micro-actions
          </p>
          <ul className="mt-2 flex flex-col gap-2">
            {definition.microActions.map((action, i) => (
              <li key={action} className="flex gap-3 text-white">
                <span className="text-feu font-mono font-bold">{i + 1}.</span>
                {action}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <div className="pb-6 pt-6">
        <Button fullWidth onClick={enterTheGame} disabled={loading}>
          {loading ? 'Un instant…' : 'Entrer dans le game'}
        </Button>
      </div>
    </main>
  )
}
