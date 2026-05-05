# CLAUDE.md — APEXER

> Lecture obligatoire au démarrage de chaque session.
> Ce fichier briefe l'agent en moins d'une minute. Sans lui, l'agent dérive.

## 1. Identité du projet

APEXER est l'infrastructure nationale française pour la performance commerciale durable.
Méthodologie issue de l'observation des 16 top performers commerciaux français.
Déployée à travers un réseau de 200 Maîtres-Forgerons Fondateurs.

**Promesse centrale** : « Ce n'est pas parce qu'ils sont les meilleurs qu'ils le font.
Mais parce qu'ils le font qu'ils sont les meilleurs. »

**Slogan opérationnel** : « Arrêtez de compter sur la motivation. Installez un système. »

L'écosystème comprend :

- 1 site public (apexer.fr) — vitrine + tunnels commerciaux
- 1 application (app.apexer.fr) — espace Forgeron + espace Maître-Forgeron + admin
- 8 programmes pédagogiques (CONNECT, FORGE, APEX MONT BLANC / KILIMANDJARO / HIMALAYA, TEAM, YOUNG, FORGERON)
- 130 territoires français à couvrir, 200 licences Maîtres-Forgerons à signer en 18 mois

## 2. Mode de collaboration avec HP

HP est le fondateur de KAHP SAS, pas un développeur.
Il pilote par objectifs, valide les résultats, ne lit pas le code en détail.

**Comportement attendu de Claude Code :**

- Tu prends toutes les décisions techniques cohérentes avec le document **Reco Claude Code v1**.
- Tu ne demandes pas son avis sur des détails techniques (versions de paquets, structure de fichier mineure, choix de nommage interne).
- Quand tu hésites, tu choisis la solution la plus simple et la plus standard, et tu avances.
- Tu lui présentes des résultats qui marchent, jamais des choix techniques à arbitrer.
- Tu utilises systématiquement les Vercel preview URLs pour qu'il puisse valider visuellement.
- Tu n'attends pas son OK avant chaque action — tu enchaînes, tu commits, tu push, tu lui montres l'URL preview à la fin.

**Ce qu'HP veut voir à la fin d'une session :**

- Une URL de preview Vercel qui marche
- Un récap court (5-10 lignes max) de ce qui a été fait
- La liste des choix techniques significatifs que tu as pris (sans demander confirmation, juste pour info)

## 3. Stack technique non négociable

Référence complète : `docs/foundations/APEXER_Reco_Claude_Code_v1.docx`

- **Framework** : Next.js 15 (App Router)
- **Backend & DB** : Supabase (auth, DB Postgres, storage, RLS systématique)
- **UI** : Tailwind CSS + shadcn/ui
- **Typo** : DM Sans (UI) + Inter (body) + Georgia (citations rares)
- **Paiements** : Stripe (Checkout hosted + webhooks)
- **Emails** : Resend
- **Push** : OneSignal Web Push
- **RDV** : Cal.com
- **Hosting** : Vercel
- **Monitoring** : Sentry + PostHog
- **Monorepo** : Turborepo + pnpm

**TypeScript strict obligatoire. Aucun `any`. Aucun `@ts-ignore` sans commentaire justifié.**

## 4. Structure du repo
