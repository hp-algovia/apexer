import { ProtocolsSheet } from '@/components/mont-blanc/ProtocolsSheet'
import { Button } from '@/components/ui/Button'
import { getStage } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

// Intro générique d'une étape.
export default async function StageIntroPage({ params }: { params: Promise<{ stageId: string }> }) {
  const { stageId } = await params
  const stage = getStage(stageId)
  if (!stage) notFound()

  // Gating : étape verrouillée tant que le prérequis n'est pas atteint
  if (stage.requires) {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) redirect('/auth/login')
    const { count } = await supabase
      .from('stage_daily_validations')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('stage_id', stage.requires.stageId)
    if ((count ?? 0) < stage.requires.minDays) redirect('/mont-blanc')
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">
        Étape {stage.stageNumber}
      </p>
      <h1 className="mt-2 font-sans text-5xl font-black text-white">{stage.name}</h1>
      <p className="text-fumee mt-2 text-lg">{stage.subtitle}</p>

      <div className="mt-8 flex flex-1 flex-col gap-4 text-white">
        {stage.introLines.map((line, i) => (
          <p key={i} className={i === 0 ? '' : 'text-fumee whitespace-pre-line'}>
            {line}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-4 pb-6">
        <Link href={`/mont-blanc/${stage.id}/diagnostic`} className="block">
          <Button fullWidth>Commencer le diagnostic</Button>
        </Link>
        <ProtocolsSheet protocols={stage.protocols} />
      </div>
    </main>
  )
}
