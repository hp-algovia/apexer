import { RadarChart } from '@/components/mont-blanc/RadarChart'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PROTOCOL_BY_ID, LE_LIEN_PROTOCOLS } from '@/lib/data/le-lien-protocols'
import { STAGE_ID } from '@/lib/mont-blanc/le-lien'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function LeLienFinPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: scores } = await supabase
    .from('stage_diagnostic_scores')
    .select('diagnostic_type, score_global, score_by_protocol, created_at')
    .eq('user_id', user.id)
    .eq('stage_id', STAGE_ID)
    .order('created_at', { ascending: false })

  const entry = (scores ?? []).find((s) => s.diagnostic_type === 'entry')
  const exit = (scores ?? []).find((s) => s.diagnostic_type === 'exit')

  // Pas de diagnostic de sortie → le faire d'abord
  if (!exit) redirect('/mont-blanc/le-lien/diagnostic?type=exit')

  const entryByProtocol = (entry?.score_by_protocol as Record<string, number>) ?? {}
  const exitByProtocol = (exit.score_by_protocol as Record<string, number>) ?? {}
  const globalDelta = entry ? exit.score_global - entry.score_global : 0

  // Protocole le plus renforcé
  let mostImproved = LE_LIEN_PROTOCOLS[0]?.id ?? 'attention'
  let bestDelta = -Infinity
  for (const protocol of LE_LIEN_PROTOCOLS) {
    const delta = (exitByProtocol[protocol.id] ?? 0) - (entryByProtocol[protocol.id] ?? 0)
    if (delta > bestDelta) {
      bestDelta = delta
      mostImproved = protocol.id
    }
  }

  // Retour témoin (anonyme)
  const { data: witnessRequest } = await supabase
    .from('stage_witness_requests')
    .select('id, status')
    .eq('user_id', user.id)
    .eq('stage_id', STAGE_ID)
    .maybeSingle()
  let witnessAnswered = false
  if (witnessRequest?.status === 'completed') witnessAnswered = true

  const { data: badges } = await supabase.from('badges').select('id, name').like('key', 'le-lien-%')
  const { data: userBadges } = await supabase
    .from('user_badges')
    .select('badge_id')
    .eq('user_id', user.id)
  const unlockedIds = new Set((userBadges ?? []).map((b) => b.badge_id))
  const unlockedLeLien = (badges ?? []).filter((b) => unlockedIds.has(b.id))

  return (
    <main className="flex flex-col gap-6 px-6 py-10">
      <header>
        <p className="text-feu text-sm font-medium uppercase tracking-wider">Étape 1 — Terminée</p>
        <h1 className="mt-2 font-sans text-3xl font-black text-white">
          Tu n’as pas appris à parler aux autres.
        </h1>
        <p className="text-fumee mt-2">Tu as appris à mieux exister dans la relation.</p>
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
          <RadarChart scores={exitByProtocol} compareScores={entryByProtocol} size={280} />
        </div>
        <p className="text-fumee mt-2 text-center text-xs">
          <span className="text-fumee">Gris</span> : entrée ·{' '}
          <span className="text-feu">Orange</span> : sortie
        </p>
        {bestDelta > 0 ? (
          <p className="mt-4 text-white">
            Protocole le plus renforcé :{' '}
            <span className="text-valide">
              {PROTOCOL_BY_ID[mostImproved]?.name ?? mostImproved} (+{bestDelta}%)
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

      {unlockedLeLien.length > 0 ? (
        <section>
          <p className="text-fumee mb-3 text-sm font-medium uppercase tracking-wider">
            Badges débloqués
          </p>
          <div className="grid grid-cols-2 gap-3">
            {unlockedLeLien.map((badge) => (
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
