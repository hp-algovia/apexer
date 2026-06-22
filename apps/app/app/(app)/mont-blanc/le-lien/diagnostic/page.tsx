'use client'

import { ProgressBar } from '@/components/ui/ProgressBar'
import { SelectableCard } from '@/components/ui/SelectableCard'
import {
  LE_LIEN_DIAGNOSTIC,
  LE_LIEN_QUALITATIVE,
  type StageDiagnosticQuestion,
} from '@/lib/data/le-lien-diagnostic'
import { awardBadge } from '@/lib/engine/badges'
import { awardPoints } from '@/lib/engine/points'
import { computeDiagnosticScores } from '@/lib/engine/stage-scoring'
import { STAGE_ID } from '@/lib/mont-blanc/le-lien'
import { createClient } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useMemo, useState } from 'react'

type Step =
  | { kind: 'scored'; q: StageDiagnosticQuestion }
  | { kind: 'qual'; q: { id: string; text: string; options: string[] } }

type Answer = { questionId: string; value: number; protocolId: string | null }

function DiagnosticFlow() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()
  const diagnosticType = searchParams.get('type') === 'exit' ? 'exit' : 'entry'

  const steps = useMemo<Step[]>(
    () => [
      ...LE_LIEN_DIAGNOSTIC.map((q) => ({ kind: 'scored' as const, q })),
      ...LE_LIEN_QUALITATIVE.map((q) => ({ kind: 'qual' as const, q })),
    ],
    [],
  )

  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [saving, setSaving] = useState(false)

  const step = steps[index]
  if (!step) return null

  async function select(answer: Answer, optionKey: string) {
    if (picked || saving) return
    setPicked(optionKey)
    const nextAnswers = [...answers, answer]

    setTimeout(async () => {
      if (index < steps.length - 1) {
        setAnswers(nextAnswers)
        setIndex(index + 1)
        setPicked(null)
        return
      }
      await finish(nextAnswers)
    }, 250)
  }

  async function finish(allAnswers: Answer[]) {
    setSaving(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    // Réponses (scored + qualitatives)
    await supabase.from('stage_diagnostic_responses').insert(
      allAnswers.map((a) => ({
        user_id: user.id,
        stage_id: STAGE_ID,
        question_id: a.questionId,
        selected_value: a.value,
        protocol_id: a.protocolId,
        diagnostic_type: diagnosticType,
      })),
    )

    // Scores (uniquement sur les questions scorées)
    const scored = allAnswers.filter((a) => a.protocolId !== null)
    const scores = computeDiagnosticScores(
      scored.map((a) => ({ protocolId: a.protocolId as string, value: a.value })),
    )

    await supabase.from('stage_diagnostic_scores').insert({
      user_id: user.id,
      stage_id: STAGE_ID,
      diagnostic_type: diagnosticType,
      score_global: scores.scoreGlobal,
      score_by_protocol: scores.scoreByProtocol,
      strongest_protocol: scores.strongest,
      weakest_protocol: scores.weakest,
    })

    if (diagnosticType === 'exit') {
      await awardPoints(supabase, user.id, 'STAGE_DIAGNOSTIC_EXIT')
      // Progression entrée → sortie
      const { data: entry } = await supabase
        .from('stage_diagnostic_scores')
        .select('score_global')
        .eq('user_id', user.id)
        .eq('stage_id', STAGE_ID)
        .eq('diagnostic_type', 'entry')
        .order('created_at', { ascending: true })
        .limit(1)
        .maybeSingle()
      if (entry && scores.scoreGlobal - entry.score_global > 15) {
        await awardPoints(supabase, user.id, 'STAGE_PROGRESSION_15')
        await awardBadge(supabase, user.id, 'le-lien-influence-propre')
      }
      router.push('/mont-blanc/le-lien/fin')
    } else {
      router.push('/mont-blanc/le-lien/score')
    }
    router.refresh()
  }

  const protocolLabel =
    step.kind === 'scored'
      ? {
          attention: 'Attention réelle',
          prenom: 'Prénom',
          ecoute: 'Écoute active',
          reconnaissance: 'Reconnaissance précise',
          desaccord: 'Désaccord maîtrisé',
        }[step.q.protocolId]
      : 'Pour mieux te connaître'

  return (
    <main className="flex min-h-dvh flex-col px-6 py-8">
      <div>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">{protocolLabel}</p>
        <p className="text-fumee mt-1 font-mono text-xs">
          Question {index + 1}/{steps.length}
        </p>
        <ProgressBar value={((index + 1) / steps.length) * 100} className="mt-3" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step.q.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-1 flex-col"
        >
          <h1 className="mt-6 font-sans text-2xl font-black text-white">{step.q.text}</h1>

          <div className="mt-8 flex flex-col gap-3">
            {step.kind === 'scored'
              ? step.q.options.map((option, i) => {
                  const key = `${step.q.id}-${i}`
                  return (
                    <SelectableCard
                      key={key}
                      selected={picked === key}
                      onSelect={() =>
                        void select(
                          {
                            questionId: step.q.id,
                            value: option.value,
                            protocolId: step.q.protocolId,
                          },
                          key,
                        )
                      }
                    >
                      <p className="font-sans text-base font-semibold text-white">{option.label}</p>
                    </SelectableCard>
                  )
                })
              : step.q.options.map((label, i) => {
                  const key = `${step.q.id}-${i}`
                  return (
                    <SelectableCard
                      key={key}
                      selected={picked === key}
                      onSelect={() =>
                        void select({ questionId: step.q.id, value: i, protocolId: null }, key)
                      }
                    >
                      <p className="font-sans text-base font-semibold text-white">{label}</p>
                    </SelectableCard>
                  )
                })}
          </div>
        </motion.div>
      </AnimatePresence>

      {saving ? (
        <p className="text-fumee pb-6 text-center text-sm">Analyse de ton profil…</p>
      ) : null}
    </main>
  )
}

export default function LeLienDiagnosticPage() {
  return (
    <Suspense>
      <DiagnosticFlow />
    </Suspense>
  )
}
