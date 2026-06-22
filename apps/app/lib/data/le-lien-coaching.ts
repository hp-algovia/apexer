// Matrice de coaching : 5 protocoles × 4 niveaux d'exécution (valeur Q1 : 3/2/1/0).
export const COACHING_MESSAGES: Record<string, Record<number, string>> = {
  attention: {
    3: "Tu as créé un espace pour l'autre. C'est exactement ça : l'influence commence quand tu arrêtes de prendre toute la place.",
    2: 'Tu étais présent, mais pas complètement. Demain, donne-toi un objectif simple : une question sincère avant toute chose.',
    1: "Tu es retombé dans le réflexe de parler de toi d'abord. Normal — c'est le mode par défaut. Demain, ralentis juste les 30 premières secondes.",
    0: "Pas d'occasion ou pas d'attention — dans les deux cas, demain, crée l'occasion. Un échange de 2 minutes suffit.",
  },
  prenom: {
    3: "Le prénom est entré dans ta pratique. C'est un signal fort de considération que tu envoies sans effort.",
    2: "Tu y penses, c'est déjà une victoire. L'étape suivante : associer le prénom à un détail. C'est ce qui ancre le souvenir.",
    1: "Le prénom est encore un effort conscient. Astuce : répète-le une fois dans ta tête immédiatement quand tu l'entends.",
    0: "Le prénom est la porte d'entrée la plus simple dans l'attention de quelqu'un. Demain, un seul objectif : retenir un prénom.",
  },
  ecoute: {
    3: "Tu as écouté vraiment. Pas attendu ton tour — écouté. C'est rare, et les gens le sentent.",
    2: "Écouter à moitié, c'est comme être à moitié là. L'autre le perçoit. Demain : ne prépare pas ta réponse tant qu'il parle.",
    1: 'Tu as repris le contrôle trop vite. Demain, impose-toi une règle : une question avant chaque affirmation.',
    0: "Sans écoute, pas de lien. Demain, ton objectif n'est pas d'être brillant. Ton objectif est de comprendre une chose que tu ne savais pas.",
  },
  reconnaissance: {
    3: "Tu as nommé précisément ce que tu appréciais. C'est la différence entre un compliment vide et une reconnaissance qui marque.",
    2: "Tu as reconnu, mais sans précision. 'Bien joué' est mieux que rien, mais 'ta relance sur le point X a débloqué la situation' change tout.",
    1: "Tu as vu sans dire. La reconnaissance non exprimée n'existe pas pour l'autre. Demain, dis ce que tu observes.",
    0: "La reconnaissance n'est pas un luxe. C'est un outil d'influence. Demain : nommer une qualité précise chez quelqu'un.",
  },
  desaccord: {
    3: "Tu as transformé un potentiel conflit en échange. C'est la compétence la plus rare et la plus puissante.",
    2: "Tu as nuancé au lieu de foncer. C'est déjà mieux que le réflexe frontal. L'étape suivante : commencer par l'accord avant la nuance.",
    1: "Le réflexe de correction est fort. Mais avoir raison et perdre la relation, ce n'est pas gagner.",
    0: 'Pas de situation ou pas de tentative. Demain, si un désaccord apparaît, remplace ta première réaction par une question.',
  },
}

/** Message de coaching pour un protocole et un niveau d'exécution (0-3). */
export function getCoachingMessage(protocolId: string, executionValue: number): string {
  return (
    COACHING_MESSAGES[protocolId]?.[executionValue] ??
    'Chaque jour compte. Reviens demain et recommence.'
  )
}
