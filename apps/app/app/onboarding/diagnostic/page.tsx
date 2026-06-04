'use client'

import { SelectableCard } from '@/components/ui/SelectableCard'
import { DIAGNOSTIC_QUESTIONS } from '@/lib/constants/diagnostic'
import { computeArchetype } from '@/lib/engine/archetype'
import { awardPoints } from '@/lib/engine/points'
import { createClient } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// E-05 — Diagnostic flash : 5 questions, +50 pts « Profil Créé »
export default function DiagnosticPage() {
  const router = useRouter()
  const supabase = createClient()

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState(false)

  const question = DIAGNOSTIC_QUESTIONS[index]
  if (!question) return null

  async function answer(question: (typeof DIAGNOSTIC_QUESTIONS)[number], value: string) {
    if (saving) return
    const nextAnswers = { ...answers, [question.key]: value }
    setAnswers(nextAnswers)

    if (index < DIAGNOSTIC_QUESTIONS.length - 1) {
      setIndex(index + 1)
      return
    }

    // Dernière question : on persiste tout
    setSaving(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    await supabase.from('diagnostic_answers').upsert(
      Object.entries(nextAnswers).map(([questionKey, answerValue]) => ({
        user_id: user.id,
        question_key: questionKey,
        answer_value: answerValue,
      })),
      { onConflict: 'user_id,question_key' },
    )

    const archetype = computeArchetype(nextAnswers)
    await supabase.from('profiles').update({ archetype }).eq('id', user.id)
    await awardPoints(supabase, user.id, 'PROFILE_CREATED')

    router.push('/onboarding/profile-reveal')
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">
        Question {index + 1}/{DIAGNOSTIC_QUESTIONS.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.key}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-1 flex-col"
        >
          <h1 className="mt-3 font-sans text-2xl font-black text-white">{question.question}</h1>

          <div className="mt-8 flex flex-col gap-3">
            {question.options.map((option) => (
              <SelectableCard
                key={option.value}
                selected={answers[question.key] === option.value}
                onSelect={() => void answer(question, option.value)}
              >
                <p className="font-sans text-base font-semibold text-white">{option.label}</p>
              </SelectableCard>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {saving ? (
        <p className="text-fumee pb-6 text-center text-sm">Analyse de ton profil…</p>
      ) : null}
    </main>
  )
}
