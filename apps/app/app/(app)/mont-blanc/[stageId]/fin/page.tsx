import { ForgeGlow } from '@/components/mont-blanc/ForgeGlow'
import { RadarChart } from '@/components/mont-blanc/RadarChart'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getStage, protocolById, radarAxes } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

export default async function StageFinPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params
  const stage = getStage(stageId)
  if (!stage) notFound()

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: scores } = await supabase
    .from('stage_diagnostic_scores')
    .select('diagnostic_type, score_global, score_by_protocol, created_at')
    .eq('user_id', user.id)
    .eq('stage_id', stage.id)
    .order('created_at', { ascending: false })

  const entry = (scores ?? []).find((s) => s.diagnostic_type === 'entry')
  const exit = (scores ?? []).find((s) => s.diagnostic_type === 'exit')
  if (!exit) redirect(`/mont-blanc/${stage.id}/diagnostic?type=exit`)

  const entryByProtocol = (entry?.score_by_protocol as Record<string, number>) ?? {}
  const exitByProtocol = (exit.score_by_protocol as Record<string, number>) ?? {}
  const globalDelta = entry ? exit.score_global - entry.score_global : 0

  let mostImproved = stage.protocols[0]?.id ?? ''
  let bestDelta = -Infinity
  for (const protocol of stage.protocols) {
    const delta = (exitByProtocol[protocol.id] ?? 0) - (entryByProtocol[protocol.id] ?? 0)
    if (delta > bestDelta) {
      bestDelta = delta
      mostImproved = protocol.id
    }
  }

  const { data: witnessRequest } = await supabase
    .from('stage_witness_requests')
    .select('status')
    .eq('user_id', user.id)
    .eq('stage_id', stage.id)
    .maybeSingle()
  const witnessAnswered = witnessRequest?.status === 'completed'

  const badgeKeys = Object.values(stage.badges)
  const { data: badges } = await supabase.from('badges').select('id, name').in('key', badgeKeys)
  const { data: userBadges } = await supabase
    .from('user_badges')
    .select('badge_id')
    .eq('user_id', user.id)
  const unlockedIds = new Set((userBadges ?? []).map((b) => b.badge_id))
  const unlockedStageBadges = (badges ?? []).filter((b) => unlockedIds.has(b.id))

  return (
    <main className="flex flex-col gap-6 px-6 py-10">
      <ForgeGlow />
      <header>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">
          Étape {stage.stageNumber} — Terminée
        </p>
        <h1 className="mt-2 font-sans text-3xl font-black text-white">{stage.finTitle}</h1>
        <p className="text-fumee mt-2">{stage.finSubtitle}</p>
      </header>

      <Card>
        <p className="text-fumee text-sm font-medium uppercase tracking-wider">Résultats</p>
        <p className="mt-3 text-white">
          Score entrée : <span className="font-mono">{entry?.score_global ?? '—'}%</span> → Score
          sortie : <span className="font-mono">{exit.score_global}%</span>{' '}
          {globalDelta !== 0 ? (
            <span className={globalDelta > 0 ? 'text-valide' : 'text-alerte'}>
              {globalDelta > 0 ? '+' : ''}
              {globalDelta}% {globalDelta > 0 ? '✅' : ''}
            </span>
          ) : null}
        </p>
        <div className="mt-5 flex justify-center">
          <RadarChart
            axes={radarAxes(stage)}
            scores={exitByProtocol}
            compareScores={entryByProtocol}
            size={280}
          />
        </div>
        <p className="text-fumee mt-2 text-center text-xs">
          <span className="text-fumee">Gris</span> : entrée ·{' '}
          <span className="text-feu">Orange</span> : sortie
        </p>
        {bestDelta > 0 ? (
          <p className="mt-4 text-white">
            Protocole le plus renforcé :{' '}
            <span className="text-valide">
              {protocolById(stage, mostImproved)?.name ?? mostImproved} (+{bestDelta}%)
            </span>
          </p>
        ) : null}
      </Card>

      {witnessAnswered ? (
        <Card className="border-prestige/50">
          <p className="text-prestige text-sm font-medium uppercase tracking-wider">
            Retour témoin
          </p>
          <p className="mt-2 text-white">
            Ton témoin a confirmé ton évolution. Une preuve extérieure que le changement est réel.
          </p>
        </Card>
      ) : null}

      {unlockedStageBadges.length > 0 ? (
        <section>
          <p className="text-fumee mb-3 text-sm font-medium uppercase tracking-wider">
            Badges débloqués
          </p>
          <div className="grid grid-cols-2 gap-3">
            {unlockedStageBadges.map((badge) => (
              <Card key={badge.id} className="border-prestige/60">
                <p className="font-sans font-bold text-white">🏅 {badge.name}</p>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <Link href="/mont-blanc" className="block">
        <Button fullWidth>Retour au programme Mont Blanc</Button>
      </Link>
    </main>
  )
}
