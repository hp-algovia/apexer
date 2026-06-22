import type { Database } from '@apexer/db'
import type { SupabaseClient } from '@supabase/supabase-js'
import { awardPoints } from '@/lib/engine/points'

type Client = SupabaseClient<Database>

/**
 * Débloque un badge par sa `key` si l'utilisateur ne l'a pas déjà.
 * Attribue les XP BADGE_UNLOCKED. Retourne true si nouvellement débloqué.
 */
export async function awardBadge(
  supabase: Client,
  userId: string,
  badgeKey: string,
): Promise<boolean> {
  const { data: badge } = await supabase
    .from('badges')
    .select('id')
    .eq('key', badgeKey)
    .maybeSingle()
  if (!badge) return false

  const { data: existing } = await supabase
    .from('user_badges')
    .select('id')
    .eq('user_id', userId)
    .eq('badge_id', badge.id)
    .maybeSingle()
  if (existing) return false

  const { error } = await supabase
    .from('user_badges')
    .insert({ user_id: userId, badge_id: badge.id })
  if (error) return false

  await awardPoints(supabase, userId, 'BADGE_UNLOCKED', { id: badge.id, type: 'badge' })
  return true
}
