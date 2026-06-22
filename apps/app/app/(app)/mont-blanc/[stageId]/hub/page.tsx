import { CoachingMessage } from '@/components/mont-blanc/CoachingMessage'
import { DayGrid } from '@/components/mont-blanc/DayGrid'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { computeStageStreak } from '@/lib/engine/stage-streak'
import {
  computeCurrentDay,
  computeMissedDays,
  getStage,
  protocolById,
} from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

export default async function StageHubPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params
  const stage = getStage(stageId)
  if (!stage) notFound()

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // Date de démarrage = date du diagnostic d'entrée de cette étape
  const { data: entryScore } = await supabase
    .from('stage_diagnostic_scores')
    .select('score_global, created_at')
    .eq('user_id', user.id)
    .eq('stage_id', stage.id)
    .eq('diagnostic_type', 'entry')
    .order('created_at', { ascending: true })
    .limit(1)
    .maybeSingle()

  if (!entryScore?.created_at) redirect(`/mont-blanc/${stage.id}`)

  const { data: validations } = await supabase
    .from('stage_daily_validations')
    .select('day_number, coaching_message, xp_earned')
    .eq('user_id', user.id)
    .eq('stage_id', stage.id)

  const validatedDays = (validations ?? []).map((v) => v.day_number)
  const currentDay = computeCurrentDay(entryScore.created_at, stage.durationDays)
  const missedDays = computeMissedDays(currentDay, validatedDays)
  const streak = computeStageStreak(validatedDays)
  const totalXp = (validations ?? []).reduce((acc, v) => acc + (v.xp_earned ?? 0), 0)

  const allDone = validatedDays.length >= stage.durationDays
  const todayValidation = (validations ?? []).find((v) => v.day_number === currentDay)
  const mission = stage.missions.find((m) => m.day === currentDay)
  const protocol = mission ? protocolById(stage, mission.protocolId) : undefined

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <header className="flex items-baseline justify-between">
        <div>
          <p className="text-feu text-sm font-medium uppercase tracking-wider">
            Étape {stage.stageNumber} — {stage.name}
          </p>
          <p className="text-fumee mt-1 font-mono text-xs">
            Jour {currentDay}/{stage.durationDays}
          </p>
        </div>
        <Link
          href={`/mont-blanc/${stage.id}/dashboard`}
          className="text-fumee text-sm transition-colors hover:text-white"
        >
          Tableau de bord
        </Link>
      </header>

      <DayGrid
        totalDays={stage.durationDays}
        currentDay={currentDay}
        validatedDays={validatedDays}
        missedDays={missedDays}
      />

      {allDone ? (
        <Card className="border-valide/50">
          <p className="font-sans text-lg font-bold text-white">21 jours bouclés.</p>
          <p className="text-fumee mt-2">Mesure ton chemin avec le diagnostic de sortie.</p>
          <Link href={`/mont-blanc/${stage.id}/diagnostic?type=exit`} className="mt-4 block">
            <Button fullWidth>Diagnostic de sortie</Button>
          </Link>
        </Card>
      ) : todayValidation ? (
        <section className="flex flex-col gap-4">
          <p className="text-valide text-sm font-medium uppercase tracking-wider">
            Mission du jour validée ✓
          </p>
          <CoachingMessage message={todayValidation.coaching_message} />
          <Link href={`/mont-blanc/${stage.id}/dashboard`} className="block">
            <Button variant="secondary" fullWidth>
              Voir mon tableau de bord
            </Button>
          </Link>
        </section>
      ) : mission ? (
        <section>
          <p className="text-feu mb-3 text-sm font-medium uppercase tracking-wider">
            {protocol?.icon} {protocol?.name}
          </p>
          <Card className="border-feu/40">
            <p className="font-sans text-xl font-bold leading-snug text-white">
              « {mission.mission} »
            </p>
          </Card>
          <Link href={`/mont-blanc/${stage.id}/validation/${currentDay}`} className="mt-4 block">
            <Button fullWidth>Mission faite — Valider</Button>
          </Link>
        </section>
      ) : null}

      <div className="border-acier bg-forge flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-sm">
        <span className="text-fumee">
          Score <span className="text-white">{entryScore.score_global}%</span>
        </span>
        <span className="text-fumee">
          XP <span className="text-white">{totalXp}</span>
        </span>
        <span className="text-fumee">
          Série <span className="text-feu">{streak} 🔥</span>
        </span>
      </div>
    </main>
  )
}
