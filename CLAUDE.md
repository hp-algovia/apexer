# APEXER — CLAUDE.md

## 1. Identité du projet

APEXER est l'infrastructure de la performance commerciale et humaine durable. Système issu de 2 années d'observation des top performers commerciaux français, déployé à travers un réseau de Bâtisseurs.

**Slogan principal** : « L'action forge l'excellence. »

## 5. Identité visuelle APEXER

### Référentiels design (binôme imposé)

**hellowork.com/fr-fr** + **alan.com/fr-fr**

Ces 2 sites définissent le registre APEXER : fond blanc lumineux, accents colorés vifs (orange + or), illustrations vectorielles et photos lifestyle, sourires authentiques, ton chaleureux et accessible, chiffres et insights pour interpeller.

**Pas Patek Philippe** (trop élitiste).
**Pas Tony Robbins** (trop démago).
**Pas Welcome to the Jungle** (trop neutre).

### Cible APEXER

APEXER s'adresse au **grand public commercial français multi-secteurs** : automobile, immobilier, pharma, SaaS, B2B, réseaux. **Adultes 25-55 ans qui ont un budget et qui veulent transformer leur performance.**

Au lancement, on ne vise PAS les jeunes 16-25 (YOUNG = coming soon) ni les entreprises (TEAM = coming soon).

### Palette imposée

| Rôle               | Couleur          | Code      | Usage                            |
| ------------------ | ---------------- | --------- | -------------------------------- |
| **Fond principal** | Blanc pur        | `#FFFFFF` | Fonds dominants, sections aérées |
| **Off-white**      | Blanc cassé      | `#FAFAFA` | Fonds alternatifs subtils        |
| **Or doré**        | Or chaud         | `#D4A04A` | Signature, noms des Bâtisseurs   |
| **Orange vif**     | Orange APEXER    | `#F97316` | CTAs principaux, accents énergie |
| **Charbon**        | Texte principal  | `#1A1A1A` | Texte body, H1, H2               |
| **Gris doux**      | Texte secondaire | `#6B7280` | Sous-titres, métadonnées         |
| **Bordures**       | Gris très clair  | `#E5E7EB` | Séparateurs, cards               |

**Pas de navy plein.** Pas d'ivoire chaud beige. Pas de gris foncé. **Du blanc lumineux partout**, des accents vifs (orange + or) pour ponctuer.

### Typographie

- **DM Sans 800** pour H1 desktop : `text-7xl` à `text-8xl`, letter-spacing `-0.03em`, leading-tight
- **DM Sans 700** pour H2 : `text-4xl` à `text-5xl`
- **DM Sans 600** pour H3 : `text-2xl` à `text-3xl`
- **Inter 400** pour body : `text-base` à `text-lg`, leading-relaxed
- **Inter 500** pour labels et eyebrows : `text-sm`, uppercase, tracking-wider, couleur orange
- **Georgia italic** pour citations rares : `text-2xl` à `text-3xl`

### Atmosphère visuelle imposée

- ✅ **Lumineux et aspirationnel** (sommets, élévation, ouverture)
- ✅ **Sourires authentiques partout** (énergie, joie, optimisme)
- ✅ **Photos en mouvement** (gens qui sourient, parlent, écoutent)
- ✅ **Accents orange et or pour ponctuer** (pas de monotonie blanc)
- ✅ **Espaces aérés mais sections denses** (pas de pages vides)

### Atmosphère visuelle interdite

