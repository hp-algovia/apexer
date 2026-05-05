import type { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeroManifeste } from '../components/home/HeroManifeste'
import { Observations } from '../components/home/Observations'
import { Manifeste } from '../components/home/Manifeste'
import { Rythme } from '../components/home/Rythme'
import { Produits } from '../components/home/Produits'
import { ComingSoon } from '../components/home/ComingSoon'
import { Pionniers } from '../components/home/Pionniers'
import { DernierPunch } from '../components/home/DernierPunch'

const SITE_URL = 'https://apexer.fr'

export const metadata: Metadata = {
  title: 'APEXER — Le système des top performers commerciaux',
  description:
    'APEXER installe chez vous le système des top performers commerciaux français. Décortiqué pendant 2 ans. Tenu chaque mois par un Bâtisseur sur votre territoire.',
  alternates: { canonical: '/' },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'APEXER',
  legalName: 'KAHP SAS',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-apexer.png`,
  description:
    "L'infrastructure de la performance commerciale et humaine durable. Système issu de 2 années d'observation des top performers commerciaux français, déployé à travers un réseau de Bâtisseurs.",
  founder: {
    '@type': 'Person',
    name: 'Henri-Pierre Ouhibi',
    jobTitle: 'Fondateur APEXER',
  },
  sameAs: ['https://www.linkedin.com/company/apexer'],
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'APEXER',
  url: SITE_URL,
  inLanguage: 'fr-FR',
}

const offerCatalogLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Programmes APEXER',
  url: `${SITE_URL}/#programmes`,
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'FORGE',
      url: `${SITE_URL}/forge`,
      price: '89',
      priceCurrency: 'EUR',
      description: "Le rythme APEXER mensuel installé chez vous. 89€/mois, 1 mois d'essai.",
    },
    {
      '@type': 'Offer',
      name: 'APEX MONT BLANC',
      url: `${SITE_URL}/apex/mont-blanc`,
      price: '399',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'APEX KILIMANDJARO',
      url: `${SITE_URL}/apex/kilimandjaro`,
      price: '699',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'APEX HIMALAYA',
      url: `${SITE_URL}/apex/himalaya`,
      price: '1499',
      priceCurrency: 'EUR',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationLd, websiteLd, offerCatalogLd]),
        }}
      />
      <Header />
      <main>
        <HeroManifeste />
        <Observations />
        <Manifeste />
        <Rythme />
        <Produits />
        <ComingSoon />
        <Pionniers />
        <DernierPunch />
      </main>
      <Footer />
    </>
  )
}
