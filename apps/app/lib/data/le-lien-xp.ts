import { POINTS } from '@/lib/constants/points'

// XP spécifiques à l'étape Le Lien. Source unique de vérité : POINTS.
// Attribués via awardPoints(supabase, userId, reason).
export const STAGE_XP = {
  STAGE_DIAGNOSTIC_ENTRY: POINTS.STAGE_DIAGNOSTIC_ENTRY,
  STAGE_MISSION_VALIDATED: POINTS.STAGE_MISSION_VALIDATED,
  STAGE_OBSERVATION_DONE: POINTS.STAGE_OBSERVATION_DONE,
  STAGE_STREAK_3: POINTS.STAGE_STREAK_3,
  STAGE_STREAK_7: POINTS.STAGE_STREAK_7,
  STAGE_STREAK_14: POINTS.STAGE_STREAK_14,
  STAGE_STREAK_21: POINTS.STAGE_STREAK_21,
  STAGE_WITNESS_COMPLETED: POINTS.STAGE_WITNESS_COMPLETED,
  STAGE_DIAGNOSTIC_EXIT: POINTS.STAGE_DIAGNOSTIC_EXIT,
  STAGE_PROGRESSION_15: POINTS.STAGE_PROGRESSION_15,
} as const

// Seuils de série → reason XP correspondante
export const STREAK_MILESTONES: { days: number; reason: keyof typeof STAGE_XP }[] = [
  { days: 3, reason: 'STAGE_STREAK_3' },
  { days: 7, reason: 'STAGE_STREAK_7' },
  { days: 14, reason: 'STAGE_STREAK_14' },
  { days: 21, reason: 'STAGE_STREAK_21' },
]
