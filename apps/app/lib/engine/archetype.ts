import type { Archetype } from '@apexer/db'
import { DIAGNOSTIC_QUESTIONS } from '@/lib/constants/diagnostic'

// Ordre de départage si égalité (le profil le plus « prudent » gagne)
const TIE_BREAK_ORDER: Archetype[] = [
  'executant_irregulier',
  'explorateur',
  'batisseur',
  'apexer_confirme',
]

/**
 * Calcule l'archétype depuis les réponses du diagnostic E-05.
 * `answers` : question_key → valeur de l'option choisie.
 */
export function computeArchetype(answers: Record<string, string>): Archetype {
  const scores: Record<Archetype, number> = {
    explorateur: 0,
    batisseur: 0,
    executant_irregulier: 0,
    apexer_confirme: 0,
  }

  for (const question of DIAGNOSTIC_QUESTIONS) {
    const value = answers[question.key]
    const option = question.options.find((o) => o.value === value)
    if (option) scores[option.archetype] += 1
  }

  return TIE_BREAK_ORDER.reduce((best, candidate) =>
    scores[candidate] > scores[best] ? candidate : best,
  )
}
