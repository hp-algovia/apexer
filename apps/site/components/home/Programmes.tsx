import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import Link from 'next/link'

const programmes = [
  {
    name: 'CONNECT',
    price: '49 €/mois',
    href: '/connect',
    body: 'Le programme digital d’entrée. Modules vidéo, Scoreboard quotidien, communauté privée. Pour démarrer seul, à votre rythme.',
  },
  {
    name: 'FORGE',
    price: '129 €/mois',
    href: '/forge',
    body: 'Le programme central. Forge hebdomadaire animée par un Maître-Forgeron certifié. C’est ici que les pratiques s’installent durablement.',
    highlighted: true,
  },
  {
    name: 'APEX',
    price: 'De 299 € à 1 299 €',
    href: '/apex',
    body: 'La trilogie de progression structurée. MONT BLANC (12 semaines, fondations) · KILIMANDJARO (24 semaines, accélération) · HIMALAYA (48 semaines, maîtrise).',
  },
]

export function Programmes() {
  return (
    <section className="bg-light">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>LES PROGRAMMES</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Cinq portes d&apos;entrée. Une seule logique.
          </h2>
          <p className="font-body mt-6 text-lg leading-relaxed text-black">
            APEXER se déploie en cinq programmes, calibrés selon votre situation. CONNECT pour
            démarrer seul. FORGE pour rejoindre un cercle hebdomadaire. APEX pour structurer votre
            maîtrise sur 12 à 48 semaines. TEAM pour installer le système dans votre équipe
            d&apos;entreprise. YOUNG pour les structures qui accompagnent les 16-25 ans.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`shadow-soft hover:shadow-medium group relative flex flex-col rounded-lg border bg-white p-8 transition-shadow ${
                p.highlighted ? 'border-gold/60 ring-gold/30 ring-1' : 'border-border/80'
              }`}
            >
              {p.highlighted ? (
                <span className="bg-gold text-navy absolute -top-3 left-8 rounded-sm px-2 py-0.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em]">
                  Programme central
                </span>
              ) : null}
              <h3 className="text-navy font-sans text-2xl font-bold tracking-tight">{p.name}</h3>
              <p className="text-gold-deep mt-2 font-sans text-sm font-semibold tracking-tight">
                {p.price}
              </p>
              <p className="text-grey font-body mt-5 text-sm leading-relaxed">{p.body}</p>
              <span className="text-navy group-hover:text-gold-deep mt-8 font-sans text-sm font-semibold tracking-tight transition-colors">
                Découvrir →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/pourquoi" variant="ghost">
            Comment choisir votre programme ? →
          </Button>
        </div>
      </Container>
    </section>
  )
}
