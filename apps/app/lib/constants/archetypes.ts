import type { Archetype } from '@apexer/db'

export type ArchetypeDefinition = {
  key: Archetype
  name: string
  article: string
  tagline: string
  strength: string
  brake: string
  microActions: [string, string, string]
}

export const ARCHETYPES: Record<Archetype, ArchetypeDefinition> = {
  explorateur: {
    key: 'explorateur',
    name: 'Explorateur',
    article: 'un',
    tagline: 'Tu découvres, tu testes, tu apprends vite.',
    strength:
      'Curiosité et capacité d’adaptation : tu absorbes les nouvelles méthodes plus vite que la moyenne.',
    brake: 'La dispersion : tu commences beaucoup, tu termines peu.',
    microActions: [
      'Choisis UNE seule pratique et tiens-la 7 jours sans exception.',
      'Note chaque soir l’action que tu as menée à terme.',
      'Avant d’ouvrir une nouveauté, termine la tâche en cours.',
    ],
  },
  batisseur: {
    key: 'batisseur',
    name: 'Bâtisseur',
    article: 'un',
    tagline: 'Tu construis méthodiquement, brique par brique.',
    strength: 'La constance structurée : quand tu as un plan, tu l’exécutes.',
    brake: 'La rigidité : un imprévu peut faire dérailler toute ta journée.',
    microActions: [
      'Prévois chaque matin un créneau tampon de 30 minutes pour l’imprévu.',
      'Exécute ta tâche du jour avant 10h, quoi qu’il arrive.',
      'Quand un plan casse, note la version minimale qui sauve la journée.',
    ],
  },
  executant_irregulier: {
    key: 'executant_irregulier',
    name: 'Exécutant Irrégulier',
    article: 'un',
    tagline: 'Capable de tout — par vagues.',
    strength:
      'Une grosse capacité d’exécution quand l’énergie est là : tes pics valent des semaines.',
    brake: 'L’irrégularité : entre deux pics, tout s’arrête.',
    microActions: [
      'Fixe un minimum quotidien ridicule (5 minutes) et tiens-le même les mauvais jours.',
      'Identifie ton heure de pic d’énergie et bloque-la pour l’action clé.',
      'Ne casse jamais la chaîne deux jours de suite.',
    ],
  },
  apexer_confirme: {
    key: 'apexer_confirme',
    name: 'APEXER Confirmé',
    article: 'un',
    tagline: 'La discipline est déjà là. Place à l’amplitude.',
    strength: 'Régularité et exigence : tu fais déjà ce que les autres remettent à demain.',
    brake: 'Le plafond de verre : tu optimises l’existant au lieu d’attaquer plus haut.',
    microActions: [
      'Ajoute chaque semaine une action qui te met réellement mal à l’aise.',
      'Mesure un indicateur de résultat (pas d’activité) chaque vendredi.',
      'Transmets une pratique à quelqu’un : enseigner force la maîtrise.',
    ],
  },
}
