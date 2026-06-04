import type { Archetype } from '@apexer/db'

export type DiagnosticOption = {
  value: string
  label: string
  archetype: Archetype
}

export type DiagnosticQuestion = {
  key: string
  question: string
  options: DiagnosticOption[]
}

// E-05 — Diagnostic flash : 5 questions, chaque réponse pèse pour un archétype.
export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    key: 'q1_routine',
    question: 'Ta relation aux routines, honnêtement ?',
    options: [
      { value: 'teste_tout', label: 'J’en teste plein, j’en garde peu', archetype: 'explorateur' },
      { value: 'plan_carre', label: 'J’ai un plan carré et je m’y tiens', archetype: 'batisseur' },
      {
        value: 'par_vagues',
        label: 'Par périodes : à fond, puis plus rien',
        archetype: 'executant_irregulier',
      },
      {
        value: 'ancrees',
        label: 'Mes routines tiennent depuis des années',
        archetype: 'apexer_confirme',
      },
    ],
  },
  {
    key: 'q2_objectif_rate',
    question: 'Quand tu rates un objectif, c’est le plus souvent parce que…',
    options: [
      {
        value: 'autre_chose',
        label: 'Autre chose de plus excitant est arrivé',
        archetype: 'explorateur',
      },
      { value: 'imprevu', label: 'Un imprévu a cassé mon organisation', archetype: 'batisseur' },
      {
        value: 'motivation',
        label: 'La motivation est retombée en route',
        archetype: 'executant_irregulier',
      },
      {
        value: 'trop_bas',
        label: 'Je le rate rarement — il était trop bas',
        archetype: 'apexer_confirme',
      },
    ],
  },
  {
    key: 'q3_matin',
    question: 'Ton premier réflexe un lundi matin chargé ?',
    options: [
      {
        value: 'nouveau',
        label: 'Regarder ce qu’il y a de nouveau à essayer',
        archetype: 'explorateur',
      },
      { value: 'liste', label: 'Dérouler ma liste préparée la veille', archetype: 'batisseur' },
      {
        value: 'urgent',
        label: 'Attaquer ce qui crie le plus fort',
        archetype: 'executant_irregulier',
      },
      {
        value: 'cle',
        label: 'Exécuter l’action à plus fort impact, déjà identifiée',
        archetype: 'apexer_confirme',
      },
    ],
  },
  {
    key: 'q4_suivi',
    question: 'Tu mesures tes résultats comment ?',
    options: [
      { value: 'ressenti', label: 'Au ressenti — je sais où j’en suis', archetype: 'explorateur' },
      { value: 'outils', label: 'Tableaux et outils de suivi à jour', archetype: 'batisseur' },
      {
        value: 'rarement',
        label: 'Rarement — je préfère avancer',
        archetype: 'executant_irregulier',
      },
      {
        value: 'kpi',
        label: 'Des indicateurs précis, revus chaque semaine',
        archetype: 'apexer_confirme',
      },
    ],
  },
  {
    key: 'q5_30jours',
    question: 'Sur tes 30 derniers jours, tu as agi vers ton objectif…',
    options: [
      { value: 'disperse', label: 'Souvent, mais sur trop de fronts', archetype: 'explorateur' },
      {
        value: 'regulier_cadre',
        label: 'Régulièrement, tant que le cadre tenait',
        archetype: 'batisseur',
      },
      {
        value: 'sprints',
        label: 'Quelques sprints intenses, de longs creux',
        archetype: 'executant_irregulier',
      },
      {
        value: 'quotidien',
        label: 'Quasi quotidiennement, sans exception',
        archetype: 'apexer_confirme',
      },
    ],
  },
]
