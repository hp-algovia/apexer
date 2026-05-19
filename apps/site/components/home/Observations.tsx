import Image from 'next/image'
import { Container } from '../Container'
import { FadeIn } from '../FadeIn'

type Observation = {
  n: string
  alt: string
  src: string
}

const observations: Observation[] = [
  {
    n: '01',
    alt: 'Observation 01 — Zéro charge mentale. Le dimanche, son téléphone reste éteint.',
    src: '/01-charge-mentale.jpg',
  },
  {
    n: '02',
    alt: 'Observation 02 — Passionnés donc passionnants. Le client repart avec une histoire à raconter.',
    src: '/02-passion.jpg',
  },
  {
    n: '03',
    alt: 'Observation 03 — Ils ne prospectent pas. Ils rayonnent. Le téléphone sonne, pas l’inverse.',
    src: '/03-rayonnent.jpg',
  },
  {
    n: '04',
    alt: 'Observation 04 — Ils ont tous un mentor. Quelqu’un qui leur dit ce qu’ils ne voient pas.',
    src: '/04-mentor.jpg',
  },
  {
    n: '05',
    alt: 'Observation 05 — Ils apprennent toujours. Les meilleurs sont les plus assidus.',
    src: '/05-apprennent.jpg',
  },
]

export function Observations() {
  return (
    <section className="bg-off relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(50% 40% at 100% 0%, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0) 60%)',
        }}
      />

      <Container className="relative z-10 py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-charbon font-sans text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-5xl lg:text-6xl">
              5 observations qui changent tout.
            </h2>
            <p className="font-body text-grey mt-6 text-lg leading-relaxed md:text-xl">
              2 ans à observer les top performers commerciaux français. Voici ce qu&apos;ils font
              tous, et que presque personne ne fait.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-5">
          {observations.map((obs, idx) => (
            <FadeIn key={obs.n} delay={idx * 80}>
              <article
                className="ease-apexer bg-charbon hover:shadow-strong group relative aspect-[3/4] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
                aria-label={obs.alt}
              >
                <Image
                  src={obs.src}
                  alt={obs.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 2}
                />
                <div
                  aria-hidden
                  className="ease-apexer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(80% 60% at 50% 100%, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0) 70%)',
                  }}
                />
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={observations.length * 80}>
          <p className="font-body text-grey/90 mt-10 max-w-3xl text-sm italic leading-relaxed md:text-base">
            Aucune de ces 5 observations n&apos;est nouvelle. Mais aucune n&apos;est installée
            durablement chez 95% des commerciaux. C&apos;est exactement ce qu&apos;APEXER corrige —
            chaque mois, dans la durée, sur le terrain.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
