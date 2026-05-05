import Link from 'next/link'
import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'

const portes = [
  {
    href: '/manifeste',
    label: 'Manifeste',
    body: 'Le manifeste APEXER',
  },
  {
    href: '/methode',
    label: 'Méthode',
    body: 'Les 7 pratiques convergentes',
  },
  {
    href: '/forgerons',
    label: 'Forgerons',
    body: 'Le réseau (carte de France)',
  },
  {
    href: '/journal',
    label: 'Journal',
    body: 'Articles et publications',
  },
]

export function PortesSecondaires() {
  return (
    <section className="bg-white">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>EXPLORER APEXER</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Quatre portes secondaires.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portes.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="border-border/80 hover:border-gold/60 group flex flex-col rounded-lg border bg-white p-7 transition-colors"
            >
              <h3 className="text-navy group-hover:text-gold-deep font-sans text-xl font-bold tracking-tight transition-colors">
                {p.label}
              </h3>
              <p className="text-grey font-body mt-3 text-sm leading-relaxed">{p.body}</p>
              <span className="text-gold-deep mt-8 font-sans text-sm font-semibold">Ouvrir →</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
