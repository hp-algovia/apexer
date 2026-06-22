'use client'

import { CoachingMessage } from '@/components/mont-blanc/CoachingMessage'
import { Button } from '@/components/ui/Button'
import { computeStageStreak } from '@/lib/engine/stage-streak'
import { getStage } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function StageCoachingPage() {
  const params = useParams<{ stageId: string; day: string }>()
  const supabase = createClient()
  const stage = getStage(params.stageId)
  const day = Number(params.day)

  const [coaching, setCoaching] = useState<string | null>(null)
  const [xp, setXp] = useState(0)
  const [badgeName, setBadgeName] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!stage) return
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      const { data: validation } = await supabase
        .from('stage_daily_validations')
        .select('coaching_message, xp_earned')
        .eq('user_id', user.id)
        .eq('stage_id', stage!.id)
        .eq('day_number', day)
        .maybeSingle()
      if (validation) {
        setCoaching(validation.coaching_message)
        setXp(validation.xp_earned ?? 0)
      }

      const { data: vals } = await supabase
        .from('stage_daily_validations')
        .select('day_number')
        .eq('user_id', user.id)
        .eq('stage_id', stage!.id)
      const streak = computeStageStreak((vals ?? []).map((v) => v.day_number))
      const badgeKey = stage!.milestoneBadges[streak]
      if (badgeKey) {
        const { data: badge } = await supabase
          .from('badges')
          .select('name')
          .eq('key', badgeKey)
          .maybeSingle()
        if (badge) setBadgeName(badge.name)
      }

      setLoaded(true)
    }
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!stage) return notFound()
  if (!loaded) {
    return <main className="text-fumee flex min-h-dvh items-center justify-center">…</main>
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">Jour {day} validé</p>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="text-fumee">XP gagnés</span>
          <span className="text-feu font-mono text-2xl font-bold">+{xp}</span>
        </div>
        <div className="bg-acier mt-2 h-2 w-full overflow-hidden rounded-full">
          <motion.div
            className="bg-feu h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <div className="mt-8 flex-1">
        {coaching ? <CoachingMessage message={coaching} /> : null}

        {badgeName ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border-prestige/60 bg-forge mt-4 flex items-center gap-3 rounded-md border px-4 py-4"
          >
            <span className="text-2xl" aria-hidden>
              🏅
            </span>
            <div>
              <p className="text-prestige text-sm font-medium uppercase tracking-wider">
                Badge débloqué
              </p>
              <p className="font-sans font-bold text-white">{badgeName}</p>
            </div>
          </motion.div>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 pb-6">
        <Link href={`/mont-blanc/${stage.id}/dashboard`} className="block">
          <Button fullWidth>Voir mon tableau de bord</Button>
        </Link>
        <Link
          href={`/mont-blanc/${stage.id}/hub`}
          className="text-fumee text-center text-sm transition-colors hover:text-white"
        >
          Fermer
        </Link>
      </div>
    </main>
  )
}
