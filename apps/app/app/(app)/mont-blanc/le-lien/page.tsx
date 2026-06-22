import { ProtocolsSheet } from '@/components/mont-blanc/ProtocolsSheet'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

// Intro de l'étape Le Lien.
export default function LeLienIntroPage() {
  return (
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">Étape 1</p>
      <h1 className="mt-2 font-sans text-5xl font-black text-white">Le Lien</h1>
      <p className="text-fumee mt-2 text-lg">Créer la confiance avant de chercher l’impact.</p>

      <div className="mt-8 flex flex-1 flex-col gap-4 text-white">
        <p>
          Pendant 21 jours, tu vas travailler une compétence que tout le monde croit maîtriser : la
          qualité de présence dans la relation.
        </p>
        <p className="text-fumee">
          Tu ne vas pas écrire.
          <br />
          Tu ne vas pas théoriser.
          <br />
          Tu vas agir, choisir, mesurer.
        </p>
      </div>

      <div className="flex flex-col gap-4 pb-6">
        <Link href="/mont-blanc/le-lien/diagnostic" className="block">
          <Button fullWidth>Commencer le diagnostic</Button>
        </Link>
        <ProtocolsSheet />
      </div>
    </main>
  )
}
