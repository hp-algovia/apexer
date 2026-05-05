import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://apexer.fr'
const SITE_NAME = 'APEXER'
const SITE_DESCRIPTION =
  'APEXER installe chez vous le système des top performers commerciaux français. Décortiqué pendant 2 ans. Tenu chaque mois par un Bâtisseur sur votre territoire.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'APEXER — Le système des top performers commerciaux',
    template: '%s · APEXER',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'KAHP SAS' }],
  creator: 'KAHP SAS',
  publisher: 'KAHP SAS',
  keywords: [
    'performance commerciale',
    'top performers',
    'Forge APEXER',
    'Bâtisseur',
    'formation commerciale',
    'recommandabilité',
    'Cercle des Pionniers',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'fr_FR',
    title: 'APEXER — Le système des top performers commerciaux',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'APEXER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEXER — Le système des top performers commerciaux',
    description: SITE_DESCRIPTION,
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-body text-charbon bg-white antialiased">{children}</body>
    </html>
  )
}
