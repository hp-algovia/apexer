import {
  LE_LIEN_DIAGNOSTIC,
  LE_LIEN_QUALITATIVE,
  type StageDiagnosticQuestion,
} from '@/lib/data/le-lien-diagnostic'
import { COACHING_MESSAGES as LE_LIEN_COACHING } from '@/lib/data/le-lien-coaching'
import { LE_LIEN_MISSIONS, type DailyMission } from '@/lib/data/le-lien-missions'
import { RAYONNEMENT_COACHING } from '@/lib/data/le-rayonnement-coaching'
import {
  LE_RAYONNEMENT_DIAGNOSTIC,
  LE_RAYONNEMENT_QUALITATIVE,
} from '@/lib/data/le-rayonnement-diagnostic'
import { LE_RAYONNEMENT_MISSIONS } from '@/lib/data/le-rayonnement-missions'

export const PROGRAM_ID = 'mont-blanc'
export const DEFAULT_TOTAL_DAYS = 21
export const WITNESS_DAY = 14

export type ProtocolInfo = {
  id: string
  name: string
  short: string // libellé court pour le radar
  description: string
  icon: string
}

export type QualitativeQuestion = { id: string; text: string; options: string[] }
export type WitnessQuestion = { text: string; options: { label: string; value: string }[] }
export type ScoreBand = { max: number; label: string }
export type StageBadges = {
  pointZero: string
  day7: string
  day14: string
  day21: string
  progression: string
  witness: string
}
export type StageRequirement = { stageId: string; minDays: number }

export type StageConfig = {
  id: string
  programId: string
  stageNumber: number
  name: string
  subtitle: string
  mantra: string
  durationDays: number
  witnessDay: number
  introLines: string[]
  protocols: ProtocolInfo[]
  diagnostic: StageDiagnosticQuestion[]
  qualitative: QualitativeQuestion[]
  missions: DailyMission[]
  coaching: Record<string, Record<number, string>>
  scoreBands: ScoreBand[]
  badges: StageBadges
  milestoneBadges: Record<number, string>
  witnessQuestions: WitnessQuestion[]
  witnessIntro: string
  finTitle: string
  finSubtitle: string
  requires?: StageRequirement
}

const LE_LIEN_PROTOCOLS: ProtocolInfo[] = [
  {
    id: 'attention',
    name: 'Attention réelle',
    short: 'Attention',
    description: "Sortir de soi pour accorder une vraie présence à l'autre.",
    icon: '👁️',
  },
  {
    id: 'prenom',
    name: 'Prénom',
    short: 'Prénom',
    description: 'Retenir et utiliser le prénom comme marque de considération.',
    icon: '🤝',
  },
  {
    id: 'ecoute',
    name: 'Écoute active',
    short: 'Écoute',
    description: 'Laisser parler, reformuler, comprendre avant de répondre.',
    icon: '👂',
  },
  {
    id: 'reconnaissance',
    name: 'Reconnaissance précise',
    short: 'Reconnaissance',
    description: 'Valoriser une action, une qualité ou un effort concret.',
    icon: '✦',
  },
  {
    id: 'desaccord',
    name: 'Désaccord maîtrisé',
    short: 'Désaccord',
    description: 'Transformer la confrontation en échange constructif.',
    icon: '🛡️',
  },
]

const LE_RAYONNEMENT_PROTOCOLS: ProtocolInfo[] = [
  {
    id: 'presence-locale',
    name: 'Présence locale',
    short: 'Présence',
    description: 'Être physiquement visible et utile dans son territoire.',
    icon: '📍',
  },
  {
    id: 'prescription',
    name: 'Réseau de prescription',
    short: 'Prescription',
    description: 'Construire un réseau de partenaires qui recommandent naturellement.',
    icon: '🤝',
  },
  {
    id: 'contenu',
    name: 'Contenu régulier',
    short: 'Contenu',
    description: 'Publier pour exister. Pas pour vendre — pour être la référence.',
    icon: '📣',
  },
  {
    id: 'recommandation',
    name: 'Recommandation demandée',
    short: 'Recommandation',
    description: 'Demander systématiquement après chaque succès.',
    icon: '⭐',
  },
  {
    id: 'image-pro',
    name: 'Image professionnelle',
    short: 'Image',
    description: "Cohérence de l'image en ligne et hors ligne.",
    icon: '🎯',
  },
]

