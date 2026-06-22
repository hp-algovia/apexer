// Calcul de la série (jours consécutifs validés) dans une étape.

/**
 * Plus longue série de jours validés consécutifs se terminant au jour le plus
 * récemment validé. `validatedDays` = liste des day_number validés (non triés).
 */
export function computeStageStreak(validatedDays: number[]): number {
  if (validatedDays.length === 0) return 0
  const set = new Set(validatedDays)
  const latest = Math.max(...validatedDays)

  let streak = 0
  let day = latest
  while (set.has(day)) {
    streak += 1
    day -= 1
  }
  return streak
}
