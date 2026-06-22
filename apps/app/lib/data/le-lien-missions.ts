// Programme 21 jours — Le Lien.
// ⚠️ CONTENU À VALIDER PAR HP : le doc source (APEXER_SOMMET1_*) étant absent du repo,
// les 21 missions et leurs validations ont été rédigées ici en cohérence avec les 5
// protocoles, le diagnostic et la matrice de coaching. À relire/ajuster.

export type ValidationQuestion = {
  text: string
  options: { label: string; value: number | string }[]
}

export type DailyMission = {
  day: number
  protocolId: string
  mission: string
  // Q1 exécution (valeurs 0-3) + Q2 observation (valeurs 0-3)
  validation: [ValidationQuestion, ValidationQuestion]
  // Jour 21 : bilan final (la Q3 pilotage est remplacée par une Q3 bilan)
  final?: boolean
}

// Q3 constante — pilotage du lendemain (jours 1-20)
export const Q3_PILOTAGE: ValidationQuestion = {
  text: 'Demain, sur ce protocole :',
  options: [
    { label: 'Prêt à aller plus loin', value: 'next' },
    { label: 'Besoin de consolider', value: 'consolidate' },
    { label: 'Envie de passer à autre chose', value: 'move' },
  ],
}

// Q3 spéciale du jour 21 — bilan final (stockée dans q3_pilotage)
export const Q3_BILAN: ValidationQuestion = {
  text: 'Au terme de ces 21 jours, où en es-tu avec le lien ?',
  options: [
    { label: "Ma façon d'être en relation a changé", value: 'transformed' },
    { label: 'J’ai progressé, je veux continuer', value: 'progressing' },
    { label: 'Des bases posées, à consolider', value: 'consolidate' },
  ],
}

// — Questions d'exécution (Q1) et d'observation (Q2) par protocole —
const Q1: Record<string, ValidationQuestion> = {
  attention: {
    text: "Aujourd'hui, as-tu accordé une vraie présence à quelqu'un ?",
    options: [
      { label: 'Oui, pleinement, sans me disperser', value: 3 },
      { label: "Oui, mais l'esprit ailleurs par moments", value: 2 },
      { label: 'Un peu, vite repris par moi-même', value: 1 },
      { label: 'Pas vraiment', value: 0 },
    ],
  },
  prenom: {
    text: 'As-tu utilisé le prénom de ton interlocuteur ?',
    options: [
      { label: 'Oui, naturellement, plusieurs fois', value: 3 },
      { label: 'Oui, une fois', value: 2 },
      { label: "J'y ai pensé sans le faire", value: 1 },
      { label: 'Non, ou prénom oublié', value: 0 },
    ],
  },
  ecoute: {
    text: 'As-tu écouté sans préparer ta réponse à la place ?',
    options: [
      { label: "Oui, jusqu'au bout, puis j'ai reformulé", value: 3 },
      { label: 'Oui en grande partie', value: 2 },
      { label: "J'ai coupé ou anticipé", value: 1 },
      { label: 'Non, repris la main trop vite', value: 0 },
    ],
  },
  reconnaissance: {
    text: 'As-tu valorisé précisément une action ou une qualité ?',
    options: [
      { label: 'Oui, en nommant le détail concret', value: 3 },
      { label: 'Oui, mais de façon générale', value: 2 },
      { label: 'Je l’ai remarqué sans le dire', value: 1 },
      { label: 'Non', value: 0 },
    ],
  },
  desaccord: {
    text: 'Face à un désaccord, comment as-tu réagi ?',
    options: [
      { label: "J'ai cherché l'accord / posé une question avant de nuancer", value: 3 },
      { label: 'J’ai exprimé mon désaccord avec calme', value: 2 },
      { label: 'J’ai corrigé assez directement', value: 1 },
      { label: 'Pas de situation, ou réaction frontale', value: 0 },
    ],
  },
}

