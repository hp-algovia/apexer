// Barème officiel des points APEXER
export const POINTS = {
  PROFILE_CREATED: 50,
  PLAN_ACTIVATED: 75,
  DAILY_TASK: 10,
  STREAK_7: 25,
  STREAK_21: 50,
  STREAK_66: 150,
  WEEKLY_REVIEW: 20,
  PRINCIPLE_MASTERED: 30,
  BADGE_UNLOCKED: 15,
  COMMUNITY_CHALLENGE: 40,
  REFERRAL: 100,
} as const

export type PointsReason = keyof typeof POINTS
