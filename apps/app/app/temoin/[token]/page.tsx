'use client'

import { ApexerLogo } from '@/components/logo/ApexerLogo'
import { SelectableCard } from '@/components/ui/SelectableCard'
import { createClient } from '@/lib/supabase/client'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

// ⚠️ Questions du témoin rédigées ici (non spécifiées au brief) — à valider par HP.
const WITNESS_QUESTIONS = [
  {
    text: 'Ces dernières semaines, la personne qui t’a partagé ce lien t’a semblé…',
    options: [
      { label: "Plus à l'écoute que d'habitude", value: 'great' },
      { label: 'Un peu plus présente', value: 'good' },
      { label: "Comme d'habitude", value: 'neutral' },
      { label: 'Je n’ai pas remarqué', value: 'none' },
    ],
  },
  {
    text: 'Dans vos échanges récents, elle…',
    options: [
      { label: "T'a laissé aller au bout de tes idées", value: 'great' },
      { label: 'T’a globalement bien écouté', value: 'good' },
      { label: 'A parfois coupé ou ramené à elle', value: 'neutral' },
      { label: 'Difficile à dire', value: 'none' },
    ],
  },
  {
    text: 'Globalement, le lien avec elle…',
    options: [
      { label: 'S’est renforcé', value: 'great' },
      { label: 'Est resté bon', value: 'good' },
      { label: 'N’a pas changé', value: 'neutral' },
      { label: 'Je préfère ne pas dire', value: 'none' },
    ],
  },
]

type Phase = 'loading' | 'intro' | 'questions' | 'done' | 'invalid'

export default function TemoinPublicPage() {
  const params = useParams<{ token: string }>()
  const supabase = createClient()
  const token = params.token

  const [phase, setPhase] = useState<Phase>('loading')
  const [witnessName, setWitnessName] = useState('')
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.rpc('get_witness_request', { p_token: token })
      const request = Array.isArray(data) ? data[0] : null
      if (error || !request || request.status === 'completed') {
        setPhase(request?.status === 'completed' ? 'done' : 'invalid')
        return
      }
      setWitnessName(request.witness_name)
      setPhase('intro')
    }
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function answer(value: string, optionKey: string) {
    if (picked) return
    setPicked(optionKey)
    const nextAnswers = [...answers, value]
    setTimeout(() => {
      if (index < WITNESS_QUESTIONS.length - 1) {
        setAnswers(nextAnswers)
        setIndex(index + 1)
        setPicked(null)
      } else {
        void submit(nextAnswers)
      }
    }, 250)
  }

  async function submit(allAnswers: string[]) {
    await supabase.rpc('submit_witness_response', {
      p_token: token,
      p_q1: allAnswers[0] ?? 'none',
      p_q2: allAnswers[1] ?? 'none',
      p_q3: allAnswers[2] ?? 'none',
    })
    setPhase('done')
  }

  if (phase === 'loading') {
    return <main className="text-fumee flex min-h-dvh items-center justify-center">…</main>
  }

  if (phase === 'invalid') {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <ApexerLogo size={56} />
        <p className="text-fumee">Ce lien n’est plus valide.</p>
      </main>
    )
  }

  if (phase === 'done') {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
        <ApexerLogo size={56} />
        <h1 className="font-sans text-2xl font-black text-white">Merci.</h1>
        <p className="text-fumee">Votre retour a été transmis anonymement.</p>
      </main>
    )
  }

  if (phase === 'intro') {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
        <ApexerLogo size={64} />
        <h1 className="font-sans text-3xl font-black text-white">Bonjour {witnessName}</h1>
        <p className="text-fumee">
          Une personne proche travaille sa qualité de présence dans la relation. Ton regard l’aide à
          mesurer son évolution. 3 questions, anonyme, 30 secondes.
        </p>
        <button
          type="button"
          onClick={() => setPhase('questions')}
          className="bg-feu shadow-glow-feu rounded-md px-6 py-4 font-sans font-bold text-white transition-transform active:scale-[0.98]"
        >
          Répondre
        </button>
      </main>
    )
  }

  const question = WITNESS_QUESTIONS[index]
  if (!question) return null

  return (
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <p className="text-fumee font-mono text-xs">
        Question {index + 1}/{WITNESS_QUESTIONS.length}
      </p>
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
                  onSelect={() => answer(option.value, key)}
                >
                  <p className="font-sans text-base font-semibold text-white">{option.label}</p>
                </SelectableCard>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
