import type { UserContext } from '@apexer/db'

export type ContextDefinition = {
  key: UserContext
  label: string
  emoji: string
}

// E-03 — « Tu utilises APEXER pour ? »
export const CONTEXTS: ContextDefinition[] = [
  { key: 'performance_commerciale', label: 'Performance commerciale', emoji: '📈' },
  { key: 'discipline_personnelle', label: 'Discipline personnelle', emoji: '⚒️' },
  { key: 'formation_accompagnement', label: 'Formation & accompagnement', emoji: '🎓' },
  { key: 'immobilier_patrimoine', label: 'Immobilier & patrimoine', emoji: '🏠' },
  { key: 'management_equipe', label: 'Management d’équipe', emoji: '👥' },
  { key: 'objectif_libre', label: 'Objectif libre', emoji: '🎯' },
]

// E-04 — Modèles d'objectifs 30 jours par contexte
export const OBJECTIVE_TEMPLATES: Record<UserContext, string[]> = {
  performance_commerciale: [
    'Décrocher 5 nouveaux clients',
    'Doubler mon volume de prospection',
    'Conclure mes 3 deals en attente',
  ],
  discipline_personnelle: [
    'Tenir une routine matinale 30 jours',
    'Exécuter ma tâche clé avant 10h chaque jour',
    'Zéro journée sans action vers mon objectif',
  ],
  formation_accompagnement: [
    'Signer 3 nouveaux clients en accompagnement',
    'Construire et vendre ma première offre',
    'Animer 4 sessions de formation',
  ],
  immobilier_patrimoine: [
    'Rentrer 5 mandats',
    'Faire 100 appels de prospection',
    'Conclure 2 ventes',
  ],
  management_equipe: [
    'Faire un 1:1 par semaine avec chaque membre',
    'Mettre mon équipe en rythme quotidien',
    'Déléguer 3 responsabilités clés',
  ],
  objectif_libre: [],
}
