import { Card } from '@/components/ui/Card'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// P-01 — Progression hebdomadaire (structure Sprint 1, bilans au Sprint 2)
export default async function ProgressPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: reviews } = await supabase
    .from('weekly_reviews')
    .select('*')
    .eq('user_id', user.id)
    .order('week_start', { ascending: false })
    .limit(8)

  return (
    <main className="flex flex-col gap-5 px-6 py-8">
      <h1 className="font-sans text-2xl font-black text-white">Progression</h1>

      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <Card key={review.id}>
            <div className="flex items-baseline justify-between">
              <p className="font-sans font-bold text-white">Semaine du {review.week_start}</p>
              <p className="text-feu font-mono text-xl font-bold">{review.score}</p>
            </div>
            <p className="text-fumee mt-1 text-sm">
              {review.tasks_completed}/{review.tasks_total} tâches —{' '}
              {Math.round(review.completion_rate ?? 0)}%
            </p>
          </Card>
        ))
      ) : (
        <Card className="border-dashed">
          <p className="text-fumee">
            Ton premier bilan hebdomadaire apparaîtra ici dimanche soir, dès que tu auras commencé à
            exécuter tes tâches.
          </p>
        </Card>
      )}
    </main>
  )
}
