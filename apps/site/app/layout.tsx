import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://apexer.fr'
const SITE_NAME = 'APEXER'
const SITE_DESCRIPTION =
  'Pendant deux ans, nous avons enquêté sur les commerciaux qui surperforment durablement en France. 16 profils, 7 pratiques convergentes. APEXER les a transformées en système reproductible — et les déploie sur 130 bassins économiques à travers un réseau de Maîtres-Forgerons Fondateurs.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'APEXER — La méthode des top performers commerciaux français',
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
    'formation commerciale',
    'Maître-Forgeron',
    'Forge APEXER',
    'commerce B2B',
    'sales enablement',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'fr_FR',
    title: 'APEXER — La méthode des top performers commerciaux français',
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
    title: 'APEXER — La méthode des top performers commerciaux français',
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
      <body className="bg-light text-navy font-sans antialiased">{children}</body>
    </html>
  )
}
