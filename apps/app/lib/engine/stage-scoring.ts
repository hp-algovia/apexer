// Calcul des scores de diagnostic d'une étape + libellés.

export const LE_LIEN_PROTOCOL_IDS = [
  'attention',
  'prenom',
  'ecoute',
  'reconnaissance',
  'desaccord',
] as const

export type ProtocolId = (typeof LE_LIEN_PROTOCOL_IDS)[number]

export type DiagnosticScores = {
  scoreGlobal: number
  scoreByProtocol: Record<string, number>
  strongest: string
  weakest: string
}

/**
 * 3 questions par protocole, valeurs 0-3.
 * Score protocole = somme / 9 × 100. Score global = moyenne des 5 protocoles.
 */
export function computeDiagnosticScores(
  responses: { protocolId: string; value: number }[],
): DiagnosticScores {
  const byProtocol: Record<string, number> = {}

  for (const protocolId of LE_LIEN_PROTOCOL_IDS) {
    const values = responses.filter((r) => r.protocolId === protocolId).map((r) => r.value)
    const sum = values.reduce((acc, v) => acc + v, 0)
    const max = values.length * 3
    byProtocol[protocolId] = max > 0 ? Math.round((sum / max) * 100) : 0
  }

  const protocols = Object.entries(byProtocol)
  const scoreGlobal = Math.round(
    protocols.reduce((acc, [, score]) => acc + score, 0) / protocols.length,
  )

  let strongest = protocols[0]?.[0] ?? 'attention'
  let weakest = protocols[0]?.[0] ?? 'attention'
  for (const [protocolId, score] of protocols) {
    if (score > (byProtocol[strongest] ?? -1)) strongest = protocolId
    if (score < (byProtocol[weakest] ?? 101)) weakest = protocolId
  }

  return { scoreGlobal, scoreByProtocol: byProtocol, strongest, weakest }
}

/** Libellé textuel d'un score global. */
export function scoreLabel(score: number): string {
  if (score <= 30) return 'Réflexe à construire'
  if (score <= 55) return 'Présence intermittente'
  if (score <= 75) return 'Influence propre'
  return 'Lien maîtrisé'
}
