import Link from 'next/link'
import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import { FadeIn } from '../FadeIn'

const apex = [
  {
    name: 'APEX MONT BLANC',
    badge: 'EVENT 2 JOURS',
    price: '399€ · Week-end intensif',
    body: 'Les fondamentaux des 7 pratiques convergentes. 2 jours pour poser les bases du système. 50 participants max.',
    href: '/apex/mont-blanc',
  },
  {
    name: 'APEX KILIMANDJARO',
    badge: 'EVENT 2 JOURS',
    price: '699€ · Week-end intensif',
    body: 'L’installation profonde du système. 2 jours pour ancrer durablement les pratiques.',
    href: '/apex/kilimandjaro',
  },
  {
    name: 'APEX HIMALAYA',
    badge: 'EVENT 2 JOURS',
    price: '1 499€ · Week-end intensif',
    body: 'La haute performance et la transmission. 2 jours pour devenir capable de transmettre.',
    href: '/apex/himalaya',
  },
]

const forgeIncludes = [
  '2 séances de Forge/mois (Midi + Soir)',
  '1 atelier offert/mois',
  'App APEXER complète',
  'Accès au Marché des recommandations',
  'Mentor matching',
]

export function Produits() {
  return (
    <section className="bg-white">
      <Container className="py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <Eyebrow>NOS PROGRAMMES</Eyebrow>
            <h2 className="text-charbon mt-6 font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Trouvez votre porte d&apos;entrée.
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6 xl:col-span-5">
            <article className="border-orange shadow-medium ease-apexer hover:shadow-glow relative flex h-full flex-col rounded-2xl border-2 bg-white p-8 transition-all duration-300 hover:-translate-y-1 md:p-10">
              <span className="bg-orange absolute -top-3 left-8 rounded-full px-3 py-1 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                LE PROGRAMME PRINCIPAL
              </span>
              <h3 className="text-charbon font-sans text-3xl font-black tracking-[-0.02em] md:text-4xl">
                FORGE
              </h3>
              <p className="text-orange mt-3 font-sans text-base font-semibold">
                89€/mois · 1 mois d&apos;essai
              </p>
              <p className="font-body text-grey mt-5 text-base leading-relaxed md:text-lg">
                Le rythme APEXER mensuel installé chez vous.
              </p>
              <ul className="mt-8 space-y-3">
                {forgeIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="bg-orange/15 text-orange mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    >
                      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                        <path
                          d="M4 10.5l3.5 3.5L16 5.5"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-charbon text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/candidater" variant="orange" className="w-full sm:w-auto">
                  Postuler à une Forge
                </Button>
              </div>
            </article>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 xl:col-span-7 xl:grid-cols-3">
            {apex.map((p, idx) => (
              <FadeIn key={p.name} delay={idx * 100}>
                <article className="border-border ease-apexer hover:border-gold/60 hover:shadow-medium group flex h-full flex-col rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1">
                  <span className="bg-gold-soft text-gold-deep self-start rounded-full px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
                    {p.badge}
                  </span>
                  <h3 className="text-charbon mt-5 font-sans text-2xl font-bold tracking-[-0.01em]">
                    {p.name}
                  </h3>
                  <p className="text-gold-deep mt-2 font-sans text-sm font-semibold">{p.price}</p>
                  <p className="font-body text-grey mt-5 text-sm leading-relaxed">{p.body}</p>
                  <Link
                    href={p.href}
                    className="text-orange hover:text-orange-deep mt-auto pt-8 font-sans text-sm font-semibold transition-colors"
                  >
                    Voir les dates →
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