const Q2: Record<string, ValidationQuestion> = {
  attention: {
    text: "Comment l'autre a-t-il réagi ?",
    options: [
      { label: 'Il s’est ouvert, a parlé plus librement', value: 3 },
      { label: 'Il a semblé à l’aise', value: 2 },
      { label: 'Rien de notable', value: 1 },
      { label: 'Je n’ai pas observé', value: 0 },
    ],
  },
  prenom: {
    text: 'Quel effet a eu le prénom employé ?',
    options: [
      { label: 'Visiblement touché, considéré', value: 3 },
      { label: 'Léger signe positif', value: 2 },
      { label: 'Neutre', value: 1 },
      { label: 'Pas observé', value: 0 },
    ],
  },
  ecoute: {
    text: 'Qu’as-tu appris que tu ignorais ?',
    options: [
      { label: 'Une chose qui change ma vision', value: 3 },
      { label: 'Un détail utile', value: 2 },
      { label: 'Pas grand-chose', value: 1 },
      { label: 'Rien', value: 0 },
    ],
  },
  reconnaissance: {
    text: 'Comment a réagi la personne reconnue ?',
    options: [
      { label: 'Fierté ou élan visible', value: 3 },
      { label: 'Sourire, un merci', value: 2 },
      { label: 'Neutre', value: 1 },
      { label: 'Pas observé', value: 0 },
    ],
  },
  desaccord: {
    text: 'État de la relation après l’échange ?',
    options: [
      { label: 'Renforcée, lien intact', value: 3 },
      { label: 'Inchangée', value: 2 },
      { label: 'Légèrement tendue', value: 1 },
      { label: 'Tendue, ou pas observé', value: 0 },
    ],
  },
}

function mission(day: number, protocolId: string, text: string, final = false): DailyMission {
  return {
    day,
    protocolId,
    mission: text,
    validation: [Q1[protocolId]!, Q2[protocolId]!],
    ...(final ? { final: true } : {}),
  }
}

export const LE_LIEN_MISSIONS: DailyMission[] = [
  mission(
    1,
    'attention',
    "Dans une conversation aujourd'hui, pose une question sincère sur l'autre avant de parler de toi.",
  ),
  mission(
    2,
    'prenom',
    "Retiens le prénom d'une personne rencontrée aujourd'hui et utilise-le au moins une fois.",
  ),
  mission(
    3,
    'ecoute',
    "Dans un échange important, écoute jusqu'au bout avant de répondre. Ne prépare pas ta réponse pendant qu'on te parle.",
  ),
  mission(
    4,
    'reconnaissance',
    "Valorise précisément une action d'un collègue ou d'un proche. Nomme le détail concret.",
  ),
  mission(
    5,
    'desaccord',
    "Face à un désaccord, commence par un point d'accord avant d'exprimer ta nuance.",
  ),
  mission(6, 'attention', "Parle moins que l'autre dans une conversation importante."),
  mission(
    7,
    'prenom',
    'Associe un prénom à un détail personnel (métier, projet, passion) et retiens les deux.',
  ),
  mission(
    8,
    'ecoute',
    'Reformule ce que dit ton interlocuteur avant de donner ton avis : « Si je comprends bien… ».',
  ),
  mission(
    9,
    'reconnaissance',
    "Remercie quelqu'un en disant précisément ce que tu as apprécié dans ce qu'il a fait.",
  ),
  mission(
    10,
    'desaccord',
    "Quand quelqu'un dit quelque chose que tu juges faux, pose une question plutôt que de corriger.",
  ),
  mission(
    11,
    'attention',
    'Range ton téléphone pendant toute une conversation. Regarde la personne.',
  ),
  mission(12, 'prenom', 'Salue par leur prénom au moins deux personnes que tu connais peu.'),
  mission(
    13,
    'ecoute',
    "Laisse trois secondes de silence après que l'autre a fini de parler, avant de répondre.",
  ),
  mission(
    14,
    'reconnaissance',
    "Nomme la contribution précise d'une personne dans un projet d'équipe, devant les autres.",
  ),
  mission(
    15,
    'desaccord',
    'Après un échange tendu récent, fais le premier pas pour rétablir le lien.',
  ),
  mission(16, 'attention', 'Pose deux questions de suivi sincères dans une même conversation.'),
  mission(
    17,
    'prenom',
    'En fin de journée, liste mentalement les prénoms des personnes croisées et un détail sur chacune.',
  ),
  mission(
    18,
    'ecoute',
    'Dans une conversation, ne donne aucune solution. Contente-toi de comprendre.',
  ),
  mission(
    19,
    'reconnaissance',
    "Valorise un effort (pas seulement un résultat) chez quelqu'un aujourd'hui.",
  ),
  mission(
    20,
    'desaccord',
    "Transforme un désaccord en question ouverte qui fait réfléchir l'autre, sans le braquer.",
  ),
  mission(
    21,
    'attention',
    'Dernier jour. Mène une conversation où tu appliques tout : présence, prénom, écoute, reconnaissance.',
    true,
  ),
]

export function missionForDay(day: number): DailyMission | undefined {
  return LE_LIEN_MISSIONS.find((m) => m.day === day)
}

export const LE_LIEN_TOTAL_DAYS = 21
export const LE_LIEN_WITNESS_DAY = 14
