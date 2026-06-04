export const LEVELS = [
  { level: 1, name: 'Automate', minPoints: 0, description: 'Accès basique' },
  { level: 2, name: 'Conscient', minPoints: 200, description: 'Bibliothèque complète' },
  { level: 3, name: 'Exécutant', minPoints: 500, description: 'Défis avancés + stats' },
  { level: 4, name: 'Performer', minPoints: 1000, description: 'Communauté + coaching IA' },
  { level: 5, name: 'APEXER', minPoints: 2500, description: 'Accès complet + prestige' },
] as const

export type Level = (typeof LEVELS)[number]
