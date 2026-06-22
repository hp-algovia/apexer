'use client'

import { RadarChart } from '@/components/mont-blanc/RadarChart'
import { Button } from '@/components/ui/Button'
import { getStage, protocolById, radarAxes, scoreLabel } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0)
  const raf = useRef<number | undefined>(undefined)
  useEffect(() => {
    let startTime: number | null = null
    const tick = (t: number) => {
      if (startTime === null) startTime = t
      const progress = Math.min(1, (t - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [target, duration])
  return value
}

type ScoreData = {
  scoreGlobal: number
  scoreByProtocol: Record<string, number>
  strongest: string
  weakest: string
}

export default function StageScorePage() {
  const params = useParams<{ stageId: string }>()
  const supabase = createClient()
  const stage = getStage(params.stageId)

  const [data, setData] = useState<ScoreData | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!stage) return
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data: score } = await supabase
        .from('stage_diagnostic_scores')
        .select('score_global, score_by_protocol, strongest_protocol, weakest_protocol')
        .eq('user_id', user.id)
        .eq('stage_id', stage!.id)
        .eq('diagnostic_type', 'entry')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      if (score) {
        setData({
          scoreGlobal: score.score_global,
          scoreByProtocol: (score.score_by_protocol as Record<string, number>) ?? {},
          strongest: score.strongest_protocol ?? '',
          weakest: score.weakest_protocol ?? '',
        })
      }
      setLoaded(true)
    }
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const animatedScore = useCountUp(data?.scoreGlobal ?? 0)

  if (!stage) return notFound()
  if (!loaded) {
    return <main className="text-fumee flex min-h-dvh items-center justify-center">…</main>
  }
  if (!data) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-fumee">Aucun diagnostic trouvé.</p>
        <Link href={`/mont-blanc/${stage.id}/diagnostic`}>
          <Button>Faire le diagnostic</Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-10 text-center">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">Ton point de départ</p>

      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 font-mono text-7xl font-black text-white"
      >
        {animatedScore}%
      </motion.p>
      <p className="text-fumee mt-2 text-lg">{scoreLabel(stage, data.scoreGlobal)}</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-8"
      >
        <RadarChart axes={radarAxes(stage)} scores={data.scoreByProtocol} size={280} />
      </motion.div>

      <div className="mt-6 flex w-full flex-col gap-2 text-left">
        <p className="text-white">
          <span className="text-valide">Ton point fort :</span>{' '}
          {protocolById(stage, data.strongest)?.name ?? data.strongest}
        </p>
        <p className="text-white">
          <span className="text-alerte">À renforcer :</span>{' '}
          {protocolById(stage, data.weakest)?.name ?? data.weakest}
        </p>
      </div>

      <p className="text-fumee mt-8 font-serif text-lg italic">« {stage.mantra} »</p>

      <div className="mt-auto w-full pt-10">
        <Link href={`/mont-blanc/${stage.id}/contrat`} className="block">
          <Button fullWidth>Lancer l’étape</Button>
        </Link>
      </div>
    </main>
  )
}