- ❌ Atmosphère matérielle sombre (papier vieilli, bois patiné, métal — non, on n'est pas une banque)
- ❌ Sourires forcés stockphoto (corporate plat)
- ❌ Photos sans personnes (ambiances vides, espaces architecturaux)
- ❌ Tons sépia, navy plein, beige monotone, ivoire chaud
- ❌ Composition asymétrique calme (on veut du dynamisme, pas du Patek)

### Animations subtiles autorisées

- Fade-up des sections au scroll (intersection observer, 800ms cubic-bezier(0.16, 1, 0.3, 1), translateY 30px)
- Parallaxe légère sur images Hero (transform 5% au scroll)
- Header sticky qui se réduit au scroll (96px → 64px)
- Trait orange qui se trace sous les CTAs au hover (transition 300ms)
- Compteurs animés à l'arrivée dans le viewport
- Micro-bounce CTAs au click (transform scale 0.98 sur 100ms)
- Hover sur cards : élévation subtile (box-shadow + translate-y -4px)

### Animations interdites

- Carrousels qui défilent automatiquement (sauf vidéos silencieuses Hero)
- Effets de particules, néons, gradients flashy multi-couleurs
- Marquees, scrolling text horizontaux
- Hover effects exubérants (rotation 3D, bounce excessif, color shifts)
- Animations qui distraient de la lecture

## 6. Conventions non négociables

- **TypeScript strict** partout. Pas de `any`.
- **ESLint + Prettier** activés sur tout commit (Husky + lint-staged).
- **Tailwind uniquement**, pas de CSS-in-JS, pas de modules CSS hors fichiers globals.
- **Validation runtime** des inputs API avec **Zod** systématiquement.
- **RLS Supabase activée sur toutes les tables sensibles**.
- **Conventional commits** : `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `test:`.
- **Branches** : `main` (prod), `staging` (pré-prod), `dev` (courant), `feature/*` (éphémères).
- **Réécritures complètes** privilégiées sur les patches ciblés quand un fichier devient incohérent.

## 7. Vocabulaire APEXER (validé par HP)

### Distinction Forgeron / Bâtisseur

- **Forgeron** = membre qui suit le programme APEXER (membre actif d'une Forge)
- **Bâtisseur** = celui qui anime/tient une Forge sur son territoire (rôle opérationnel)

### Marqueur visuel : le doré

Sur les cartes de visite, signatures email, profil app : **le nom des Bâtisseurs apparaît en doré (#D4A04A)**. Les Forgerons standards ont leur nom en charbon classique. Pas d'autre distinction lexicale.

### Vocabulaire à utiliser et bannir

| ✅ Utiliser             | ❌ Bannir                 |
| ----------------------- | ------------------------- |
| Forgeron                | Maître-Forgeron           |
| Bâtisseur               | Maître-Forgeron Fondateur |
| Animer une Forge        | Devenir MFF               |
| Ouvrir une Forge        | Maître-Forgeron           |
| Forge de [Ville]        | MFF                       |
| Le Cercle des Pionniers | Le Cercle des MFF         |

### CTAs principaux

- **CTA principal Hero** : « Postuler à une Forge » (rejoindre comme Forgeron)
- **CTA secondaire Hero** : « Ouvrir une Forge » (devenir Bâtisseur)
- **CTA acquisition douce** : « Réserver mon premier atelier » (15€, premier offert)

## 8. Produits APEXER au lancement (1er septembre 2026)

### Produits ACTIFS au lancement

| Produit               | Format                                                                                     | Prix                          |
| --------------------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| **FORGE**             | Abonnement mensuel — 2 séances/mois (Forge Midi + Forge Soir) + app + accès atelier samedi | **89€/mois** (1 mois d'essai) |
| **APEX MONT BLANC**   | Event 2 jours intensif (week-end)                                                          | **399€**                      |
| **APEX KILIMANDJARO** | Event 2 jours intensif (week-end)                                                          | **699€**                      |
| **APEX HIMALAYA**     | Event 2 jours intensif (week-end)                                                          | **1 499€**                    |
| **OUVRIR UNE FORGE**  | Programme de certification Bâtisseur                                                       | **3 500€**                    |
| **Atelier samedi**    | 3h thématique en présentiel                                                                | **15€** (1er offert)          |

### Produits COMING SOON (à venir 2027)

| Produit     | Format prévisionnel          | Prix prévisionnel |
| ----------- | ---------------------------- | ----------------- |
| **CONNECT** | Online seul, sans présentiel | 39€/mois          |
| **TEAM**    | B2B pour entreprises         | 19€/salarié/mois  |
| **YOUNG**   | Tarif jeune 16-25 ans        | 29€/mois          |

**Affichage homepage** : ces 3 produits apparaissent en section "Bientôt disponible" avec un bouton "Être prévenu de l'ouverture" (capture email).

## 9. Modèle économique des Forges

### Splits Bâtisseur / APEXER (Modèle bonus volume — Option C)

**Mécanique d'incitation au volume** : plus le Bâtisseur a de Forgerons dans sa Forge, plus son pourcentage augmente.

| Volume Forgerons dans la Forge | Split FORGE                    | Split APEX events | Split atelier |
| ------------------------------ | ------------------------------ | ----------------- | ------------- |
| **0-50 Forgerons**             | 65% Bâtisseur / 35% APEXER     | 65/35             | 65/35         |
| **51-100 Forgerons**           | **75% Bâtisseur / 25% APEXER** | 75/25             | 75/25         |
| **100+ Forgerons**             | **80% Bâtisseur / 20% APEXER** | 80/20             | 80/20         |

**Programmes 100% APEXER (pas de Bâtisseur impliqué)** :

- OUVRIR UNE FORGE (formation centrale)
- CONNECT (coming soon, online pur)
- TEAM (coming soon, vente directe APEXER)

### Système de parrainage

**Mécanique simple et lisible :**

- **Pour le parrain** : par filleul qui devient membre actif FORGE :
  - 1 mois FORGE offert (= 89€ d'économie)
  - 1 atelier samedi offert (= 15€ d'économie)
- **Pour le filleul** : 2 mois d'essai au lieu d'1 sur FORGE

- **Pas de cashback récurrent**, pas de système de grades complexe. Simple, lisible, motivant.

### Date de fermeture du Cercle des Pionniers

**Cercle des Pionniers fermé le 31 août 2026.**
30 places de Bâtisseurs Pionniers à signer avant cette date.
Compte à rebours visible sur la homepage du site.

## 10. Référence aux 14 documents fondateurs

Avant de coder une feature liée à un programme ou tunnel, **lis le document concerné** :

| Si tu codes…                  | Lis ce document                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Page d'accueil, manifeste     | `docs/foundations/APEXER_Document_Fondateur_v3.docx`                                                         |
| Tunnel candidature Bâtisseur  | `docs/foundations/APEXER_Kit_Maitre_Forgeron_v3.docx` ⚠️ vocabulaire à adapter (Maître-Forgeron → Bâtisseur) |
| Test de candidature Bâtisseur | `docs/foundations/APEXER_Test_Recrutement_v1.docx`                                                           |
| Page produit FORGE            | `docs/foundations/APEXER_FORGE_v1.docx` ⚠️ adapter au format mensuel + ateliers                              |
| Page event APEX MONT BLANC    | `docs/foundations/APEX_MONT_BLANC_v1.docx` ⚠️ adapter au format event 2 jours                                |
| Page event APEX KILIMANDJARO  | `docs/foundations/APEX_KILIMANDJARO_v1.docx` ⚠️ adapter au format event 2 jours                              |
| Page event APEX HIMALAYA      | `docs/foundations/APEX_HIMALAYA_v1.docx` ⚠️ adapter au format event 2 jours                                  |
| Page Coming Soon CONNECT      | `docs/foundations/APEXER_CONNECT_v1.docx` ⚠️ V1 wait list seulement                                          |
| Page Coming Soon TEAM         | `docs/foundations/APEXER_TEAM_v1.docx` ⚠️ V1 wait list seulement                                             |
| Page Coming Soon YOUNG        | `docs/foundations/APEXER_YOUNG_v1.docx` ⚠️ V1 wait list seulement                                            |
| Programme Ouvrir une Forge    | `docs/foundations/APEXER_FORGERON_v1.docx`                                                                   |
| **Stack technique complète**  | `docs/foundations/APEXER_Reco_Claude_Code_v1.docx`                                                           |
| **Architecture du site**      | `docs/foundations/APEXER_Architecture_Site_v1.docx`                                                          |
| Génération d'images           | `docs/foundations/APEXER_Prompts_Image_v1.docx` ⚠️ obsolète, à régénérer dans le nouveau registre lumineux   |

## 11. Comportement par défaut au démarrage de session

Quand HP démarre une session Claude Code, tu :

1. Lis ce fichier (CLAUDE.md) en premier.
2. Lis le `package.json` à la racine.
3. Demandes à HP **un seul objectif clair** pour la session.
4. **N'enchaînes pas plusieurs objectifs sans qu'il valide** entre les deux.
5. Termines toujours par un commit + push + URL Vercel preview à montrer.

## 12. Workflow d'autorisations Claude Code

Auto-approve autorisé pour :

- `pnpm *`, `npm *` (installations)
- `ls *`, `cat *`, `grep *` (lectures)
- `mkdir *` (création de dossiers)
- `git status`, `git diff`, `git log`, `git add *`

Reste en demande explicite pour :

- `git commit`, `git push` (modifications du repo)
- `rm *` (suppression — toujours demander)
- Toute commande système (`sudo`, `~/.zprofile`)

## 13. Honnêteté absolue (règle non négociable)

APEXER se construit sur l'intégrité. Aucun mensonge, même implicite, sur le site public.

### Interdictions absolues

- ❌ **Pas de faux témoignages.** Aucune citation inventée de Forgeron. Aucune persona inventée. Aucune photo de stock présentée comme un Forgeron réel.
- ❌ **Pas de faux logos partenaires.** Pas de bandeau "Ils utilisent APEXER" tant qu'aucune entreprise n'a signé.
- ❌ **Pas de fausses statistiques.** Pas de "94% de réussite", "+47% de CA", "1500 commerciaux transformés".
- ❌ **Pas de faux compteurs.** Pas de "X / 30 places prises" affiché à 0/30.
- ❌ **Pas de fausse urgence.** Pas de "Plus que 3 places !" sans réelle limitation.

### Données de l'enquête fondatrice — règles strictes

- ✅ **Autorisé** : "2 ans d'observation des top performers commerciaux français"
- ✅ **Autorisé** : "7 pratiques convergentes"
- ✅ **Autorisé** : "Un système issu du terrain, pas d'un cabinet de conseil"

- ❌ **Interdit** : Toute mention du nombre d'interviews ou de la taille de l'échantillon
- ❌ **Interdit** : "16 commerciaux", "16 profils", "16 interviews"
- ❌ **Interdit** : Vocabulaire universitaire ("étude", "échantillon", "panel", "cohorte")

### Ce qui est autorisé et encouragé

- ✅ Les 5 observations clés issues de l'enquête (voir section 15)
- ✅ L'identité du fondateur HP (auteur de "VIAGER — 50 questions essentielles", fondateur de KAHP SAS, architecte de DILLAN)
- ✅ L'invitation au Cercle des Pionniers ("30 places fondatrices, fermeture le 31 août 2026")
- ✅ Le manifeste APEXER (opinion forte du fondateur)
- ✅ Les produits actifs au lancement (FORGE, APEX events, OUVRIR UNE FORGE, ateliers)
- ✅ Les produits Coming Soon affichés comme tels (CONNECT, TEAM, YOUNG)

### Test de vérité applicable à chaque ligne du site

> Si HP devait défendre cette ligne devant un journaliste qui creuse, est-ce qu'il pourrait la prouver factuellement ?

Si la réponse est non → la ligne ne va pas sur le site.

## 14. Les deux marqueurs verbaux APEXER

### Le Hero (slogan principal)

« L'action forge l'excellence. »

Règles d'usage :

- ✅ H1 principal de la homepage, en typographie massive DM Sans 800
- ✅ Repris en pitch deck, signature email, supports physiques
- ✅ Mémorable, court, brand-defining

### La signature de profondeur (intouchable)

« Ce n'est pas parce qu'ils sont les meilleurs qu'ils le font. Mais parce qu'ils le font qu'ils sont les meilleurs. »

Règles d'usage :

- ✅ Présente en sous-titre Georgia italic SOUS le H1 du Hero
- ✅ Reprise en footer en signature finale
- ✅ Reprise en fin de programmes APEX, en outro de vidéos, en signature email
- ✅ Ne se reformule jamais, ne se synthétise pas, ne se coupe pas
