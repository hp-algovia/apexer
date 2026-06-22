import { DayGrid } from '@/components/mont-blanc/DayGrid'
import { ProtocolBar } from '@/components/mont-blanc/ProtocolBar'
import { RadarChart } from '@/components/mont-blanc/RadarChart'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { computeStageStreak } from '@/lib/engine/stage-streak'
import {
  computeCurrentDay,
  computeMissedDays,
  getStage,
  radarAxes,
  scoreLabel,
} from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

export default async function StageDashboardPage({
  params,
}: {
  params: Promise<{ stageId: string }>
}) {
  const { stageId } = await params
  const stage = getStage(stageId)
  if (!stage) notFound()

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const badgeKeys = Object.values(stage.badges)

  const [
    { data: validations },
    { data: scores },
    { data: badges },
    { data: userBadges },
    { data: witness },
  ] = await Promise.all([
    supabase
      .from('stage_daily_validations')
      .select('day_number, xp_earned')
      .eq('user_id', user.id)
      .eq('stage_id', stage.id),
    supabase
      .from('stage_diagnostic_scores')
      .select('diagnostic_type, score_global, score_by_protocol, weakest_protocol, created_at')
      .eq('user_id', user.id)
      .eq('stage_id', stage.id)
      .order('created_at', { ascending: false }),
    supabase.from('badges').select('id, key, name').in('key', badgeKeys),
    supabase.from('user_badges').select('badge_id').eq('user_id', user.id),
    supabase
      .from('stage_witness_requests')
      .select('status')
      .eq('user_id', user.id)
      .eq('stage_id', stage.id)
      .maybeSingle(),
  ])

  const entry = (scores ?? []).find((s) => s.diagnostic_type === 'entry')
  if (!entry?.created_at) redirect(`/mont-blanc/${stage.id}`)

  const validatedDays = (validations ?? []).map((v) => v.day_number)
  const currentDay = computeCurrentDay(entry.created_at, stage.durationDays)
  const missedDays = computeMissedDays(currentDay, validatedDays)
  const streak = computeStageStreak(validatedDays)
  const totalXp = (validations ?? []).reduce((acc, v) => acc + (v.xp_earned ?? 0), 0)

  const exit = (scores ?? []).find((s) => s.diagnostic_type === 'exit')
  const current = exit ?? entry
  const currentByProtocol = (current.score_by_protocol as Record<string, number>) ?? {}
  const weakest = current.weakest_protocol
  const progression = current.score_global - entry.score_global

  const unlockedIds = new Set((userBadges ?? []).map((b) => b.badge_id))

  return (
    <main className="flex flex-col gap-6 px-6 py-8">
      <header>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">Tableau de bord</p>
        <h1 className="mt-1 font-sans text-2xl font-black text-white">{stage.name}</h1>
      </header>

      <Card>
        <p className="text-fumee text-sm">Score global</p>
        <p className="mt-1 font-mono text-4xl font-black text-white">{current.score_global}%</p>
        <p className="text-feu mt-1 text-sm">{scoreLabel(stage, current.score_global)}</p>
        <div className="mt-5 flex justify-center">
          <RadarChart
            axes={radarAxes(stage)}
            scores={currentByProtocol}
            size={260}
            {...(exit
              ? { compareScores: (entry.score_by_protocol as Record<string, number>) ?? {} }
              : {})}
          />
        </div>
        <p className="text-fumee mt-4 text-sm">
          Entrée : {entry.score_global}% → Actuel : {current.score_global}%{' '}
          {progression !== 0 ? (
            <span className={progression > 0 ? 'text-valide' : 'text-alerte'}>
              ({progression > 0 ? '+' : ''}
              {progression}%)
            </span>
          ) : null}
        </p>
      </Card>

      <section className="flex flex-col gap-3">
        <p className="text-fumee text-sm font-medium uppercase tracking-wider">Protocoles</p>
        {stage.protocols.map((protocol) => (
          <ProtocolBar
            key={protocol.id}
            name={protocol.name}
            icon={protocol.icon}
            score={currentByProtocol[protocol.id] ?? 0}
            isWeakest={protocol.id === weakest}
          />
        ))}
      </section>

      <div className="border-acier bg-forge flex items-center justify-between rounded-lg border px-4 py-3 font-mono text-sm">
        <span className="text-fumee">
          XP <span className="text-white">{totalXp}</span>
        </span>
        <span className="text-fumee">
          Série <span className="text-feu">{streak} jours 🔥</span>
        </span>
      </div>

      {currentDay >= stage.witnessDay && witness?.status !== 'completed' ? (
        <Link href={`/mont-blanc/${stage.id}/temoin`} className="block">
          <Button variant="secondary" fullWidth>
            {witness ? 'Relancer mon témoin' : 'Demander un retour à un témoin'}
          </Button>
        </Link>
      ) : null}

      <section>
        <p className="text-fumee mb-3 text-sm font-medium uppercase tracking-wider">Badges</p>
        <div className="grid grid-cols-2 gap-3">
          {(badges ?? []).map((badge) => {
            const unlocked = unlockedIds.has(badge.id)
            return (
              <Card key={badge.id} className={unlocked ? 'border-prestige/60' : 'opacity-50'}>
                <p className="font-sans font-bold text-white">{badge.name}</p>
                <p className="text-fumee mt-1 text-xs">{unlocked ? 'Débloqué' : 'Verrouillé'}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section>
        <p className="text-fumee mb-3 text-sm font-medium uppercase tracking-wider">Étape</p>
        <DayGrid
          totalDays={stage.durationDays}
          currentDay={currentDay}
          validatedDays={validatedDays}
          missedDays={missedDays}
        />
      </section>

      <Link href={`/mont-blanc/${stage.id}/hub`} className="block">
        <Button variant="secondary" fullWidth>
          Retour à la mission du jour
        </Button>
      </Link>
    </main>
  )
}
