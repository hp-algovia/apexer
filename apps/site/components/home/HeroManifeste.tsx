import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
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
          <Eyebrow>LE SYSTÈME DES TOP PERFORMERS COMMERCIAUX</Eyebrow>
          <h1 className="text-charbon mt-8 font-sans text-4xl font-black leading-[1.05] tracking-[-0.02em] md:text-6xl lg:text-7xl">
            <span className="block">
              Ce n&apos;est pas parce qu&apos;ils sont les meilleurs{' '}
              <span className="text-orange">qu&apos;ils le font</span>.
            </span>
            <span className="mt-6 block md:mt-8">
              Mais parce qu&apos;ils le font{' '}
              <span className="text-orange">qu&apos;ils sont les meilleurs</span>.
            </span>
          </h1>
          <p className="font-body text-grey mx-auto mt-10 max-w-3xl text-lg leading-relaxed md:text-xl">
            APEXER installe chez vous le système des top performers commerciaux français. Décortiqué
            pendant 2 ans. Tenu chaque mois par un Bâtisseur sur votre territoire.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
