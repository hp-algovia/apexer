'use client'

import { Button } from '@/components/ui/Button'
import { awardBadge } from '@/lib/engine/badges'
import { awardPoints } from '@/lib/engine/points'
import { PROGRAM_ID, getStage, protocolById } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { notFound, useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function ForgeIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" aria-hidden>
      <defs>
        <linearGradient id="forge-icon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8F65" />
          <stop offset="55%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#D4A04A" />
        </linearGradient>
      </defs>
      <path d="M50 12L86 86H14L50 12Z" fill="url(#forge-icon)" />
      <path d="M50 48L64 86H36L50 48Z" fill="#0A0A0A" />
    </svg>
  )
}

const ease = [0.16, 1, 0.3, 1] as const

export default function StageContratPage() {
  const params = useParams<{ stageId: string }>()
  const router = useRouter()
  const supabase = createClient()
  const stage = getStage(params.stageId)

  const [weakest, setWeakest] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!stage) return
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data: score } = await supabase
        .from('stage_diagnostic_scores')
        .select('weakest_protocol')
        .eq('user_id', user.id)
        .eq('stage_id', stage!.id)
        .eq('diagnostic_type', 'entry')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      setWeakest(score?.weakest_protocol ?? null)
    }
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!stage) return notFound()

  async function activate() {
    if (!stage) return
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    await supabase.from('user_programs').upsert(
      {
        user_id: user.id,
        program_id: PROGRAM_ID,
        current_stage_id: stage.id,
        current_day: 1,
        status: 'active',
      },
      { onConflict: 'user_id,program_id' },
    )

    await awardPoints(supabase, user.id, 'STAGE_DIAGNOSTIC_ENTRY')
    await awardBadge(supabase, user.id, stage.badges.pointZero)

    router.push(`/mont-blanc/${stage.id}/hub`)
    router.refresh()
  }

  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-12 text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease }}
      >
        <ForgeIcon />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease }}
        className="font-display mt-6 text-3xl font-bold uppercase tracking-tight text-white"
      >
        Ton étape commence maintenant
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4, ease }}
        className="mt-8 w-full"
      >
        {weakest ? (
          <div className="border-l-feu border-y-acier border-r-acier rounded-lg border-y border-l-[3px] border-r bg-[#141414] px-5 py-4 text-left">
            <p className="text-fumee text-sm">Protocole à renforcer</p>
            <p className="text-feu mt-1 font-sans text-xl font-bold">
              {protocolById(stage, weakest)?.name ?? weakest}
            </p>
          </div>
        ) : null}
      </motion.div>

      <div
        aria-hidden
        className="my-8 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.5) 50%, transparent 100%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4, ease }}
        className="w-full rounded-lg bg-[#0E0E0E] px-5 py-6"
      >
        <p className="font-mono text-sm tracking-wide text-white">
          <span className="text-feu">{stage.durationDays}</span> jours ·{' '}
          <span className="text-feu">1</span> mission/jour · <span className="text-feu">3</span>{' '}
          choix · <span className="text-feu">0</span> texte
        </p>
        <p className="text-fumee mt-4">
          Chaque jour, tu ouvres l’app.
          <br />
          Tu lis ta mission. Tu la fais.
          <br />
          Tu reviens valider.
        </p>
      </motion.div>

      <div
        aria-hidden
        className="my-8 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.5) 50%, transparent 100%)',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4, ease }}
        className="text-fumee font-sans text-sm italic"
      >
        Ce n’est pas un journal intime.
        <br />
        C’est un protocole d’exécution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4, ease }}
        className="mt-auto w-full pt-10"
      >
        <Button fullWidth onClick={activate} disabled={loading}>
          {loading ? 'Activation…' : 'J’ai compris — activer l’étape'}
        </Button>
      </motion.div>
    </main>
  )
}
