// Miroir d'affichage des protocoles (la table stage_protocols reste la source FK).
export type ProtocolInfo = {
  id: string
  name: string
  description: string
  icon: string
}

export const LE_LIEN_PROTOCOLS: ProtocolInfo[] = [
  {
    id: 'attention',
    name: 'Attention réelle',
    description: "Sortir de soi pour accorder une vraie présence à l'autre.",
    icon: '👁️',
  },
  {
    id: 'prenom',
    name: 'Prénom',
    description: 'Retenir et utiliser le prénom comme marque de considération.',
    icon: '🤝',
  },
  {
    id: 'ecoute',
    name: 'Écoute active',
    description: 'Laisser parler, reformuler, comprendre avant de répondre.',
    icon: '👂',
  },
  {
    id: 'reconnaissance',
    name: 'Reconnaissance précise',
    description: 'Valoriser une action, une qualité ou un effort concret.',
    icon: '✦',
  },
  {
    id: 'desaccord',
    name: 'Désaccord maîtrisé',
    description: 'Transformer la confrontation en échange constructif.',
    icon: '🛡️',
  },
]

export const PROTOCOL_BY_ID: Record<string, ProtocolInfo> = Object.fromEntries(
  LE_LIEN_PROTOCOLS.map((p) => [p.id, p]),
)

export const LE_LIEN_MANTRA =
  "Les gens n'adhèrent pas à celui qui parle le plus. Ils adhèrent à celui qui les fait se sentir considérés."
