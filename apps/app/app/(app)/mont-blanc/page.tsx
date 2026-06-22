import { StageCard } from '@/components/mont-blanc/StageCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { LE_LIEN_TOTAL_DAYS } from '@/lib/data/le-lien-missions'
import { PROGRAM_ID, STAGE_ID } from '@/lib/mont-blanc/le-lien'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Hub Mont Blanc — liste des phases et étapes.
export default async function MontBlancPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { count: validatedCount } = await supabase
    .from('stage_daily_validations')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', user.id)
    .eq('stage_id', STAGE_ID)

  const validated = validatedCount ?? 0
  const leLienProgress = Math.round((validated / LE_LIEN_TOTAL_DAYS) * 100)
  const leLienStatus = validated >= LE_LIEN_TOTAL_DAYS ? 'completed' : 'in_progress'

  // Avancement global du programme (seule l'étape Le Lien est active au lancement)
  const globalProgress = leLienProgress

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <header>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">{PROGRAM_ID}</p>
        <h1 className="mt-1 font-sans text-3xl font-black text-white">MONT BLANC</h1>
        <p className="text-fumee mt-1">Programme Fondations · 12 semaines</p>
        <ProgressBar value={globalProgress} className="mt-4" />
        <p className="text-fumee mt-2 font-mono text-xs">{globalProgress}% du programme</p>
      </header>

      {/* Phase 1 — Le Pied */}
      <section className="flex flex-col gap-3">
        <p className="text-fumee text-sm font-medium uppercase tracking-wider">
          Phase 1 — Le Pied · semaines 1-4
        </p>
        <StageCard
          name="Le Lien"
          subtitle="Créer la confiance avant de chercher l'impact."
          durationDays={LE_LIEN_TOTAL_DAYS}
          status={leLienStatus}
          href="/mont-blanc/le-lien"
          progress={leLienProgress}
        />
        <StageCard
          name="L'Agenda"
          subtitle="Maîtriser son temps."
          durationDays={14}
          status="locked"
        />
      </section>

      {/* Phase 2 — Le Versant */}
      <section className="flex flex-col gap-3 opacity-60">
        <p className="text-fumee text-sm font-medium uppercase tracking-wider">
          Phase 2 — Le Versant · semaines 5-8
        </p>
        <StageCard name="La Machine" durationDays={21} status="locked" />
      </section>

      {/* Phase 3 — Le Sommet */}
      <section className="flex flex-col gap-3 opacity-60">
        <p className="text-fumee text-sm font-medium uppercase tracking-wider">
          Phase 3 — Le Sommet · semaines 9-12
        </p>
        <StageCard name="Le Mindset" durationDays={21} status="locked" />
      </section>
    </main>
  )
}
