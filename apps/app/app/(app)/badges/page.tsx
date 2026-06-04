import { Card } from '@/components/ui/Card'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// G-01 — Badges & récompenses (définitions seedées au Sprint 3)
export default async function BadgesPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const [{ data: badges }, { data: userBadges }] = await Promise.all([
    supabase.from('badges').select('*').order('sort_order'),
    supabase.from('user_badges').select('badge_id').eq('user_id', user.id),
  ])

  const unlockedIds = new Set((userBadges ?? []).map((b) => b.badge_id))

  return (
    <main className="flex flex-col gap-5 px-6 py-8">
      <h1 className="font-sans text-2xl font-black text-white">Badges</h1>

      {badges && badges.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge) => {
            const unlocked = unlockedIds.has(badge.id)
            return (
              <Card key={badge.id} className={unlocked ? 'border-prestige/60' : 'opacity-60'}>
                <p className="font-sans font-bold text-white">{badge.name}</p>
                <p className="text-fumee mt-1 text-xs">{badge.condition_description}</p>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card className="border-dashed">
          <p className="text-fumee">
            Les badges arrivent bientôt. Chaque action que tu exécutes compte déjà.
          </p>
        </Card>
      )}
    </main>
  )
}
