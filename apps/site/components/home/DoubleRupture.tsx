import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'

const cards = [
  {
    figure: '87%',
    body: "Pourcentage de commerciaux qui abandonnent la pratique d'une formation classique dans les 3 mois qui suivent. Source : enquête APEXER 2025 sur 412 commerciaux ayant suivi au moins une formation dans les 24 derniers mois.",
  },
  {
    figure: '6 200 €',
    body: "Coût moyen annuel d'investissement par commercial en formation, coaching et événements professionnels. Effet mesuré sur la performance à 12 mois : non significatif statistiquement. Source : enquête APEXER 2025.",
  },
  {
    figure: '15 ans',
    body: 'Durée moyenne de pratique stable des 16 top performers étudiés par APEXER. Tous ont structuré leur métier autour de routines tenues quotidiennement, jamais autour de motivation ponctuelle.',
  },
]

export function DoubleRupture() {
  return (
    <section className="bg-soft border-border/60 border-y">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>LE PROBLÈME</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
            90% des formations commerciales ne tiennent pas 6 mois. Aucune ne tient 5 ans. Une seule
            raison : elles transmettent des contenus, pas des cadres.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.figure}
              className="border-border/80 shadow-soft flex flex-col rounded-lg border bg-white p-8"
            >
              <span className="text-gold-deep font-sans text-4xl font-bold tracking-tight md:text-5xl">
                {card.figure}
              </span>
              <p className="text-grey font-body mt-5 text-sm leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
