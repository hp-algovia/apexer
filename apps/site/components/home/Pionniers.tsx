import Link from 'next/link'
import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Countdown } from '../Countdown'
import { FadeIn } from '../FadeIn'

export function Pionniers() {
  return (
    <section className="bg-orange relative overflow-hidden text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 20%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%), radial-gradient(50% 50% at 80% 90%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 60%)',
        }}
      />
      <Container className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <Eyebrow tone="white">LES 30 PIONNIERS</Eyebrow>
            <h2 className="mt-6 font-sans text-4xl font-black leading-[1.05] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
              30 Bâtisseurs. 30 Forges fondatrices. 30 territoires.
            </h2>
            <p className="font-body mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              APEXER ouvre le 1er septembre 2026 avec 30 Forges Pionnières. Vous voulez en ouvrir
              une sur votre territoire ? Les candidatures ferment le 31 août 2026.
            </p>
          </FadeIn>
          <div className="mt-12">
            <Countdown />
          </div>
          <p className="font-body mt-5 text-sm text-white/85 md:text-base">
            avant fermeture des candidatures Pionniers
          </p>
          <div className="mt-12">
            <Link
              href="/candidater-pionnier"
              className="text-orange shadow-strong ease-apexer hover:bg-off hover:shadow-glow inline-flex items-center justify-center rounded-md bg-white px-8 py-4 font-sans text-base font-bold transition-all duration-200 active:scale-[0.98] md:text-lg"
            >
              Candidater pour devenir Bâtisseur Pionnier →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