const LE_LIEN_WITNESS: WitnessQuestion[] = [
  {
    text: 'Ces dernières semaines, la personne qui t’a partagé ce lien t’a semblé…',
    options: [
      { label: "Plus à l'écoute que d'habitude", value: 'great' },
      { label: 'Un peu plus présente', value: 'good' },
      { label: "Comme d'habitude", value: 'neutral' },
      { label: 'Je n’ai pas remarqué', value: 'none' },
    ],
  },
  {
    text: 'Dans vos échanges récents, elle…',
    options: [
      { label: "T'a laissé aller au bout de tes idées", value: 'great' },
      { label: 'T’a globalement bien écouté', value: 'good' },
      { label: 'A parfois coupé ou ramené à elle', value: 'neutral' },
      { label: 'Difficile à dire', value: 'none' },
    ],
  },
  {
    text: 'Globalement, le lien avec elle…',
    options: [
      { label: 'S’est renforcé', value: 'great' },
      { label: 'Est resté bon', value: 'good' },
      { label: 'N’a pas changé', value: 'neutral' },
      { label: 'Je préfère ne pas dire', value: 'none' },
    ],
  },
]

const LE_RAYONNEMENT_WITNESS: WitnessQuestion[] = [
  {
    text: 'Ces deux dernières semaines, cette personne vous a semblé :',
    options: [
      { label: 'Plus visible et active dans son réseau', value: 'great' },
      { label: "Comme d'habitude", value: 'good' },
      { label: 'Moins disponible', value: 'neutral' },
      { label: 'Je ne peux pas évaluer', value: 'none' },
    ],
  },
  {
    text: 'Dans vos échanges, elle vous a semblé :',
    options: [
      { label: 'Plus proactive pour créer du lien', value: 'great' },
      { label: 'Plus présente sur les réseaux sociaux', value: 'good' },
      { label: 'Plus demandeuse de recommandations', value: 'neutral' },
      { label: 'Aucun changement notable', value: 'none' },
    ],
  },
  {
    text: 'Recommanderiez-vous ses services à quelqu’un ?',
    options: [
      { label: 'Oui, sans hésiter', value: 'great' },
      { label: "Oui, si l'occasion se présente", value: 'good' },
      { label: 'Peut-être', value: 'neutral' },
      { label: 'Non', value: 'none' },
    ],
  },
]

