import { StageCard, type StageStatus } from '@/components/mont-blanc/StageCard'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { STAGES, STAGE_ORDER, getStage } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// Hub Mont Blanc — phases et étapes.
export default async function MontBlancPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Compte de validations par étape
  const { data: validations } = await supabase
    .from('stage_daily_validations')
    .select('stage_id')
    .eq('user_id', user.id)

  const countByStage: Record<string, number> = {}
  for (const v of validations ?? []) {
    countByStage[v.stage_id] = (countByStage[v.stage_id] ?? 0) + 1
  }

  const totalDays = STAGE_ORDER.reduce((acc, id) => acc + (getStage(id)?.durationDays ?? 0), 0)
  const totalValidated = STAGE_ORDER.reduce((acc, id) => acc + (countByStage[id] ?? 0), 0)
  const globalProgress = totalDays > 0 ? Math.round((totalValidated / totalDays) * 100) : 0

  function stageView(stageId: string) {
    const stage = getStage(stageId)!
    const validated = countByStage[stageId] ?? 0
    const progress = Math.round((validated / stage.durationDays) * 100)
    const locked =
      stage.requires && (countByStage[stage.requires.stageId] ?? 0) < stage.requires.minDays
    const status: StageStatus = locked
      ? 'locked'
      : validated >= stage.durationDays
        ? 'completed'
        : 'in_progress'
    const requiredName = stage.requires ? (getStage(stage.requires.stageId)?.name ?? '') : ''
    return { stage, progress, status, requiredName }
  }

  const leLien = stageView('le-lien')
  const rayonnement = stageView('le-rayonnement')

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <header>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">
          {STAGES['le-lien']!.programId}
        </p>
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
          name={leLien.stage.name}
          subtitle={leLien.stage.subtitle}
          durationDays={leLien.stage.durationDays}
          status={leLien.status}
          href={`/mont-blanc/${leLien.stage.id}`}
          progress={leLien.progress}
        />
        <StageCard
          name={rayonnement.stage.name}
          subtitle={rayonnement.stage.subtitle}
          durationDays={rayonnement.stage.durationDays}
          status={rayonnement.status}
          href={`/mont-blanc/${rayonnement.stage.id}`}
          progress={rayonnement.progress}
          lockedMessage={`Termine ${rayonnement.requiredName} pour débloquer cette étape.`}
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
