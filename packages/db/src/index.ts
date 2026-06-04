export type {
  CompositeTypes,
  Database,
  Enums,
  Json,
  Tables,
  TablesInsert,
  TablesUpdate,
} from './database.types'

import type { Tables } from './database.types'

// Alias pratiques pour les tables principales
export type Profile = Tables<'profiles'>
export type Objective = Tables<'objectives'>
export type Task = Tables<'tasks'>
export type Principle = Tables<'principles'>
export type UserPrinciple = Tables<'user_principles'>
export type PointsLogEntry = Tables<'points_log'>
export type Badge = Tables<'badges'>
export type UserBadge = Tables<'user_badges'>
export type WeeklyReview = Tables<'weekly_reviews'>
export type ContentItem = Tables<'content_library'>
export type UserContentProgress = Tables<'user_content_progress'>
export type DiagnosticAnswer = Tables<'diagnostic_answers'>

// Unions métier (reflètent les CHECK constraints du schéma)
export type Archetype = 'explorateur' | 'batisseur' | 'executant_irregulier' | 'apexer_confirme'
export type UserContext =
  | 'performance_commerciale'
  | 'discipline_personnelle'
  | 'formation_accompagnement'
  | 'immobilier_patrimoine'
  | 'management_equipe'
  | 'objectif_libre'
export type TaskStatus = 'pending' | 'completed' | 'skipped' | 'reported'
export type SubscriptionStatus = 'trial' | 'active' | 'expired' | 'cancelled'
