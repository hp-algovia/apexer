import type { Metadata } from 'next'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../components/home/Hero'
import { DoubleRupture } from '../components/home/DoubleRupture'
import { EnqueteFondatrice } from '../components/home/EnqueteFondatrice'
import { Programmes } from '../components/home/Programmes'
import { ForgeEnVrai } from '../components/home/ForgeEnVrai'
import { Temoignages } from '../components/home/Temoignages'
import { PortesSecondaires } from '../components/home/PortesSecondaires'
import { Fondateur } from '../components/home/Fondateur'
import { Finale } from '../components/home/Finale'

const SITE_URL = 'https://apexer.fr'

export const metadata: Metadata = {
  title: 'APEXER — La méthode des top performers commerciaux français',
  description:
    'Pendant deux ans, nous avons enquêté sur les commerciaux qui surperforment durablement en France. 16 profils, 7 pratiques convergentes. APEXER les a transformées en système reproductible — et les déploie sur 130 bassins économiques à travers un réseau de Maîtres-Forgerons Fondateurs.',
  alternates: { canonical: '/' },
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'APEXER',
  legalName: 'KAHP SAS',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Infrastructure nationale française pour la performance commerciale durable. Méthodologie issue de l'observation des 16 top performers commerciaux français, déployée à travers un réseau de Maîtres-Forgerons Fondateurs.",
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
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/journal?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const offerCatalogLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Programmes APEXER',
  url: `${SITE_URL}/#programmes`,
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'CONNECT',
      url: `${SITE_URL}/connect`,
      price: '49',
      priceCurrency: 'EUR',
      description:
        'Le programme digital d’entrée. Modules vidéo, Scoreboard quotidien, communauté privée. Pour démarrer seul, à votre rythme.',
    },
    {
      '@type': 'Offer',
      name: 'FORGE',
      url: `${SITE_URL}/forge`,
      price: '129',
      priceCurrency: 'EUR',
      description:
        'Le programme central. Forge hebdomadaire animée par un Maître-Forgeron certifié.',
    },
    {
      '@type': 'Offer',
      name: 'APEX',
      url: `${SITE_URL}/apex`,
      priceCurrency: 'EUR',
      description: 'La trilogie de progression structurée. MONT BLANC · KILIMANDJARO · HIMALAYA.',
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
        <Hero />
        <DoubleRupture />
        <EnqueteFondatrice />
        <section id="programmes">
          <Programmes />
        </section>
        <ForgeEnVrai />
        <Temoignages />
        <PortesSecondaires />
        <Fondateur />
        <Finale />
      </main>
      <Footer />
    </>
  )
}
