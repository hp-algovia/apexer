import type { StageDiagnosticQuestion } from './le-lien-diagnostic'

// Même scoring que Le Lien : A=3, B=2, C=1, D=0.
export const LE_RAYONNEMENT_DIAGNOSTIC: StageDiagnosticQuestion[] = [
  // === PRÉSENCE LOCALE ===
  {
    id: 'diag-loc-1',
    protocolId: 'presence-locale',
    text: "En dehors du travail, tu es impliqué dans combien d'associations ou groupes locaux ?",
    options: [
      { label: '2-3 où je suis reconnu et actif', value: 3 },
      { label: '1 où je participe régulièrement', value: 2 },
      { label: "J'y vais de temps en temps", value: 1 },
      { label: 'Aucune implication locale', value: 0 },
    ],
  },
  {
    id: 'diag-loc-2',
    protocolId: 'presence-locale',
    text: 'Quand il y a un événement professionnel ou local dans ta ville :',
    options: [
      { label: "J'y vais, je parle aux gens, je me rends visible", value: 3 },
      { label: "J'y vais parfois si le sujet m'intéresse", value: 2 },
      { label: "J'y pense mais je n'y vais pas souvent", value: 1 },
      { label: "Ce n'est pas mon truc", value: 0 },
    ],
  },
  {
    id: 'diag-loc-3',
    protocolId: 'presence-locale',
    text: 'Si on demandait aux commerçants et pros de ton quartier qui tu es :',
    options: [
      { label: 'La plupart me connaissent et savent ce que je fais', value: 3 },
      { label: 'Quelques-uns me reconnaissent', value: 2 },
      { label: "Très peu savent que j'existe", value: 1 },
      { label: 'Personne ou presque', value: 0 },
    ],
  },
  // === RÉSEAU DE PRESCRIPTION ===
  {
    id: 'diag-pres-1',
    protocolId: 'prescription',
    text: 'Combien de partenaires professionnels te recommandent régulièrement ?',
    options: [
      { label: '5 ou plus — on échange des leads activement', value: 3 },
      { label: '2-4 contacts qui pensent à moi de temps en temps', value: 2 },
      { label: "1 ou 2, mais ce n'est pas structuré", value: 1 },
      { label: 'Aucun partenaire de recommandation', value: 0 },
    ],
  },
  {
    id: 'diag-pres-2',
    protocolId: 'prescription',
    text: 'Quand tu rencontres un professionnel complémentaire (notaire, banquier, comptable) :',
    options: [
      { label: 'Je propose un déjeuner pour explorer une collaboration', value: 3 },
      { label: "J'échange une carte et je le recontacte parfois", value: 2 },
      { label: 'Je note le contact mais je ne relance pas', value: 1 },
      { label: 'Je ne pense pas à créer de partenariat', value: 0 },
    ],
  },
  {
    id: 'diag-pres-3',
    protocolId: 'prescription',
    text: "Ton dernier lead reçu par recommandation d'un partenaire, c'était :",
    options: [
      { label: 'Ce mois-ci', value: 3 },
      { label: 'Il y a 1-3 mois', value: 2 },
      { label: 'Il y a plus de 6 mois', value: 1 },
      { label: 'Je ne me souviens pas', value: 0 },
    ],
  },
  // === CONTENU RÉGULIER ===
  {
    id: 'diag-cont-1',
    protocolId: 'contenu',
    text: 'À quelle fréquence publies-tu du contenu professionnel (LinkedIn, Insta, etc.) ?',
    options: [
      { label: '2-3 fois par semaine minimum', value: 3 },
      { label: '1 fois par semaine à peu près', value: 2 },
      { label: '1-2 fois par mois', value: 1 },
      { label: 'Quasi jamais', value: 0 },
    ],
  },
  {
    id: 'diag-cont-2',
    protocolId: 'contenu',
    text: 'Tes publications sont plutôt :',
    options: [
      { label: 'Du contenu utile : conseils, décryptages, retours terrain', value: 3 },
      { label: 'Un mélange de perso et de pro', value: 2 },
      { label: 'Surtout des annonces commerciales ou des offres', value: 1 },
      { label: 'Je ne publie pas', value: 0 },
    ],
  },
  {
    id: 'diag-cont-3',
    protocolId: 'contenu',
    text: "Quand tu vois un post intéressant d'un prospect ou partenaire :",
    options: [
      { label: 'Je commente avec un point de vue pertinent', value: 3 },
      { label: 'Je like', value: 2 },
      { label: 'Je lis sans réagir', value: 1 },
      { label: 'Je ne regarde pas les posts des autres', value: 0 },
    ],
  },
  // === RECOMMANDATION DEMANDÉE ===
  {
    id: 'diag-reco-1',
    protocolId: 'recommandation',
    text: 'Après une transaction réussie, tu demandes une recommandation :',
    options: [
      { label: "Systématiquement — c'est un réflexe", value: 3 },
      { label: 'Souvent, quand le client est content', value: 2 },
      { label: "Parfois, quand j'y pense", value: 1 },
      { label: 'Rarement ou jamais', value: 0 },
    ],
  },
  {
    id: 'diag-reco-2',
    protocolId: 'recommandation',
    text: 'Quel pourcentage de tes clients te recommandent activement ?',
    options: [
      { label: "Plus de 50% — la majorité revient ou envoie quelqu'un", value: 3 },
      { label: '25-50% — quelques-uns y pensent', value: 2 },
      { label: "Moins de 25% — c'est rare", value: 1 },
      { label: 'Je ne sais pas / je ne mesure pas', value: 0 },
    ],
  },
  {
    id: 'diag-reco-3',
    protocolId: 'recommandation',
    text: 'Tu demandes des témoignages clients (écrits ou vidéo) :',
    options: [
      { label: 'Après chaque mission réussie', value: 3 },
      { label: 'De temps en temps', value: 2 },
      { label: "J'y ai pensé mais je n'ose pas", value: 1 },
      { label: 'Jamais', value: 0 },
    ],
  },
  // === IMAGE PROFESSIONNELLE ===
  {
    id: 'diag-img-1',
    protocolId: 'image-pro',
    text: 'Ton profil LinkedIn (ou réseau principal) :',
    options: [
      { label: 'Photo pro, bannière, bio claire, publications régulières', value: 3 },
      { label: 'Profil correct mais pas optimisé', value: 2 },
      { label: 'Profil basique, pas à jour', value: 1 },
      { label: 'Pas de profil ou profil vide', value: 0 },
    ],
  },
  {
    id: 'diag-img-2',
    protocolId: 'image-pro',
    text: "Quand quelqu'un te Google :",
    options: [
      { label: 'Il trouve facilement qui je suis et ce que je fais', value: 3 },
      { label: 'Il trouve quelques traces cohérentes', value: 2 },
      { label: 'Il ne trouve pas grand-chose', value: 1 },
      { label: "Je n'ai jamais vérifié", value: 0 },
    ],
  },
  {
    id: 'diag-img-3',
    protocolId: 'image-pro',
    text: 'Ta signature email, tes supports de communication, ta carte de visite :',
    options: [
      { label: 'Cohérents, professionnels, à jour', value: 3 },
      { label: 'Corrects mais pas travaillés', value: 2 },
      { label: 'Basiques ou incohérents', value: 1 },
      { label: 'Inexistants ou jamais pensés', value: 0 },
    ],
  },
]

export const LE_RAYONNEMENT_QUALITATIVE = [
  {
    id: 'qual-ray-1',
    text: "Quel est ton plus gros frein au rayonnement aujourd'hui ?",
    options: [
      'Je ne sais pas quoi publier',
      "Je n'ose pas me montrer",
      "Je n'ai pas le temps",
      "Je ne vois pas l'intérêt",
      'Je ne sais pas par où commencer',
    ],
  },
  {
    id: 'qual-ray-2',
    text: "D'où viennent la majorité de tes clients aujourd'hui ?",
    options: [
      'Recommandations et bouche-à-oreille',
      'Prospection téléphonique ou terrain',
      'Réseaux sociaux / inbound',
      'Plateformes et annuaires',
      'Hasard / pas de canal identifié',
    ],
  },
  {
    id: 'qual-ray-3',
    text: 'Si tu avais 2h de plus par semaine, tu les mettrais sur :',
    options: [
      'Créer du contenu',
      'Aller à des événements locaux',
      'Développer des partenariats',
      'Demander plus de recommandations',
      'Refaire mes supports / profil',
    ],
  },
]
