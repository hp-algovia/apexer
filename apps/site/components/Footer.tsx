import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'

const programmes = [
  { href: '/forge', label: 'FORGE' },
  { href: '/apex/mont-blanc', label: 'APEX MONT BLANC' },
  { href: '/apex/kilimandjaro', label: 'APEX KILIMANDJARO' },
  { href: '/apex/himalaya', label: 'APEX HIMALAYA' },
  { href: '/ouvrir-une-forge', label: 'Ouvrir une Forge' },
]

const apexer = [
  { href: '/manifeste', label: 'Le manifeste' },
  { href: '/methode', label: 'Les 5 observations' },
  { href: '/pourquoi-apexer', label: 'Pourquoi APEXER ?' },
  { href: '/cercle-pionniers', label: 'Le Cercle des Pionniers' },
  { href: '/journal', label: 'Journal' },
  { href: '/carrieres', label: 'Carrières' },
]

const legal = [
  { href: '/legal/mentions', label: 'Mentions légales' },
  { href: '/legal/cgv', label: 'CGV' },
  { href: '/legal/confidentialite', label: 'Politique de confidentialité' },
  { href: '/legal/cookies', label: 'Cookies' },
]

export function Footer() {
  return (
    <footer className="border-border bg-off border-t">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <Link href="/" aria-label="APEXER — accueil">
              <Image
                src="/logo-apexer.png"
                alt="APEXER"
                width={200}
                height={56}
                className="h-9 w-auto"
              />
            </Link>
            <p className="font-body text-grey mt-5 max-w-xs text-sm leading-relaxed">
              L&apos;infrastructure de la performance commerciale et humaine durable.
            </p>
            <div className="mt-8">
              <h3 className="text-charbon font-sans text-base font-bold tracking-tight">
                La newsletter qui ne lâche pas.
              </h3>
              <form
                className="mt-4 flex flex-col gap-2 sm:flex-row"
                action="/api/newsletter"
                method="post"
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Votre email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  placeholder="votre@email.fr"
                  className="border-border font-body text-charbon placeholder:text-grey focus:border-orange focus:ring-orange/20 flex-1 rounded-md border bg-white px-4 py-3 text-sm outline-none focus:ring-2"
                />
                <button
                  type="submit"
                  className="bg-orange ease-apexer hover:bg-orange-deep hover:shadow-glow rounded-md px-5 py-3 font-sans text-sm font-semibold text-white transition-all duration-200 active:scale-[0.98]"
                >
                  Je m&apos;inscris
                </button>
              </form>
            </div>
          </div>

          <FooterColumn
            title="Programmes"
            items={programmes}
            extra="Bientôt : CONNECT, TEAM, YOUNG"
          />
          <FooterColumn title="APEXER" items={apexer} />
          <FooterColumn title="Légal & contact" items={legal} contact="hello@apexer.fr" />
        </div>

        <div className="border-border mt-14 flex flex-col gap-6 border-t pt-8 md:flex-row md:items-end md:justify-between">
          <p className="font-body text-grey text-xs">
            © 2026 KAHP SAS · APEXER · Tous droits réservés
          </p>
          <p className="text-grey max-w-xl text-right font-serif text-xs italic leading-relaxed md:text-sm">
            « Ce n&apos;est pas parce qu&apos;ils sont les meilleurs qu&apos;ils le font. Mais parce
            qu&apos;ils le font qu&apos;ils sont les meilleurs. »
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
  extra,
  contact,
}: {
  title: string
  items: { href: string; label: string }[]
  extra?: string
  contact?: string
}) {
  return (
    <div>
      <h3 className="text-charbon font-sans text-xs font-bold uppercase tracking-[0.18em]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-body text-grey hover:text-orange text-sm transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
        {extra ? <li className="font-body text-grey/80 pt-1 text-xs italic">{extra}</li> : null}
        {contact ? (
          <li className="pt-1">
            <a
              href={`mailto:${contact}`}
              className="font-body text-grey hover:text-orange text-sm transition-colors"
            >
              {contact}
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}
