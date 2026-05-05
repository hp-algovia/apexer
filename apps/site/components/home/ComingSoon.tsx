import Link from 'next/link'
import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { FadeIn } from '../FadeIn'

const items = [
  {
    name: 'CONNECT',
    body: 'Pour ceux qui veulent commencer en ligne, sans présentiel.',
    href: '/wait-list?product=connect',
  },
  {
    name: 'TEAM',
    body: 'Pour les entreprises qui veulent installer le système chez tous leurs commerciaux.',
    href: '/wait-list?product=team',
  },
  {
    name: 'YOUNG',
    body: 'Pour les commerciaux 16-25 ans qui démarrent.',
    href: '/wait-list?product=young',
  },
]

export function ComingSoon() {
  return (
    <section className="bg-off relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(70% 50% at 100% 0%, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0) 60%)',
        }}
      />
      <Container className="relative z-10 py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <Eyebrow>BIENTÔT</Eyebrow>
            <h2 className="text-charbon mt-6 font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              APEXER s&apos;élargit en 2027.
            </h2>
            <p className="font-body text-grey mt-6 text-lg leading-relaxed md:text-xl">
              La performance commerciale n&apos;est qu&apos;un commencement.
            </p>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {items.map((item, idx) => (
            <FadeIn key={item.name} delay={idx * 100}>
              <article className="border-border ease-apexer hover:border-orange/60 hover:shadow-medium group flex h-full flex-col rounded-xl border bg-white p-8 opacity-[0.92] transition-all duration-300 hover:-translate-y-1 hover:opacity-100">
                <span className="bg-orange-soft text-orange-deep self-start rounded-full px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em]">
                  BIENTÔT 2027
                </span>
                <h3 className="text-charbon mt-5 font-sans text-2xl font-bold tracking-[-0.01em]">
                  {item.name}
                </h3>
                <p className="font-body text-grey mt-4 text-base leading-relaxed">{item.body}</p>
                <Link
                  href={item.href}
                  className="text-orange hover:text-orange-deep mt-auto pt-8 font-sans text-sm font-semibold transition-colors"
                >
                  Être prévenu de l&apos;ouverture →
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
