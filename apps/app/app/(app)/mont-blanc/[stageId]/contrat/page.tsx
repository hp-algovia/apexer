'use client'

import { Button } from '@/components/ui/Button'
import { awardBadge } from '@/lib/engine/badges'
import { awardPoints } from '@/lib/engine/points'
import { PROGRAM_ID, getStage, protocolById } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/client'
import { notFound, useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

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
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <h1 className="font-sans text-3xl font-black text-white">Ton étape commence maintenant</h1>

      {weakest ? (
        <p className="mt-4 text-lg text-white">
          Protocole à renforcer :{' '}
          <span className="text-feu">{protocolById(stage, weakest)?.name ?? weakest}</span>
        </p>
      ) : null}

      <div className="mt-8 flex flex-1 flex-col gap-4 text-white">
        <p className="font-sans text-xl font-bold">
          {stage.durationDays} jours. 1 mission par jour. 3 choix. 0 texte.
        </p>
        <p className="text-fumee">
          Chaque jour, tu ouvres l’app. Tu lis ta mission. Tu la fais. Tu reviens valider.
        </p>
        <p className="text-fumee">
          Ce n’est pas un journal intime.
          <br />
          C’est un protocole d’exécution.
        </p>
      </div>

      <div className="pb-6">
        <Button fullWidth onClick={activate} disabled={loading}>
          {loading ? 'Activation…' : 'J’ai compris — activer l’étape'}
        </Button>
      </div>
    </main>
  )
}
