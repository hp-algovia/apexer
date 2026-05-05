import { Container } from '../Container'
import { Button } from '../Button'
import { FadeIn } from '../FadeIn'

export function DernierPunch() {
  return (
    <section className="bg-white">
      <Container className="py-32 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-charbon font-sans text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-7xl">
              Vous avez deux choix.
            </h2>
            <p className="font-body text-grey mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
              Continuer à compter sur votre motivation, et constater dans 6 mois que rien n&apos;a
              tenu. Ou installer le système qui ne lâche pas.
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="mt-14 flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center">
                <Button href="/candidater" variant="orange" size="lg" className="w-full sm:w-auto">
                  Postuler à une Forge
                </Button>
                <p className="font-body text-grey mt-3 text-xs">89€/mois · 1 mois d&apos;essai</p>
              </div>
              <div className="flex flex-col items-center">
                <Button
                  href="/ouvrir-une-forge"
                  variant="gold-outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ouvrir une Forge
                </Button>
                <p className="font-body text-grey mt-3 text-xs">Devenir Bâtisseur APEXER</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={240}>
            <blockquote className="text-grey mx-auto mt-20 max-w-3xl font-serif text-lg italic leading-relaxed md:text-xl">
              « Ce n&apos;est pas parce qu&apos;ils sont les meilleurs qu&apos;ils le font.
              <br />
              Mais parce qu&apos;ils le font qu&apos;ils sont les meilleurs. »
            </blockquote>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
