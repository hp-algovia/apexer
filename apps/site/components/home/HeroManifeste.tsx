import { Container } from '../Container'
import { Button } from '../Button'

export function HeroManifeste() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(120% 80% at 85% 0%, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0) 55%), radial-gradient(80% 60% at 0% 100%, rgba(212,160,74,0.10) 0%, rgba(212,160,74,0) 55%)',
        }}
      />
      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-charbon font-sans text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            L&apos;action forge l&apos;excellence.
          </h1>
          <p className="text-charbon/70 mx-auto mt-12 max-w-3xl font-serif text-xl italic leading-relaxed md:text-2xl">
            «&nbsp;Ce n&apos;est pas parce qu&apos;ils sont les meilleurs qu&apos;ils le font. Mais
            parce qu&apos;ils le font qu&apos;ils sont les meilleurs.&nbsp;»
          </p>
          <p className="font-body text-charbon mx-auto mt-12 max-w-3xl text-lg leading-relaxed">
            Pas une formation. Pas un coaching. Une infrastructure de Forges qui installe chez vous
            le système des meilleurs dans leur domaine — pour 89€/mois.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/candidater" variant="orange" size="lg">
              Postuler à une Forge
            </Button>
            <Button href="/ouvrir-une-forge" variant="orange-outline" size="lg">
              Ouvrir une Forge
            </Button>
          </div>
          <p className="font-body text-grey mt-6 text-sm">
            1 mois d&apos;essai · Premier atelier offert · Sans engagement
          </p>
        </div>
      </Container>
    </section>
  )
}
