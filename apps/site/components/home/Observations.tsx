import { Container } from '../Container'
import { FadeIn } from '../FadeIn'

const observations = [
  {
    n: '01',
    title: 'ZÉRO CHARGE MENTALE',
    body: 'Ils notent tout. Comme Dory. Et leur tête est libre pour ce qui compte.',
  },
  {
    n: '02',
    title: 'PASSIONNÉS DONC PASSIONNANTS',
    body: 'Ils n’apprennent pas à convaincre. Ils contaminent.',
  },
  {
    n: '03',
    title: 'ILS NE PROSPECTENT PAS',
    body: 'On vous a appris à prospecter. Eux, ils rayonnent.',
  },
  {
    n: '04',
    title: 'ILS ONT TOUS UN MENTOR',
    body: 'Ils savent que l’expérience compte. Ils ne réinventent pas la roue.',
  },
  {
    n: '05',
    title: 'ILS APPRENNENT TOUJOURS',
    body: 'L’humilité comme moteur. L’égo n’a jamais fait performer durablement.',
  },
]

export function Observations() {
  return (
    <section className="bg-off">
      <Container className="py-24 md:py-32">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-charbon font-sans text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              5 observations qui changent tout.
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-20 lg:grid-cols-5">
          {observations.map((obs, idx) => (
            <FadeIn key={obs.n} delay={idx * 80}>
              <article className="border-border ease-apexer hover:border-orange/60 hover:shadow-medium group h-full rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1">
                <div className="text-orange font-sans text-6xl font-black leading-none tracking-[-0.03em]">
                  {obs.n}
                </div>
                <h3 className="text-charbon mt-7 font-sans text-base font-bold uppercase tracking-[0.04em]">
                  {obs.title}
                </h3>
                <p className="font-body text-grey mt-3 text-sm leading-relaxed">{obs.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
