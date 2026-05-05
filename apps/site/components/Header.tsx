import Link from 'next/link'
import { Container } from './Container'
import { Button } from './Button'

const navItems = [
  { href: '/methode', label: 'Méthode' },
  { href: '/forge', label: 'Programmes' },
  { href: '/forgerons', label: 'Forgerons' },
  { href: '/journal', label: 'Journal' },
  { href: '/pourquoi', label: 'Pourquoi' },
]

export function Header() {
  return (
    <header className="bg-navy text-light sticky top-0 z-50 border-b border-white/5">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-sans text-lg font-bold tracking-tight md:text-xl">
          <span className="text-gold">APEXER</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-gold font-body text-light/80 text-sm font-medium tracking-tight transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            href="/forge#candidater"
            variant="secondary"
            className="border-light/40 text-light hover:bg-light hover:text-navy text-sm"
          >
            Postuler à une Forge
          </Button>
          <Button href="/candidater" variant="primary" className="text-sm">
            Devenir Forgeron
          </Button>
        </div>
        <Link
          href="/candidater"
          className="bg-gold text-navy rounded-md px-4 py-2 font-sans text-sm font-semibold md:hidden"
        >
          Postuler
        </Link>
      </Container>
    </header>
  )
}
