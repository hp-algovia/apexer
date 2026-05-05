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

export const metadata: Metadata = {
  title: 'APEXER',
  description: 'Infrastructure nationale française pour la performance commerciale durable.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="bg-light text-navy font-sans antialiased">{children}</body>
    </html>
  )
}
