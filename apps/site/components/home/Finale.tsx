import { Container } from '../Container'
import { Button } from '../Button'

export function Finale() {
  return (
    <section className="bg-navy text-light relative overflow-hidden">
      <div
        className="from-gold/10 absolute inset-0 -z-0 bg-gradient-to-br via-transparent to-transparent"
        aria-hidden
      />
      <Container className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Deux portes d&apos;entrée. Une seule décision.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="border-light/15 hover:border-gold/60 flex flex-col rounded-lg border bg-white/5 p-8 backdrop-blur-sm transition-colors">
            <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-[0.18em]">
              Pour rejoindre une Forge
            </h3>
            <p className="font-body text-light/85 mt-5 text-base leading-relaxed">
              Vous voulez rejoindre une Forge proche de chez vous, animée par un Maître-Forgeron
              certifié. Tarif : 129 €/mois, engagement 3 mois minimum.
            </p>
            <div className="mt-8">
              <Button href="/forge#candidater" variant="primary" className="w-full sm:w-auto">
                Postuler à une Forge
              </Button>
            </div>
          </article>
          <article className="border-light/15 hover:border-gold/60 flex flex-col rounded-lg border bg-white/5 p-8 backdrop-blur-sm transition-colors">
            <h3 className="text-gold font-sans text-xs font-bold uppercase tracking-[0.18em]">
              Pour devenir Maître-Forgeron
            </h3>
            <p className="font-body text-light/85 mt-5 text-base leading-relaxed">
              Vous êtes opérateur commercial confirmé et vous voulez porter le système APEXER sur
              votre territoire.
            </p>
            <div className="mt-8">
              <Button
                href="/candidater"
                variant="secondary"
                className="border-light/40 text-light hover:bg-light hover:text-navy w-full sm:w-auto"
              >
                Comprendre le statut MFF
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
