import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Placeholder } from '../Placeholder'

const placeholders = [
  { id: 'testimonial-1' },
  { id: 'testimonial-2' },
  { id: 'testimonial-3' },
  { id: 'testimonial-4' },
]

export function Temoignages() {
  return (
    <section className="bg-soft">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <Eyebrow>TÉMOIGNAGES</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Ils tiennent le système APEXER au quotidien.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {placeholders.map((t) => (
            <article
              key={t.id}
              className="border-border/80 shadow-soft flex h-full flex-col gap-6 rounded-lg border bg-white p-8"
              data-testimonial-slot={t.id}
            >
              <div className="flex items-center gap-4">
                <Placeholder
                  ratio="1/1"
                  label="Portrait"
                  className="h-16 w-16 flex-shrink-0 rounded-full"
                />
                <div className="flex-1">
                  <div className="bg-grey-soft/60 h-3 w-32 rounded" aria-hidden />
                  <div className="bg-grey-soft/40 mt-2 h-2.5 w-44 rounded" aria-hidden />
                </div>
              </div>
              <div className="space-y-2" aria-hidden>
                <div className="bg-grey-soft/40 h-3 w-full rounded" />
                <div className="bg-grey-soft/40 h-3 w-[92%] rounded" />
                <div className="bg-grey-soft/40 h-3 w-[78%] rounded" />
                <div className="bg-grey-soft/40 h-3 w-[60%] rounded" />
              </div>
              <p className="text-grey-light font-body mt-auto text-xs italic">
                Témoignage à brancher sur Supabase (table testimonials).
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
