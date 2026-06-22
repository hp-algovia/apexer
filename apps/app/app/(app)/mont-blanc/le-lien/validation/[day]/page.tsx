'use client'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { SelectableCard } from '@/components/ui/SelectableCard'
import {
  Q3_BILAN,
  Q3_PILOTAGE,
  missionForDay,
  type ValidationQuestion,
} from '@/lib/data/le-lien-missions'
import { STREAK_MILESTONES } from '@/lib/data/le-lien-xp'
import { awardBadge } from '@/lib/engine/badges'
import { awardPoints } from '@/lib/engine/points'
import { getCoachingMessage } from '@/lib/data/le-lien-coaching'
import { computeStageStreak } from '@/lib/engine/stage-streak'
import { computeCurrentDay, STAGE_ID } from '@/lib/mont-blanc/le-lien'
import { createClient } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

const MILESTONE_BADGE: Record<number, string> = {
  7: 'le-lien-presence-active',
  14: 'le-lien-ecoute-armee',
  21: 'le-lien-maitrise',
}

export default function LeLienValidationPage() {
  const router = useRouter()
  const params = useParams<{ day: string }>()
  const supabase = createClient()
  const day = Number(params.day)
  const mission = missionForDay(day)

  const questions = useMemo<ValidationQuestion[]>(() => {
    if (!mission) return []
    return [...mission.validation, mission.final ? Q3_BILAN : Q3_PILOTAGE]
  }, [mission])

  const [ready, setReady] = useState(false)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [values, setValues] = useState<(number | string)[]>([])
  const [saving, setSaving] = useState(false)

  // Garde : seul le jour courant, non déjà validé, est validable
  useEffect(() => {
    async function guard() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.replace('/auth/login')
        return
      }
      const { data: program } = await supabase
        .from('user_programs')
        .select('started_at')
        .eq('user_id', user.id)
        .eq('program_id', 'mont-blanc')
        .maybeSingle()
      const currentDay = computeCurrentDay(program?.started_at)
      const { data: existing } = await supabase
        .from('stage_daily_validations')
        .select('id')
        .eq('user_id', user.id)
        .eq('stage_id', STAGE_ID)
        .eq('day_number', day)
        .maybeSingle()

      if (!mission || day !== currentDay || existing) {
        router.replace('/mont-blanc/le-lien/hub')
        return
      }
      setReady(true)
    }
    void guard()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mission || !ready) {
    return <main className="text-fumee flex min-h-dvh items-center justify-center">…</main>
  }

  const question = questions[index]
  if (!question) return null

  function select(value: number | string, optionKey: string) {
    if (picked || saving) return
    setPicked(optionKey)
    const nextValues = [...values, value]
    setTimeout(() => {
      if (index < questions.length - 1) {
        setValues(nextValues)
        setIndex(index + 1)
        setPicked(null)
        return
      }
      void finish(nextValues)
    }, 250)
  }

  async function finish(allValues: (number | string)[]) {
    setSaving(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user || !mission) {
      router.replace('/auth/login')
      return
    }

    const q1 = Number(allValues[0] ?? 0)
    const q2 = Number(allValues[1] ?? 0)
    const q3 = String(allValues[2] ?? 'consolidate')
    const coaching = getCoachingMessage(mission.protocolId, q1)
    const xpEarned = 30 // STAGE_MISSION_VALIDATED (20) + STAGE_OBSERVATION_DONE (10)

    await supabase.from('stage_daily_validations').insert({
      user_id: user.id,
      stage_id: STAGE_ID,
      day_number: day,
      protocol_id: mission.protocolId,
      q1_execution: q1,
      q2_observation: q2,
      q3_pilotage: q3,
      coaching_message: coaching,
      xp_earned: xpEarned,
    })

    await awardPoints(supabase, user.id, 'STAGE_MISSION_VALIDATED')
    await awardPoints(supabase, user.id, 'STAGE_OBSERVATION_DONE')
    await supabase
      .from('user_programs')
      .update({ current_day: day })
      .eq('user_id', user.id)
      .eq('program_id', 'mont-blanc')

    // Série + jalons
    const { data: vals } = await supabase
      .from('stage_daily_validations')
      .select('day_number')
      .eq('user_id', user.id)
      .eq('stage_id', STAGE_ID)
    const validatedDays = (vals ?? []).map((v) => v.day_number)
    const streak = computeStageStreak(validatedDays)
    const milestone = STREAK_MILESTONES.find((m) => m.days === streak)
    if (milestone) {
      await awardPoints(supabase, user.id, milestone.reason)
      const badgeKey = MILESTONE_BADGE[streak]
      if (badgeKey) await awardBadge(supabase, user.id, badgeKey)
    }

    router.push(`/mont-blanc/le-lien/coaching/${day}`)
    router.refresh()
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 py-8">
      <div>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">Jour {day}</p>
        <ProgressBar value={((index + 1) / questions.length) * 100} className="mt-3" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-1 flex-col"
        >
          <h1 className="mt-6 font-sans text-2xl font-black text-white">{question.text}</h1>
          <div className="mt-8 flex flex-col gap-3">
            {question.options.map((option, i) => {
              const key = `${index}-${i}`
              return (
                <SelectableCard
                  key={key}
                  selected={picked === key}
                  onSelect={() => select(option.value, key)}
                >
                  <p className="font-sans text-base font-semibold text-white">{option.label}</p>
                </SelectableCard>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {saving ? <p className="text-fumee pb-6 text-center text-sm">Enregistrement…</p> : null}
    </main>
  )
}
