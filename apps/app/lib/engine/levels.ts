import { LEVELS, type Level } from '@/lib/constants/levels'

/** Niveau atteint pour un total de points donné (les niveaux sont permanents). */
export function levelForPoints(totalPoints: number): Level {
  let current: Level = LEVELS[0]
  for (const level of LEVELS) {
    if (totalPoints >= level.minPoints) current = level
  }
  return current
}

/** Progression (0-100) vers le niveau suivant. 100 au niveau max. */
export function progressToNextLevel(totalPoints: number): number {
  const current = levelForPoints(totalPoints)
  const next = LEVELS.find((l) => l.level === current.level + 1)
  if (!next) return 100
  const span = next.minPoints - current.minPoints
  return Math.min(100, Math.round(((totalPoints - current.minPoints) / span) * 100))
}
