import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import { Placeholder } from '../Placeholder'

export function Hero() {
  return (
    <section className="bg-light relative">
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-7">
          <Eyebrow>LA MÉTHODE DES TOP PERFORMERS COMMERCIAUX FRANÇAIS</Eyebrow>
          <h1 className="text-navy mt-6 font-sans text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Ce n&apos;est pas parce qu&apos;ils sont les meilleurs qu&apos;ils le font. Mais parce
            qu&apos;ils le font qu&apos;ils sont les meilleurs.
          </h1>
          <p className="font-body mt-8 max-w-2xl text-lg leading-relaxed text-black md:text-xl">
            Pendant deux ans, nous avons enquêté sur les commerciaux qui surperforment durablement
            en France. 16 profils, 7 pratiques convergentes. APEXER les a transformées en système
            reproductible — et les déploie sur 130 bassins économiques à travers un réseau de
            Maîtres-Forgerons Fondateurs.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/methode" variant="primary">
              Découvrir la méthode
            </Button>
            <Button href="/forge#candidater" variant="secondary">
              Postuler à une Forge
            </Button>
          </div>
          <p className="text-grey font-body mt-8 text-sm leading-relaxed">
            30 Pionniers en formation · 130 bassins ouverts · Pour 200 Maîtres-Forgerons d&apos;ici
            18 mois
          </p>
        </div>
        <div className="lg:col-span-5">
          <Placeholder
            ratio="4/5"
            label="P01 — Hero homepage. Voir public-assets/illustrations/ (à brancher)."
          />
        </div>
      </Container>
    </section>
  )
}
