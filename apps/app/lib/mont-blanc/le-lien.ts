import { LE_LIEN_TOTAL_DAYS } from '@/lib/data/le-lien-missions'

export const PROGRAM_ID = 'mont-blanc'
export const STAGE_ID = 'le-lien'

/**
 * Jour courant calculé depuis la date de démarrage (1 jour calendaire = 1 jour d'étape).
 * Clampé entre 1 et 21. Retourne 0 si pas encore démarré.
 */
export function computeCurrentDay(startedAt: string | null | undefined): number {
  if (!startedAt) return 0
  const start = new Date(startedAt)
  const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate())
  const now = new Date()
  const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diffDays = Math.floor((nowMidnight.getTime() - startMidnight.getTime()) / 86_400_000)
  return Math.min(LE_LIEN_TOTAL_DAYS, Math.max(1, diffDays + 1))
}

/** Jours passés non validés (manqués) — on ne peut pas valider rétroactivement. */
export function computeMissedDays(currentDay: number, validatedDays: number[]): number[] {
  const validated = new Set(validatedDays)
  const missed: number[] = []
  for (let day = 1; day < currentDay; day += 1) {
    if (!validated.has(day)) missed.push(day)
  }
  return missed
}
