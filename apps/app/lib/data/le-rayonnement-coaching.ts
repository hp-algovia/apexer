// Matrice de coaching Le Rayonnement : 5 protocoles × 4 niveaux d'exécution (Q1 : 3/2/1/0).
export const RAYONNEMENT_COACHING: Record<string, Record<number, string>> = {
  'presence-locale': {
    3: "Tu es sorti de ton bureau et tu existes sur ton territoire. C'est exactement ça le rayonnement : être là où les gens sont, avant qu'ils aient besoin de toi.",
    2: 'Tu as bougé, mais pas assez loin. Le rayonnement local demande de la régularité : une présence, pas une apparition.',
    1: "L'intention est là, l'action manque. Demain, un seul objectif : parler à une personne que tu ne connais pas dans un lieu public.",
    0: 'Le rayonnement commence par la présence physique. Ton bureau ne rayonne pas. Demain, sors.',
  },
  prescription: {
    3: "Tu construis ton réseau de prescripteurs. C'est l'actif le plus puissant d'un commercial : des gens qui vendent pour toi sans que tu le demandes.",
    2: "Le contact est pris, la collaboration pas encore. L'étape suivante : proposer quelque chose de concret à ton partenaire avant de lui demander quoi que ce soit.",
    1: "Tu sais qui contacter mais tu ne passes pas à l'action. Un message de 3 lignes suffit. Envoie-le demain matin.",
    0: "Aucun partenaire ne recommande quelqu'un qu'il ne connaît pas. Demain : identifie un nom et envoie un message.",
  },
  contenu: {
    3: "Tu publies et tu existes. Chaque post est une brique de notoriété. L'algorithme récompense la régularité — continue.",
    2: 'Tu as publié mais sans impact fort. Demain, une règle : raconte quelque chose de vécu. Le terrain bat la théorie.',
    1: "Tu as préparé sans publier. La perfection est l'ennemie de la visibilité. Un post moyen publié vaut mieux qu'un post parfait jamais posté.",
    0: "Si tu ne publies pas, tu n'existes pas en ligne. Demain, un post de 3 phrases sur un truc que tu as appris cette semaine. C'est tout.",
  },
  recommandation: {
    3: 'Tu demandes et tu reçois. 86% des tops le font systématiquement. Tu es en train de rejoindre ce groupe.',
    2: 'Tu as demandé sans obtenir de résultat immédiat. Normal — la recommandation est un jeu de volume. Continue à demander, les leads viendront.',
    1: "Tu n'as pas osé. C'est le frein le plus courant. Rappelle-toi : demander une recommandation, c'est faire un compliment — tu dis que ton travail vaut d'être partagé.",
    0: "Pas de demande, pas de recommandation. C'est mécanique. Demain, un seul client, une seule question : « Qui d'autre ? »",
  },
  'image-pro': {
    3: "Ton image est cohérente et professionnelle. Quand quelqu'un te découvre en ligne, il comprend immédiatement ta valeur. C'est un avantage concurrentiel invisible.",
    2: 'Ton image est correcte mais pas mémorable. Le prochain pas : un élément distinctif — une phrase de bio, une bannière, un style de post — qui te rend reconnaissable.',
    1: "Ton image ne travaille pas pour toi. Demain, une seule action : mets à jour la première chose qu'un prospect voit (photo ou bio).",
    0: "Ton image en ligne est invisible ou incohérente. C'est comme arriver à un RDV en pyjama. Demain : 15 minutes sur ton profil principal.",
  },
}
