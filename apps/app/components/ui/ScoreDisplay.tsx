type ScoreDisplayProps = {
  score: number
  max?: number
  label?: string
  className?: string
}

export function ScoreDisplay({ score, max = 100, label, className }: ScoreDisplayProps) {
  return (
    <div className={['flex items-baseline gap-2', className ?? ''].join(' ')}>
      {label ? (
        <span className="text-fumee text-sm font-medium uppercase tracking-wider">{label}</span>
      ) : null}
      <span className="font-mono text-2xl font-bold text-white">{score}</span>
      <span className="text-fumee font-mono text-sm">/{max}</span>
    </div>
  )
}
