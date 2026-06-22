import { CoachingMessage } from '@/components/mont-blanc/CoachingMessage'
import { DayGrid } from '@/components/mont-blanc/DayGrid'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PROTOCOL_BY_ID } from '@/lib/data/le-lien-protocols'
import { LE_LIEN_TOTAL_DAYS, missionForDay } from '@/lib/data/le-lien-missions'
import { computeStageStreak } from '@/lib/engine/stage-streak'
import { computeCurrentDay, computeMissedDays, STAGE_ID } from '@/lib/mont-blanc/le-lien'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function LeLienHubPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: program } = await supabase
    .from('user_programs')
    .select('started_at')
    .eq('user_id', user.id)
    .eq('program_id', 'mont-blanc')
    .maybeSingle()

  // Pas encore démarré → intro
  if (!program?.started_at) redirect('/mont-blanc/le-lien')

  const { data: validations } = await supabase
    .from('stage_daily_validations')
    .select('day_number, protocol_id, q1_execution, coaching_message, xp_earned')
    .eq('user_id', user.id)
    .eq('stage_id', STAGE_ID)

  const validatedDays = (validations ?? []).map((v) => v.day_number)
  const currentDay = computeCurrentDay(program.started_at)
  const missedDays = computeMissedDays(currentDay, validatedDays)
  const streak = computeStageStreak(validatedDays)
  const totalXp = (validations ?? []).reduce((acc, v) => acc + (v.xp_earned ?? 0), 0)

  const { data: entryScore } = await supabase
    .from('stage_diagnostic_scores')
    .select('score_global')
    .eq('user_id', user.id)
    .eq('stage_id', STAGE_ID)
    .eq('diagnostic_type', 'entry')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  const allDone = validatedDays.length >= LE_LIEN_TOTAL_DAYS
  const todayValidation = (validations ?? []).find((v) => v.day_number === currentDay)
  const mission = missionForDay(currentDay)
  const protocol = mission ? PROTOCOL_BY_ID[mission.protocolId] : undefined

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <header className="flex items-baseline justify-between">
        <div>
          <p className="text-feu text-sm font-medium uppercase tracking-wider">Étape 1 — Le Lien</p>
          <p className="text-fumee mt-1 font-mono text-xs">
            Jour {currentDay}/{LE_LIEN_TOTAL_DAYS}
          </p>
        </div>
        <Link
          href="/mont-blanc/le-lien/dashboard"
          className="text-fumee text-sm transition-colors hover:text-white"
        >
          Tableau de bord
        </Link>
      </header>

      <DayGrid
        totalDays={LE_LIEN_TOTAL_DAYS}
        currentDay={currentDay}
        validatedDays={validatedDays}
        missedDays={missedDays}
      />

      {allDone ? (
        <Card className="border-valide/50">
          <p className="font-sans text-lg font-bold text-white">21 jours bouclés.</p>
          <p className="text-fumee mt-2">Mesure ton chemin avec le diagnostic de sortie.</p>
          <Link href="/mont-blanc/le-lien/diagnostic?type=exit" className="mt-4 block">
            <Button fullWidth>Diagnostic de sortie</Button>
          </Link>
        </Card>
      ) : todayValidation ? (
        <section className="flex flex-col gap-4">
          <p className="text-valide text-sm font-medium uppercase tracking-wider">
            Mission du jour validée ✓
          </p>
          <CoachingMessage message={todayValidation.coaching_message} />
          <Link href="/mont-blanc/le-lien/dashboard" className="block">
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
          <Link href={`/mont-blanc/le-lien/validation/${currentDay}`} className="mt-4 block">
            <Button fullWidth>Mission faite — Valider</Button>
          </Link>
        </section>
      ) : null}

      {/* Mini stats */}
      <div className="border-acier bg-forge flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-sm">
        <span className="text-fumee">
          Score <span className="text-white">{entryScore?.score_global ?? '—'}%</span>
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
