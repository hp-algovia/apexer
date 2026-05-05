import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { FadeIn } from '../FadeIn'

const formats = [
  {
    label: 'FORGE MIDI',
    when: '1er mardi du mois · 12h–14h',
    body: 'Déjeuner de travail collectif. Scoreboard hebdomadaire, engagements publics, Marché des recommandations.',
  },
  {
    label: 'FORGE SOIR',
    when: '3ème jeudi du mois · 18h–20h',
    body: 'Session approfondie. Pratiques avancées, mentorat croisé, étude de cas réels.',
  },
  {
    label: 'ATELIER SAMEDI · 15€',
    when: '2 ateliers/mois · 3h le samedi matin',
    body: 'Thématiques rotatives. Premier atelier offert. Ouvert à tous.',
  },
]

export function Rythme() {
  return (
    <section className="bg-off">
      <Container className="py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <Eyebrow>LE RYTHME APEXER</Eyebrow>
            <h2 className="text-charbon mt-6 font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Une Forge par mois. Pas de lâche-prise.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {formats.map((f, idx) => (
            <FadeIn key={f.label} delay={idx * 100}>
              <article className="border-border ease-apexer hover:border-orange/60 hover:shadow-medium group h-full rounded-xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-charbon font-sans text-base font-bold uppercase tracking-[0.04em]">
                  {f.label}
                </h3>
                <p className="text-orange mt-3 font-sans text-sm font-semibold tracking-tight">
                  {f.when}
                </p>
                <p className="font-body text-grey mt-6 text-base leading-relaxed">{f.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={300}>
          <p className="font-body text-grey mx-auto mt-14 max-w-3xl text-center text-base leading-relaxed md:text-lg">
            Plus l&apos;app APEXER : Scoreboard, Carnet Dory, Carte des Forges, Marché des
            recommandations, Mentor matching, Bibliothèque, Engagements publics.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
