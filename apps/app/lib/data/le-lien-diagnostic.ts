export type DiagnosticOption = {
  label: string
  value: number // 0-3
}

export type StageDiagnosticQuestion = {
  id: string
  protocolId: string
  text: string
  options: DiagnosticOption[]
}

// Scoring : A=3, B=2, C=1, D=0. Score protocole = somme des 3 / 9 × 100.
export const LE_LIEN_DIAGNOSTIC: StageDiagnosticQuestion[] = [
  // === ATTENTION RÉELLE ===
  {
    id: 'diag-att-1',
    protocolId: 'attention',
    text: "En face d'un nouveau contact professionnel, tu as tendance à :",
    options: [
      { label: 'Poser une ou deux questions sur lui avant de parler de toi', value: 3 },
      { label: 'Présenter rapidement ce que tu fais', value: 2 },
      { label: "Attendre qu'il lance la conversation", value: 1 },
      { label: 'Parler surtout de ton objectif ou de ton besoin', value: 0 },
    ],
  },
  {
    id: 'diag-att-2',
    protocolId: 'attention',
    text: "Quand quelqu'un te parle de son week-end ou de ses projets perso :",
    options: [
      { label: 'Tu poses une question de suivi sincère', value: 3 },
      { label: 'Tu écoutes poliment puis tu enchaînes', value: 2 },
      { label: "Tu ramènes vite à un sujet qui t'intéresse", value: 1 },
      { label: 'Tu décroches mentalement', value: 0 },
    ],
  },
  {
    id: 'diag-att-3',
    protocolId: 'attention',
    text: "En réunion, quand quelqu'un que tu connais peu prend la parole :",
    options: [
      { label: "Tu le regardes et tu écoutes jusqu'au bout", value: 3 },
      { label: 'Tu écoutes en faisant autre chose en parallèle', value: 2 },
      { label: 'Tu attends ton tour pour intervenir', value: 1 },
      { label: 'Tu consultes ton téléphone ou tes notes', value: 0 },
    ],
  },
  // === PRÉNOM ===
  {
    id: 'diag-pre-1',
    protocolId: 'prenom',
    text: "Quand quelqu'un te donne son prénom :",
    options: [
      { label: 'Tu le retiens et tu le réutilises naturellement', value: 3 },
      { label: "Tu le retiens parfois, mais tu l'oublies vite", value: 2 },
      { label: "Tu évites de l'utiliser par peur de te tromper", value: 1 },
      { label: "Tu n'y fais pas vraiment attention", value: 0 },
    ],
  },
  {
    id: 'diag-pre-2',
    protocolId: 'prenom',
    text: 'Quand tu recroises une personne rencontrée récemment :',
    options: [
      { label: "Tu l'appelles par son prénom directement", value: 3 },
      { label: 'Tu la salues sans utiliser son prénom', value: 2 },
      { label: 'Tu hésites et tu contournes', value: 1 },
      { label: 'Tu as oublié son prénom', value: 0 },
    ],
  },
  {
    id: 'diag-pre-3',
    protocolId: 'prenom',
    text: 'Après une journée avec plusieurs nouveaux contacts :',
    options: [
      { label: "Tu te souviens de la plupart des prénoms et d'un détail sur chacun", value: 3 },
      { label: 'Tu te souviens de quelques prénoms', value: 2 },
      { label: 'Tu retiens les visages mais pas les prénoms', value: 1 },
      { label: 'Tout se mélange assez vite', value: 0 },
    ],
  },
  // === ÉCOUTE ACTIVE ===
  {
    id: 'diag-eco-1',
    protocolId: 'ecoute',
    text: 'Dans une conversation importante, tu fais quoi le plus souvent ?',
    options: [
      { label: "Tu écoutes jusqu'au bout avant de répondre", value: 3 },
      { label: 'Tu écoutes, mais tu prépares déjà ta réponse', value: 2 },
      { label: 'Tu coupes parfois pour corriger ou préciser', value: 1 },
      { label: 'Tu reprends vite la main pour défendre ton point', value: 0 },
    ],
  },
  {
    id: 'diag-eco-2',
    protocolId: 'ecoute',
    text: "Quand quelqu'un exprime une idée que tu ne partages pas :",
    options: [
      { label: "Tu reformules ce qu'il dit pour vérifier que tu as bien compris", value: 3 },
      { label: "Tu attends qu'il finisse puis tu donnes ton avis", value: 2 },
      { label: "Tu signales ton désaccord pendant qu'il parle", value: 1 },
      { label: "Tu l'interromps pour corriger", value: 0 },
    ],
  },
  {
    id: 'diag-eco-3',
    protocolId: 'ecoute',
    text: 'Quand un collègue te raconte un problème complexe :',
    options: [
      { label: 'Tu poses des questions pour bien comprendre avant de réagir', value: 3 },
      { label: 'Tu écoutes puis tu proposes rapidement une solution', value: 2 },
      { label: 'Tu compares avec ta propre expérience', value: 1 },
      { label: 'Tu donnes ton avis assez vite pour gagner du temps', value: 0 },
    ],
  },
  // === RECONNAISSANCE PRÉCISE ===
  {
    id: 'diag-rec-1',
    protocolId: 'reconnaissance',
    text: "Quand quelqu'un fait quelque chose de bien :",
    options: [
      { label: 'Tu valorises précisément ce qui a été bien fait', value: 3 },
      { label: 'Tu dis simplement "bien joué" ou "merci"', value: 2 },
      { label: 'Tu le remarques, mais tu ne le dis pas toujours', value: 1 },
      { label: "Tu considères que c'est normal, donc tu ne le soulignes pas", value: 0 },
    ],
  },
  {
    id: 'diag-rec-2',
    protocolId: 'reconnaissance',
    text: "En équipe, quand un projet avance grâce à quelqu'un en particulier :",
    options: [
      { label: 'Tu le nommes et tu décris sa contribution spécifique', value: 3 },
      { label: "Tu félicites l'équipe dans son ensemble", value: 2 },
      { label: "Tu passes à la suite sans t'arrêter dessus", value: 1 },
      { label: 'Tu te concentres sur ce qui reste à faire', value: 0 },
    ],
  },
  {
    id: 'diag-rec-3',
    protocolId: 'reconnaissance',
    text: 'Quand tu reçois un bon service (restaurant, magasin, prestataire) :',
    options: [
      { label: 'Tu dis précisément ce que tu as apprécié', value: 3 },
      { label: 'Tu remercies chaleureusement', value: 2 },
      { label: 'Tu remercies rapidement', value: 1 },
      { label: 'Tu ne dis rien de particulier', value: 0 },
    ],
  },
  // === DÉSACCORD MAÎTRISÉ ===
  {
    id: 'diag-des-1',
    protocolId: 'desaccord',
    text: "Quand tu n'es pas d'accord avec quelqu'un :",
    options: [
      { label: "Tu cherches d'abord un point d'accord avant de nuancer", value: 3 },
      { label: 'Tu expliques calmement ton désaccord', value: 2 },
      { label: 'Tu corriges rapidement ce qui te semble faux', value: 1 },
      { label: 'Tu peux devenir frontal si tu penses avoir raison', value: 0 },
    ],
  },
  {
    id: 'diag-des-2',
    protocolId: 'desaccord',
    text: "Quand quelqu'un dit quelque chose de factuellement faux :",
    options: [
      { label: "Tu poses une question qui l'amène à reconsidérer", value: 3 },
      { label: 'Tu corriges avec tact', value: 2 },
      { label: 'Tu corriges directement', value: 1 },
      { label: 'Tu dis "non, c\'est faux" et tu expliques', value: 0 },
    ],
  },
  {
    id: 'diag-des-3',
    protocolId: 'desaccord',
    text: "Après un échange tendu avec quelqu'un :",
    options: [
      { label: 'Tu cherches à rétablir le lien rapidement', value: 3 },
      { label: 'Tu laisses passer puis tu reviens normalement', value: 2 },
      { label: 'Tu restes sur ta position en attendant que ça passe', value: 1 },
      { label: 'Tu coupes le contact un moment', value: 0 },
    ],
  },
]

// Questions qualitatives (hors scoring — orientent le profil)
export const LE_LIEN_QUALITATIVE = [
  {
    id: 'qual-1',
    text: 'Où ton écoute décroche le plus ?',
    options: [
      'Avec les clients',
      'Avec les collègues ou associés',
      'En famille ou en couple',
      'Avec les inconnus',
      'Quand je suis stressé',
    ],
  },
  {
    id: 'qual-2',
    text: 'Quand cherches-tu le plus souvent à avoir raison ?',
    options: [
      'Quand je me sens attaqué',
      "Quand l'autre dit quelque chose de faux",
      "Quand l'enjeu est important",
      'Quand je veux prouver ma compétence',
      'Quand je suis fatigué ou sous pression',
    ],
  },
  {
    id: 'qual-3',
    text: 'Quelle habitude dois-tu corriger en priorité ?',
    options: [
      'Couper la parole',
      'Trop parler de moi',
      'Oublier les prénoms ou les détails',
      'Ne pas assez valoriser les autres',
      'Réagir trop frontalement aux désaccords',
    ],
  },
]
