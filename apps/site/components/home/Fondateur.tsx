import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import { Placeholder } from '../Placeholder'

export function Fondateur() {
  return (
    <section className="bg-soft">
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Placeholder
            ratio="4/5"
            label="Portrait Henri-Pierre Ouhibi (fondateur APEXER). À brancher."
          />
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>POUR LES OPÉRATEURS COMMERCIAUX D&apos;ÉLITE</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Devenir l&apos;opérateur territorial du système APEXER.
          </h2>
          <blockquote className="border-gold mt-8 border-l-2 pl-6 font-serif text-lg italic leading-relaxed text-black md:text-xl">
            « Nous cherchons 200 personnes capables de tenir le standard APEXER sur leur territoire.
            Pas des coachs. Pas des formateurs. Pas des consultants. Des opérateurs.
            <footer className="text-gold-deep mt-3 block font-sans text-sm font-semibold not-italic tracking-tight">
              — Henri-Pierre Ouhibi, fondateur APEXER »
            </footer>
          </blockquote>
          <p className="font-body mt-8 max-w-2xl text-base leading-relaxed text-black md:text-lg">
            Les Maîtres-Forgerons Fondateurs ne sont pas des franchisés au sens classique. Ils
            achètent une licence, suivent une formation initiale exigeante, animent une Forge
            hebdomadaire dans leur bassin, et perçoivent 75% des revenus générés sur leur territoire
            (80% pour les 30 Pionniers). Investissement initial : 2 500 € (1 750 € pour les
            Pionniers).
          </p>
          <div className="mt-10">
            <Button href="/candidater" variant="primary">
              Comprendre le statut MFF
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
