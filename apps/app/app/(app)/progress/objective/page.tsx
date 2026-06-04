import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// P-02 — Progression par objectif
export default async function ObjectiveProgressPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: objectives } = await supabase
    .from('objectives')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <main className="flex flex-col gap-5 px-6 py-8">
      <h1 className="font-sans text-2xl font-black text-white">Mon plan</h1>

      {objectives && objectives.length > 0 ? (
        objectives.map((objective) => (
          <Card key={objective.id}>
            <div className="flex items-center justify-between">
              <p className="font-sans text-lg font-bold text-white">{objective.title}</p>
              {objective.status !== 'active' ? (
                <span className="text-fumee text-xs uppercase tracking-wider">
                  {objective.status === 'completed' ? 'Atteint' : 'Abandonné'}
                </span>
              ) : null}
            </div>
            <ProgressBar value={objective.progress_pct ?? 0} className="mt-3" />
            <p className="text-fumee mt-2 font-mono text-xs">
              {Math.round(objective.progress_pct ?? 0)}% — {objective.target_days} jours
            </p>
          </Card>
        ))
      ) : (
        <Card className="border-dashed">
          <p className="text-fumee">Aucun objectif actif. Ton plan 30 jours se définit ici.</p>
        </Card>
      )}
    </main>
  )
}
