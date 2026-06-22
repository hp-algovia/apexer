// Calcul des scores de diagnostic d'une étape (générique, multi-protocoles).

export type DiagnosticScores = {
  scoreGlobal: number
  scoreByProtocol: Record<string, number>
  strongest: string
  weakest: string
}

/**
 * 3 questions par protocole, valeurs 0-3.
 * Score protocole = somme / 9 × 100. Score global = moyenne des protocoles.
 */
export function computeDiagnosticScores(
  responses: { protocolId: string; value: number }[],
  protocolIds: string[],
): DiagnosticScores {
  const byProtocol: Record<string, number> = {}

  for (const protocolId of protocolIds) {
    const values = responses.filter((r) => r.protocolId === protocolId).map((r) => r.value)
    const sum = values.reduce((acc, v) => acc + v, 0)
    const max = values.length * 3
    byProtocol[protocolId] = max > 0 ? Math.round((sum / max) * 100) : 0
  }

  const protocols = Object.entries(byProtocol)
  const scoreGlobal =
    protocols.length > 0
      ? Math.round(protocols.reduce((acc, [, score]) => acc + score, 0) / protocols.length)
      : 0

  let strongest = protocols[0]?.[0] ?? ''
  let weakest = protocols[0]?.[0] ?? ''
  for (const [protocolId, score] of protocols) {
    if (score > (byProtocol[strongest] ?? -1)) strongest = protocolId
    if (score < (byProtocol[weakest] ?? 101)) weakest = protocolId
  }

  return { scoreGlobal, scoreByProtocol: byProtocol, strongest, weakest }
}
