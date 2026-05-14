import { Container } from '../Container'
import { Button } from '../Button'
import { FadeIn } from '../FadeIn'

const installs = [
  'Un cadre extérieur tenu chaque mois',
  'Une Forge sur votre territoire',
  'Un système qui ne lâche pas',
  'Le Principe Dory (zéro charge mentale)',
  'Le Marché des recommandations entre Forgerons',
  'La régularité comme moteur',
]

const refuses = [
  'Le développement personnel qui parle de vos blocages d’enfance',
  'Les promesses de revenu rapide',
  'Les méthodes qui s’évaporent en 3 mois',
  'La motivation comme ressort',
  'Le coaching qui ne tient pas la durée',
  'Les clubs business qui échangent des contacts',
]

export function Manifeste() {
  return (
    <section className="bg-white">
      <Container className="py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-charbon font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Ce qu&apos;on installe. Ce qu&apos;on refuse.
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <span
            aria-hidden
            className="bg-orange/30 absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
          />
          <FadeIn>
            <div>
              <h3 className="text-orange font-sans text-sm font-bold uppercase tracking-[0.18em]">
                Ce qu&apos;on installe
              </h3>
              <ul className="mt-8 space-y-5">
                {installs.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="bg-orange/10 text-orange mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    >
                      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                        <path
                          d="M4 10.5l3.5 3.5L16 5.5"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-charbon text-base leading-relaxed md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <h3 className="text-charbon font-sans text-sm font-bold uppercase tracking-[0.18em]">
                Ce qu&apos;on refuse
              </h3>
              <ul className="mt-8 space-y-5">
                {refuses.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      aria-hidden
                      className="bg-grey/10 text-grey mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    >
                      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                        <path
                          d="M5 5l10 10M15 5L5 15"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-grey text-base leading-relaxed md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/manifeste" variant="orange-outline">
            Lire le manifeste complet →
          </Button>
        </div>
      </Container>
    </section>
  )
}
