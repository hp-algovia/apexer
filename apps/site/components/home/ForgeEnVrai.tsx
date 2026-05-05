import { Container } from '../Container'
import { Eyebrow } from '../Eyebrow'
import { Button } from '../Button'
import { Placeholder } from '../Placeholder'

export function ForgeEnVrai() {
  return (
    <section className="bg-white">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <Placeholder
            ratio="21/9"
            label="P04 — La Forge en vrai (groupe en séance hebdomadaire). À brancher."
          />
        </div>
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Eyebrow>LE FORMAT FORGE</Eyebrow>
          <h2 className="text-navy mt-5 font-sans text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Une heure trente par semaine. Six séquences. Ne pas réinventer.
          </h2>
          <div className="font-body mt-8 space-y-6 text-left text-base leading-relaxed text-black md:text-lg">
            <p>
              Les sept pratiques ne se transmettent pas par formation. Elles s&apos;installent en
              présence d&apos;autres qui les tiennent — et qui demandent des comptes. C&apos;est le
              rôle de la Forge.
            </p>
            <p>
              Une Forge réunit 8 à 12 commerciaux d&apos;industries non concurrentes, animée par un
              Maître-Forgeron Fondateur certifié. Toutes les semaines, à un créneau fixe, pour une
              heure trente strictement tenue.
            </p>
            <p>
              Le format est propriétaire APEXER. Six séquences, durées calibrées, transitions
              précises. Aucune Forge ne s&apos;écarte du standard. C&apos;est ce qui rend la marque
              APEXER fiable et donc rentable.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/forge" variant="secondary">
              Voir le format complet
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