export const STAGES: Record<string, StageConfig> = {
  'le-lien': {
    id: 'le-lien',
    programId: PROGRAM_ID,
    stageNumber: 1,
    name: 'Le Lien',
    subtitle: 'Créer la confiance avant de chercher l’impact.',
    mantra:
      "Les gens n'adhèrent pas à celui qui parle le plus. Ils adhèrent à celui qui les fait se sentir considérés.",
    durationDays: 21,
    witnessDay: WITNESS_DAY,
    introLines: [
      'Pendant 21 jours, tu vas travailler une compétence que tout le monde croit maîtriser : la qualité de présence dans la relation.',
      'Tu ne vas pas écrire.\nTu ne vas pas théoriser.\nTu vas agir, choisir, mesurer.',
    ],
    protocols: LE_LIEN_PROTOCOLS,
    diagnostic: LE_LIEN_DIAGNOSTIC,
    qualitative: LE_LIEN_QUALITATIVE,
    missions: LE_LIEN_MISSIONS,
    coaching: LE_LIEN_COACHING,
    scoreBands: [
      { max: 30, label: 'Réflexe à construire' },
      { max: 55, label: 'Présence intermittente' },
      { max: 75, label: 'Influence propre' },
      { max: 100, label: 'Lien maîtrisé' },
    ],
    badges: {
      pointZero: 'le-lien-point-zero',
      day7: 'le-lien-presence-active',
      day14: 'le-lien-ecoute-armee',
      day21: 'le-lien-maitrise',
      progression: 'le-lien-influence-propre',
      witness: 'le-lien-preuve-externe',
    },
    milestoneBadges: {
      7: 'le-lien-presence-active',
      14: 'le-lien-ecoute-armee',
      21: 'le-lien-maitrise',
    },
    witnessQuestions: LE_LIEN_WITNESS,
    witnessIntro:
      'Une personne proche travaille sa qualité de présence dans la relation. Ton regard l’aide à mesurer son évolution. 3 questions, anonyme, 30 secondes.',
    finTitle: 'Tu n’as pas appris à parler aux autres.',
    finSubtitle: 'Tu as appris à mieux exister dans la relation.',
  },
  'le-rayonnement': {
    id: 'le-rayonnement',
    programId: PROGRAM_ID,
    stageNumber: 2,
    name: 'Le Rayonnement',
    subtitle: 'Attirer au lieu de chasser.',
    mantra: 'Les APEXER ne prospectent pas. Ils rayonnent. Et les clients viennent à eux.',
    durationDays: 21,
    witnessDay: WITNESS_DAY,
    introLines: [
      'Pendant 21 jours, tu vas installer un système qui remplace la prospection par la visibilité.',
      'Pas de cold call.\nPas de spam.\nDes actions qui construisent ta notoriété, ton réseau, et ta réputation.',
      'Les APEXER ne prospectent pas.\nIls rayonnent.',
    ],
    protocols: LE_RAYONNEMENT_PROTOCOLS,
    diagnostic: LE_RAYONNEMENT_DIAGNOSTIC,
    qualitative: LE_RAYONNEMENT_QUALITATIVE,
    missions: LE_RAYONNEMENT_MISSIONS,
    coaching: RAYONNEMENT_COACHING,
    scoreBands: [
      { max: 30, label: 'Invisible' },
      { max: 55, label: 'Sporadique' },
      { max: 75, label: 'Émergent' },
      { max: 100, label: 'Rayonnant' },
    ],
    badges: {
      pointZero: 'rayonnement-point-zero',
      day7: 'rayonnement-7',
      day14: 'rayonnement-14',
      day21: 'rayonnement-21',
      progression: 'rayonnement-progression',
      witness: 'rayonnement-preuve',
    },
    milestoneBadges: {
      7: 'rayonnement-7',
      14: 'rayonnement-14',
      21: 'rayonnement-21',
    },
    witnessQuestions: LE_RAYONNEMENT_WITNESS,
    witnessIntro:
      'Une personne proche travaille sa visibilité professionnelle. Ton regard l’aide à mesurer son évolution. 3 questions, anonyme, 30 secondes.',
    finTitle: 'Tu n’as pas appris à te vendre.',
    finSubtitle: 'Tu as appris à être trouvé.',
    requires: { stageId: 'le-lien', minDays: 18 },
  },
}

// Ordre d'affichage dans le hub Mont Blanc
export const STAGE_ORDER = ['le-lien', 'le-rayonnement']

export function getStage(id: string): StageConfig | undefined {
  return STAGES[id]
}

export function protocolById(stage: StageConfig, id: string): ProtocolInfo | undefined {
  return stage.protocols.find((p) => p.id === id)
}

export function radarAxes(stage: StageConfig): { id: string; label: string }[] {
  return stage.protocols.map((p) => ({ id: p.id, label: p.short }))
}

export function scoreLabel(stage: StageConfig, score: number): string {
  for (const band of stage.scoreBands) {
    if (score <= band.max) return band.label
  }
  return stage.scoreBands[stage.scoreBands.length - 1]?.label ?? ''
}

export function coachingMessage(stage: StageConfig, protocolId: string, value: number): string {
  return (
    stage.coaching[protocolId]?.[value] ??
    'Étape franchie. Reviens demain et continue — la régularité fait tout.'
  )
}

/**
 * Jour courant d'une étape, dérivé de la date de démarrage (= date du diagnostic
 * d'entrée). 1 jour calendaire = 1 jour d'étape. Clampé entre 1 et durationDays.
 * Retourne 0 si pas démarré.
 */
export function computeCurrentDay(
  startedAt: string | null | undefined,
  totalDays = DEFAULT_TOTAL_DAYS,
): number {
  if (!startedAt) return 0
  const start = new Date(startedAt)
  const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate())
  const now = new Date()
  const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diffDays = Math.floor((nowMidnight.getTime() - startMidnight.getTime()) / 86_400_000)
  return Math.min(totalDays, Math.max(1, diffDays + 1))
}

/** Jours passés non validés (manqués). */
export function computeMissedDays(currentDay: number, validatedDays: number[]): number[] {
  const validated = new Set(validatedDays)
  const missed: number[] = []
  for (let day = 1; day < currentDay; day += 1) {
    if (!validated.has(day)) missed.push(day)
  }
  return missed
}
