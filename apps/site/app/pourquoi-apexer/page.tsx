import type { Metadata } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { Eyebrow } from '../../components/Eyebrow'
import { Button } from '../../components/Button'

export const metadata: Metadata = {
  title: 'Pourquoi APEXER',
  description:
    "Henri-Pierre Ouhibi raconte la genèse d'APEXER, les 2 années d'observation, les 7 pratiques convergentes, et pourquoi cette infrastructure devait exister maintenant.",
  alternates: { canonical: '/pourquoi-apexer' },
  robots: { index: false, follow: true },
}

export default function PourquoiApexerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                'radial-gradient(120% 80% at 80% 0%, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0) 55%), radial-gradient(80% 60% at 0% 100%, rgba(212,160,74,0.08) 0%, rgba(212,160,74,0) 55%)',
            }}
          />
          <Container className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-24 text-center md:py-32">
            <Eyebrow>POURQUOI APEXER</Eyebrow>
            <h1 className="text-charbon mt-6 max-w-3xl font-sans text-4xl font-black leading-[1.05] tracking-[-0.025em] md:text-6xl">
              Cette page sera bientôt écrite.
            </h1>
            <p className="font-body text-grey mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl">
              Henri-Pierre Ouhibi raconte ici la genèse d&apos;APEXER, les 2 années
              d&apos;observation, les 7 pratiques convergentes, et pourquoi cette infrastructure
              devait exister maintenant. À retrouver très prochainement.
            </p>
            <div className="mt-12">
              <Button href="/" variant="orange">
                Revenir à l&apos;accueil
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
