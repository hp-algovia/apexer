type ProtocolBarProps = {
  name: string
  icon?: string
  score: number // 0-100
  isWeakest?: boolean
  className?: string
}

// Barre de score d'un protocole (utilisée dans le dashboard étape).
export function ProtocolBar({ name, icon, score, isWeakest, className }: ProtocolBarProps) {
  const clamped = Math.min(100, Math.max(0, score))
  return (
    <div className={className}>
      <div className="mb-1 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm text-white">
          {icon ? <span aria-hidden>{icon}</span> : null}
          {name}
          {isWeakest ? (
            <span className="text-alerte text-xs font-medium uppercase tracking-wider">
              à renforcer
            </span>
          ) : null}
        </span>
        <span className="text-fumee font-mono text-sm">{Math.round(clamped)}%</span>
      </div>
      <div className="bg-acier h-2 w-full overflow-hidden rounded-full">
        <div
          className={['h-full rounded-full', isWeakest ? 'bg-alerte' : 'bg-feu'].join(' ')}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
