import Image from 'next/image'
import { Container } from '../Container'
import { Button } from '../Button'

/**
 * HERO MANIFESTE — Le rendez-vous au sommet.
 *
 * Photo de fond : /public/hero/sommet-forge.jpg (1920x1080 minimum, 16:9 ou 21:9, ~350 Ko).
 * Scène : 5 silhouettes en arc sur un sommet alpin français au lever du soleil
 * (la Forge collective qui contemple, le Bâtisseur légèrement en avant).
 *
 * Double sens APEXER incarné dans le visuel :
 *  - APEX = le sommet atteint
 *  - RENDEZ-VOUS = les 5 réunis là-haut, ensemble
 *  - AU SOMMET = la promesse fondatrice
 */
export function HeroManifeste() {
  return (
    <section className="bg-charbon relative min-h-[88vh] w-full overflow-hidden md:min-h-screen">
      {/* IMAGE DE FOND PLEIN ÉCRAN */}
      <Image
        src="/hero/sommet-forge.jpg"
        alt="Cinq silhouettes en arc sur un sommet alpin français au lever du soleil, contemplant ensemble la mer de nuages en contrebas"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      {/* VOILE DÉGRADÉ — préserve le ciel doré à droite, assombrit la zone texte à gauche */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,15,15,0.45) 0%, rgba(15,15,15,0.15) 30%, rgba(15,15,15,0.5) 65%, rgba(15,15,15,0.92) 100%), linear-gradient(90deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.15) 50%, rgba(15,15,15,0) 100%)',
        }}
      />

      {/* Halo orange APEXER en bas à gauche, écho au lever de soleil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 45% at 15% 100%, rgba(249,115,22,0.28) 0%, rgba(249,115,22,0) 65%)',
        }}
      />

      {/* CONTENU — aligné en bas à gauche */}
      <Container className="relative z-10 flex min-h-[88vh] flex-col justify-end pb-20 pt-32 md:min-h-screen md:pb-32 md:pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow — manifeste APEXER en une ligne */}
          <p className="text-orange font-sans text-[11px] font-bold uppercase tracking-[0.3em] md:text-xs">
            APEX · RENDEZ-VOUS AU SOMMET
          </p>

          {/* Titre Manifeste — serif italique, écho aux 5 Observations */}
          <h1 className="mt-7 font-serif text-5xl font-bold italic leading-[0.95] tracking-[-0.02em] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl lg:text-[88px]">
            L&apos;<span className="text-orange">action</span> forge
            <br />
            l&apos;excellence.
          </h1>

          {/* Sous-titre — pose le produit sans parler prix */}
          <p className="font-body mt-9 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Pas une formation. Pas un coaching. Une infrastructure de Forges qui installe chez vous
            le système des meilleurs commerciaux français.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/candidater" variant="orange" size="lg">
              Postuler à une Forge
            </Button>
            <Button
              href="/ouvrir-une-forge"
              size="lg"
              className="border border-white/40 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/15"
            >
              Ouvrir une Forge
            </Button>
          </div>
          <p className="font-body mt-5 text-xs text-white/70 md:text-sm">
            Premier atelier offert · Sans engagement
          </p>
        </div>
      </Container>

      {/* Indicateur de scroll */}
      <div
        aria-hidden
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/60 md:flex"
      >
        <span>Scroll</span>
        <span className="h-[18px] w-px bg-white/40" />
        <svg
          viewBox="0 0 12 18"
          className="h-4 w-3 animate-bounce text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 1v16M1 12l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
