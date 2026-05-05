import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import { Placeholder } from '../Placeholder'

export function EnqueteFondatrice() {
  return (
    <section className="bg-white">
      <Container className="grid items-start gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>L&apos;ENQUÊTE FONDATRICE</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Pendant deux ans, nous avons étudié les meilleurs commerciaux français.
          </h2>
          <div className="font-body mt-8 space-y-6 text-base leading-relaxed text-black md:text-lg">
            <p>
              16 profils sélectionnés. Agents immobiliers en élite des bassins parisien et lyonnais.
              Délégués pharmaceutiques en tête des classements nationaux. Assureurs dans le top 5%
              de leurs réseaux. Commerciaux B2B tech qui dépassent leurs quotas année après année.
              Vendeurs automobiles aux meilleures ventes annuelles. Tous ont accepté plus de 30
              heures d&apos;entretien chacun.
            </p>
            <p>
              L&apos;observation a porté sur leur pratique réelle, pas sur leurs récits. Routines
              documentées, indicateurs vérifiés, journées passées en immersion. Ce qui en est
              ressorti n&apos;est pas une nouvelle méthode commerciale. C&apos;est sept pratiques
              convergentes que tous tiennent — quelle que soit leur industrie, leur âge, leur
              tempérament.
            </p>
            <p>
              Ces sept pratiques constituent le socle d&apos;APEXER. Tout le reste — programmes,
              Forges, application, réseau de Maîtres-Forgerons — n&apos;est que
              l&apos;infrastructure qui permet de les installer durablement chez d&apos;autres.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/methode" variant="ghost">
              Lire l&apos;enquête complète →
            </Button>
          </div>
        </div>
        <div className="lg:sticky lg:top-28 lg:col-span-5">
          <Placeholder
            ratio="4/5"
            label="P03 — Enquête fondatrice (immersion / terrain). À brancher."
          />
        </div>
      </Container>
    </section>
  )
}
