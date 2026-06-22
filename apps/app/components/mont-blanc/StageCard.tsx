import { Card } from '@/components/ui/Card'
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
}

function StatusBadge({ status }: { status: StageStatus }) {
  if (status === 'completed') {
    return <span className="text-valide text-xs font-medium uppercase tracking-wider">Terminé</span>
  }
  if (status === 'in_progress') {
    return <span className="text-feu text-xs font-medium uppercase tracking-wider">En cours</span>
  }
  return <span className="text-fumee text-xs font-medium uppercase tracking-wider">Bientôt</span>
}

function CardBody({
  name,
  subtitle,
  durationDays,
  status,
  progress,
}: Omit<StageCardProps, 'href'>) {
  return (
    <Card className={status === 'locked' ? 'opacity-60' : 'border-feu/40'}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-sans text-lg font-bold text-white">{name}</p>
          {subtitle ? <p className="text-fumee mt-1 text-sm">{subtitle}</p> : null}
        </div>
        <StatusBadge status={status} />
      </div>
      <p className="text-fumee mt-3 font-mono text-xs">{durationDays} jours</p>
      {status === 'in_progress' && typeof progress === 'number' ? (
        <ProgressBar value={progress} className="mt-3" />
      ) : null}
    </Card>
  )
}

// Carte d'une étape dans le hub Mont Blanc.
export function StageCard(props: StageCardProps) {
  if (props.status === 'locked' || !props.href) {
    return <CardBody {...props} />
  }
  return (
    <Link href={props.href} className="block">
      <CardBody {...props} />
    </Link>
  )
}
