import Link from 'next/link'
import { Container } from './Container'

const columns = [
  {
    title: 'Programmes',
    links: [
      { href: '/connect', label: 'CONNECT' },
      { href: '/forge', label: 'FORGE' },
      { href: '/apex', label: 'APEX' },
      { href: '/team', label: 'TEAM' },
      { href: '/young', label: 'YOUNG' },
    ],
  },
  {
    title: 'Réseau',
    links: [
      { href: '/forgerons', label: 'Carte des Forges' },
      { href: '/candidater', label: 'Devenir Maître-Forgeron' },
      { href: '/team', label: 'Pour les entreprises' },
      { href: '/young', label: 'Pour les jeunes' },
    ],
  },
  {
    title: 'APEXER',
    links: [
      { href: '/manifeste', label: 'Manifeste' },
      { href: '/methode', label: 'Méthode' },
      { href: '/journal', label: 'Journal' },
      { href: '/a-propos', label: 'À propos' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { href: '/legal/mentions', label: 'Mentions' },
      { href: '/legal/cgv', label: 'CGV' },
      { href: '/legal/confidentialite', label: 'Confidentialité' },
      { href: '/legal/cookies', label: 'Cookies' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy text-light/80 border-t border-white/5">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-gold inline-block font-sans text-xl font-bold tracking-tight"
            >
              APEXER
            </Link>
            <p className="font-body text-light/60 mt-4 max-w-xs text-sm leading-relaxed">
              Infrastructure nationale française pour la performance commerciale durable.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-gold/90 font-sans text-xs font-bold uppercase tracking-[0.14em]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-gold font-body text-light/70 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="font-body text-light/50 mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} KAHP SAS — APEXER est un programme opéré par KAHP SAS.
          </p>
          <a
            href="https://www.linkedin.com/company/apexer"
            className="hover:text-gold transition-colors"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  )
}
