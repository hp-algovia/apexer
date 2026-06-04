import type { Database } from '@apexer/db'
import type { SupabaseClient } from '@supabase/supabase-js'
import { POINTS, type PointsReason } from '@/lib/constants/points'
import { levelForPoints } from '@/lib/engine/levels'

type Client = SupabaseClient<Database>

/**
 * Attribue des points : log dans points_log + met à jour total_points et level.
 * Retourne le nouveau total (ou null si l'écriture a échoué).
 */
export async function awardPoints(
  supabase: Client,
  userId: string,
  reason: PointsReason,
  reference?: { id: string; type: string },
): Promise<number | null> {
  const points = POINTS[reason]

  const { error: logError } = await supabase.from('points_log').insert({
    user_id: userId,
    points,
    reason,
    reference_id: reference?.id ?? null,
    reference_type: reference?.type ?? null,
  })
  if (logError) return null

  const { data: profile } = await supabase
    .from('profiles')
    .select('total_points')
    .eq('id', userId)
    .single()
  if (!profile) return null

  const newTotal = profile.total_points + points
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ total_points: newTotal, level: levelForPoints(newTotal).level })
    .eq('id', userId)

  return updateError ? null : newTotal
}
