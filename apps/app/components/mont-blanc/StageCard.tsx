import { CardPrimary } from '@/components/ui/CardPrimary'
import { ProgressBar } from '@/components/ui/ProgressBar'
import Link from 'next/link'

export type StageStatus = 'in_progress' | 'completed' | 'locked'

type StageCardProps = {
  name: string
  subtitle?: string | null
  durationDays: number
  status: StageStatus
  href?: string
  progress?: number // 0-100, si en cours
  lockedMessage?: string
}

function StatusBadge({ status }: { status: StageStatus }) {
  if (status === 'completed') {
    return <span className="text-valide text-xs font-medium uppercase tracking-wider">Terminé</span>
  }
  if (status === 'in_progress') {
    return <span className="text-feu text-xs font-medium uppercase tracking-wider">En cours</span>
  }
  return (
    <span className="text-fumee text-xs font-medium uppercase tracking-wider">🔒 Verrouillé</span>
  )
}

function StageInner({
  name,
  subtitle,
  durationDays,
  status,
  progress,
  lockedMessage,
}: Omit<StageCardProps, 'href'>) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-tight text-white">
            {name}
          </p>
          {subtitle ? <p className="text-fumee mt-1 text-sm">{subtitle}</p> : null}
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="text-fumee mt-3 font-mono text-xs">{durationDays} jours</p>
      {status === 'in_progress' && typeof progress === 'number' ? (
        <ProgressBar value={progress} className="mt-3" />
      ) : null}
      {status === 'locked' && lockedMessage ? (
        <p className="text-fumee mt-3 text-sm">{lockedMessage}</p>
      ) : null}
    </>
  )
}

// Carte d'une étape dans le hub Mont Blanc.
export function StageCard(props: StageCardProps) {
  if (props.status === 'locked') {
    return (
      <div className="border-acier bg-forge rounded-lg border border-dashed p-5 opacity-50">
        <StageInner {...props} />
      </div>
    )
  }
  const card = (
    <CardPrimary>
      <StageInner {...props} />
    </CardPrimary>
  )
  return props.href ? (
    <Link href={props.href} className="block">
      {card}
    </Link>
  ) : (
    card
  )
}
