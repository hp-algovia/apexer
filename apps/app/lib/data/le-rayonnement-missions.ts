import type { DailyMission } from './le-lien-missions'

// Répartition : présence-locale (1,6,10,15,19), prescription (2,8,12,17),
// contenu (3,7,11,14,18), recommandation (4,9,13,16,20), image-pro (5),
// jour 21 = bilan final.
export const LE_RAYONNEMENT_MISSIONS: DailyMission[] = [
  {
    day: 1,
    protocolId: 'presence-locale',
    mission:
      'Identifier 3 lieux ou groupes locaux où tes futurs clients ou partenaires se trouvent déjà.',
    validation: [
      {
        text: 'As-tu identifié ces 3 lieux ou groupes ?',
        options: [
          { label: 'Oui, 3 lieux précis avec un plan pour y aller', value: 3 },
          { label: '2 lieux identifiés', value: 2 },
          { label: '1 seul, vaguement', value: 1 },
          { label: "Non, je n'ai pas cherché", value: 0 },
        ],
      },
      {
        text: 'En les listant, tu as réalisé :',
        options: [
          { label: "Que j'ai des opportunités sous le nez que je n'exploite pas", value: 3 },
          { label: "Que j'en fais déjà un peu sans le structurer", value: 2 },
          { label: 'Que je ne connais pas bien mon territoire', value: 1 },
          { label: 'Rien de particulier', value: 0 },
        ],
      },
    ],
  },
  {
    day: 2,
    protocolId: 'prescription',
    mission:
      'Lister 5 professionnels complémentaires à ton activité que tu pourrais contacter cette semaine.',
    validation: [
      {
        text: 'Combien de noms as-tu listés ?',
        options: [
          { label: '5 ou plus, avec une raison de les contacter', value: 3 },
          { label: '3-4 noms', value: 2 },
          { label: '1-2 noms', value: 1 },
          { label: "Je n'ai pas fait l'exercice", value: 0 },
        ],
      },
      {
        text: 'Pour chacun, tu sais ce que tu pourrais leur apporter ?',
        options: [
          { label: 'Oui, une idée précise de valeur à offrir', value: 3 },
          { label: 'Pour certains oui', value: 2 },
          { label: "Pas vraiment — je pense surtout à ce qu'ils m'apporteraient", value: 1 },
          { label: "Je n'y ai pas réfléchi", value: 0 },
        ],
      },
    ],
  },
  {
    day: 3,
    protocolId: 'contenu',
    mission:
      'Publier un post utile sur LinkedIn ou ton réseau principal. Pas une offre — un conseil, un retour terrain, une observation.',
    validation: [
      {
        text: 'As-tu publié ?',
        options: [
          { label: 'Oui, un contenu utile pour mon audience', value: 3 },
          { label: "Oui, mais c'était plus perso que pro", value: 2 },
          { label: "J'ai rédigé mais pas publié", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Les réactions :',
        options: [
          { label: 'Des likes/commentaires, dont des contacts utiles', value: 3 },
          { label: 'Quelques likes', value: 2 },
          { label: 'Pas encore de réaction', value: 1 },
          { label: "Je n'ai pas publié", value: 0 },
        ],
      },
    ],
  },
  {
    day: 4,
    protocolId: 'recommandation',
    mission:
      'Recontacter un ancien client satisfait et lui demander : « Qui dans ton entourage pourrait avoir besoin de mes services ? »',
    validation: [
      {
        text: 'As-tu fait cette demande ?',
        options: [
          { label: "Oui, et j'ai obtenu un nom", value: 3 },
          { label: 'Oui, la personne va y réfléchir', value: 2 },
          { label: "J'ai contacté mais sans oser demander", value: 1 },
          { label: "Non, je n'ai pas contacté", value: 0 },
        ],
      },
      {
        text: "La réaction de l'ancien client :",
        options: [
          { label: "Content d'être recontacté, ouvert à recommander", value: 3 },
          { label: 'Cordial mais pas engagé', value: 2 },
          { label: 'Surpris', value: 1 },
          { label: "Je n'ai pas contacté", value: 0 },
        ],
      },
    ],
  },
  {
    day: 5,
    protocolId: 'image-pro',
    mission:
      "Regarde ton profil LinkedIn (ou réseau principal) comme si c'était la première fois. Est-ce que ça dit clairement qui tu es et pourquoi on devrait te faire confiance ?",
    validation: [
      {
        text: 'Après avoir regardé ton profil :',
        options: [
          { label: "J'ai identifié 2-3 améliorations concrètes et j'en ai fait une", value: 3 },
          { label: "J'ai identifié des améliorations sans agir encore", value: 2 },
          { label: 'Mon profil est correct, rien à changer', value: 1 },
          { label: "Je n'ai pas pris le temps de regarder", value: 0 },
        ],
      },
      {
        text: 'Si un prospect te découvrait aujourd’hui via ton profil :',
        options: [
          { label: 'Il comprendrait mon expertise et ma valeur en 10 secondes', value: 3 },
          { label: 'Il verrait un pro correct mais pas marquant', value: 2 },
          { label: 'Il ne comprendrait pas bien ce que je fais', value: 1 },
          { label: "Il ne trouverait rien d'intéressant", value: 0 },
        ],
      },
    ],
  },
  {
    day: 6,
    protocolId: 'presence-locale',
    mission:
      'Participer à un événement local (petit-déj pro, afterwork, réunion associative) ou prendre rendez-vous pour y aller cette semaine.',
    validation: [
      {
        text: 'As-tu participé ou pris rendez-vous ?',
        options: [
          { label: "J'y suis allé et j'ai parlé à au moins 3 personnes", value: 3 },
          { label: "J'ai pris rendez-vous pour y aller bientôt", value: 2 },
          { label: "J'ai cherché des événements sans m'inscrire", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: "L'effet sur ta visibilité :",
        options: [
          { label: "J'ai rencontré des gens qui ne me connaissaient pas", value: 3 },
          { label: "J'ai renforcé des liens existants", value: 2 },
          { label: "Pas encore d'effet visible", value: 1 },
          { label: "Je n'y suis pas allé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 7,
    protocolId: 'contenu',
    mission:
      'Commenter de manière pertinente 3 posts de contacts professionnels. Pas juste « bravo » — un vrai point de vue.',
    validation: [
      {
        text: 'Combien de commentaires pertinents as-tu laissés ?',
        options: [
          { label: '3 ou plus, avec un vrai apport', value: 3 },
          { label: '1-2 commentaires développés', value: 2 },
          { label: "J'ai liké sans commenter", value: 1 },
          { label: "Je n'ai rien fait", value: 0 },
        ],
      },
      {
        text: 'Les réactions à tes commentaires :',
        options: [
          { label: "L'auteur m'a répondu ou remercié", value: 3 },
          { label: 'Mon commentaire a reçu des likes', value: 2 },
          { label: 'Pas de réaction visible', value: 1 },
          { label: "Je n'ai pas commenté", value: 0 },
        ],
      },
    ],
  },
  {
    day: 8,
    protocolId: 'prescription',
    mission:
      'Contacter un des professionnels de ta liste (jour 2) pour proposer un café ou un déjeuner. Objectif : explorer une collaboration, pas vendre.',
    validation: [
      {
        text: 'As-tu contacté quelqu’un ?',
        options: [
          { label: 'Oui, rendez-vous fixé', value: 3 },
          { label: 'Oui, en attente de réponse', value: 2 },
          { label: "J'ai préparé le message sans l'envoyer", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Ton approche était :',
        options: [
          { label: "Orientée valeur : j'ai proposé quelque chose d'utile pour lui", value: 3 },
          { label: 'Cordiale et ouverte', value: 2 },
          { label: 'Plutôt centrée sur mon besoin', value: 1 },
          { label: "Je n'ai pas contacté", value: 0 },
        ],
      },
    ],
  },
  {
    day: 9,
    protocolId: 'recommandation',
    mission:
      "Demander un témoignage écrit à un client satisfait. Un message simple : « Ton retour m'aiderait beaucoup — 2 phrases suffisent. »",
    validation: [
      {
        text: 'As-tu demandé un témoignage ?',
        options: [
          { label: "Oui, et je l'ai reçu", value: 3 },
          { label: 'Oui, en attente', value: 2 },
          { label: "J'ai voulu mais je n'ai pas osé", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'La réaction du client :',
        options: [
          { label: 'Ravi de le faire — il a trouvé ça normal', value: 3 },
          { label: 'OK mais il faut que je le relance', value: 2 },
          { label: 'Surpris par la demande', value: 1 },
          { label: "Je n'ai pas demandé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 10,
    protocolId: 'presence-locale',
    mission:
      "Aller dans un lieu stratégique de ton territoire (café, coworking, commerce local) et engager une conversation avec quelqu'un que tu ne connais pas.",
    validation: [
      {
        text: 'As-tu engagé une conversation avec un inconnu ?',
        options: [
          { label: 'Oui, et on a échangé nos coordonnées', value: 3 },
          { label: 'Oui, une conversation agréable sans suite', value: 2 },
          { label: "J'y suis allé sans oser parler", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Ton ressenti :',
        options: [
          { label: "Naturel — c'est devenu facile", value: 3 },
          { label: 'Correct — un peu forcé mais ça passe', value: 2 },
          { label: 'Inconfortable', value: 1 },
          { label: "Je n'ai pas essayé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 11,
    protocolId: 'contenu',
    mission:
      'Publier un post qui raconte une anecdote terrain : un cas client (anonymisé), une leçon apprise, un moment marquant de ta semaine pro.',
    validation: [
      {
        text: 'As-tu publié ce storytelling terrain ?',
        options: [
          { label: 'Oui, une histoire vraie et utile', value: 3 },
          { label: "Oui, mais c'était plus théorique que vécu", value: 2 },
          { label: "J'ai commencé à écrire sans publier", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: "L'engagement comparé à tes posts habituels :",
        options: [
          { label: 'Meilleur — le storytelling fonctionne', value: 3 },
          { label: 'Similaire', value: 2 },
          { label: 'Moins bon', value: 1 },
          { label: "Je n'ai pas publié", value: 0 },
        ],
      },
    ],
  },
  {
    day: 12,
    protocolId: 'prescription',
    mission:
      "Recommander activement un partenaire à quelqu'un aujourd'hui. Donner avant de recevoir.",
    validation: [
      {
        text: 'As-tu recommandé un partenaire ?',
        options: [
          { label: "Oui, j'ai mis deux personnes en relation", value: 3 },
          { label: "Oui, j'ai mentionné un partenaire dans une conversation", value: 2 },
          { label: "J'y ai pensé sans le faire", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'La réaction de la personne qui a reçu la recommandation :',
        options: [
          { label: 'Reconnaissante — ça renforce le lien', value: 3 },
          { label: 'Contente sans plus', value: 2 },
          { label: 'Indifférente', value: 1 },
          { label: "Je n'ai pas recommandé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 13,
    protocolId: 'recommandation',
    mission:
      "Recontacter un client d'il y a 6+ mois juste pour prendre des nouvelles. Pas de demande — juste du lien. La recommandation viendra naturellement.",
    validation: [
      {
        text: 'As-tu recontacté un ancien client ?',
        options: [
          { label: "Oui, échange chaleureux — il m'a parlé d'un contact potentiel", value: 3 },
          { label: 'Oui, échange agréable sans lead', value: 2 },
          { label: "J'ai hésité et je n'ai pas appelé", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: "L'ancien client a semblé :",
        options: [
          { label: "Agréablement surpris et content de l'attention", value: 3 },
          { label: 'Cordial', value: 2 },
          { label: 'Un peu surpris', value: 1 },
          { label: "Je n'ai pas appelé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 14,
    protocolId: 'contenu',
    mission:
      'Publier un post avec une prise de position sur ton secteur. Un avis tranché, argumenté. Pas un post tiède.',
    validation: [
      {
        text: 'As-tu publié une prise de position ?',
        options: [
          { label: 'Oui, un vrai point de vue assumé', value: 3 },
          { label: "Oui, mais j'ai adouci pour ne froisser personne", value: 2 },
          { label: "J'ai écrit sans oser publier", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: "L'effet :",
        options: [
          { label: "Plus de réactions que d'habitude — le parti pris polarise", value: 3 },
          { label: 'Réactions normales', value: 2 },
          { label: 'Moins de réactions — le sujet était trop pointu', value: 1 },
          { label: "Je n'ai pas publié", value: 0 },
        ],
      },
    ],
  },
  {
    day: 15,
    protocolId: 'presence-locale',
    mission:
      "Organiser ou proposer d'organiser un petit événement : un café ouvert, un afterwork, une rencontre informelle avec 5-10 personnes.",
    validation: [
      {
        text: "As-tu lancé l'initiative ?",
        options: [
          { label: 'Oui, date fixée et invitations envoyées', value: 3 },
          { label: "J'ai proposé l'idée à quelques personnes", value: 2 },
          { label: "J'y ai pensé sans passer à l'action", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Les retours :',
        options: [
          { label: 'Enthousiasme — les gens veulent venir', value: 3 },
          { label: 'Intérêt poli', value: 2 },
          { label: 'Pas de retour encore', value: 1 },
          { label: "Je n'ai rien proposé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 16,
    protocolId: 'recommandation',
    mission:
      "Après ta prochaine interaction positive avec un client ou contact, poser la question : « Est-ce que tu connais quelqu'un qui pourrait avoir besoin de ça ? »",
    validation: [
      {
        text: 'As-tu posé la question ?',
        options: [
          { label: 'Oui, naturellement en fin de conversation', value: 3 },
          { label: "Oui, mais c'était un peu forcé", value: 2 },
          { label: "L'occasion s'est présentée mais je n'ai pas osé", value: 1 },
          { label: "Pas d'occasion aujourd'hui", value: 0 },
        ],
      },
      {
        text: 'Le résultat :',
        options: [
          { label: 'Un nom ou un contact donné', value: 3 },
          { label: '« Je vais y réfléchir »', value: 2 },
          { label: 'Pas de réponse concrète', value: 1 },
          { label: "Je n'ai pas demandé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 17,
    protocolId: 'prescription',
    mission:
      "Faire un point avec un partenaire existant : comment on peut s'envoyer plus de leads mutuellement ? Un message ou un appel de 5 minutes.",
    validation: [
      {
        text: 'As-tu fait ce point avec un partenaire ?',
        options: [
          { label: 'Oui, on a défini une action concrète', value: 3 },
          { label: 'Oui, échange cordial sans plan précis', value: 2 },
          { label: "J'ai envoyé un message sans réponse encore", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Le partenaire a semblé :',
        options: [
          { label: 'Motivé à structurer la collaboration', value: 3 },
          { label: 'Ouvert sans urgence', value: 2 },
          { label: 'Peu réactif', value: 1 },
          { label: "Je n'ai pas contacté", value: 0 },
        ],
      },
    ],
  },
  {
    day: 18,
    protocolId: 'contenu',
    mission:
      "Créer un contenu en format différent de d'habitude : une vidéo courte, un carrousel, un sondage. Sortir de ta zone de confort.",
    validation: [
      {
        text: 'As-tu essayé un nouveau format ?',
        options: [
          { label: "Oui, et je l'ai publié", value: 3 },
          { label: "Oui, mais j'ai gardé mon format habituel au final", value: 2 },
          { label: "J'ai réfléchi au format sans produire", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'Comparé à ton format habituel :',
        options: [
          { label: "Plus d'engagement — le changement a surpris", value: 3 },
          { label: 'Résultat similaire', value: 2 },
          { label: "Moins bon mais l'exercice était utile", value: 1 },
          { label: "Je n'ai rien publié", value: 0 },
        ],
      },
    ],
  },
  {
    day: 19,
    protocolId: 'presence-locale',
    mission:
      'Proposer ton aide à une association ou un événement local — pas en tant que sponsor, en tant que contributeur utile.',
    validation: [
      {
        text: 'As-tu proposé ton aide ?',
        options: [
          { label: 'Oui, et ma proposition a été acceptée', value: 3 },
          { label: 'Oui, en attente de retour', value: 2 },
          { label: "J'ai identifié où aider sans proposer", value: 1 },
          { label: 'Non', value: 0 },
        ],
      },
      {
        text: 'En faisant ça, tu as ressenti :',
        options: [
          { label: "De la satisfaction — c'est comme ça que je veux être visible", value: 3 },
          { label: "C'est intéressant mais demande du temps", value: 2 },
          { label: "Pas convaincu de l'utilité", value: 1 },
          { label: "Je n'ai rien proposé", value: 0 },
        ],
      },
    ],
  },
  {
    day: 20,
    protocolId: 'recommandation',
    mission:
      'Faire le bilan : combien de recommandations as-tu demandées ces 20 jours ? Combien reçues ? Fixer un objectif mensuel.',
    validation: [
      {
        text: 'Ton bilan recommandations sur les 20 derniers jours :',
        options: [
          { label: '3+ recommandations demandées, au moins 1 lead reçu', value: 3 },
          { label: '1-2 recommandations demandées', value: 2 },
          { label: "J'ai demandé mais sans résultat concret", value: 1 },
          { label: "Je n'ai pas mesuré", value: 0 },
        ],
      },
      {
        text: 'Ton objectif mensuel de recommandations demandées :',
        options: [
          { label: 'Fixé et réaliste — je sais quand et à qui demander', value: 3 },
          { label: "J'ai un chiffre en tête sans plan précis", value: 2 },
          { label: 'Je ne sais pas quel objectif me fixer', value: 1 },
          { label: "Je n'y ai pas réfléchi", value: 0 },
        ],
      },
    ],
  },
  {
    day: 21,
    protocolId: 'integration',
    mission: 'Faire le bilan final de ton étape Rayonnement.',
    final: true,
    validation: [
      {
        text: 'Quel protocole a le plus changé ta pratique ?',
        options: [
          { label: 'Présence locale', value: 'presence-locale' },
          { label: 'Réseau de prescription', value: 'prescription' },
          { label: 'Contenu régulier', value: 'contenu' },
          { label: 'Recommandation demandée', value: 'recommandation' },
          { label: 'Image professionnelle', value: 'image-pro' },
        ],
      },
      {
        text: 'Quel protocole reste le plus difficile ?',
        options: [
          { label: 'Présence locale', value: 'presence-locale' },
          { label: 'Réseau de prescription', value: 'prescription' },
          { label: 'Contenu régulier', value: 'contenu' },
          { label: 'Recommandation demandée', value: 'recommandation' },
          { label: 'Image professionnelle', value: 'image-pro' },
        ],
      },
    ],
  },
]
