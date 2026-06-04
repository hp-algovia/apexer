type StreakFlameProps = {
  count: number
  className?: string
}

export function StreakFlame({ count, className }: StreakFlameProps) {
  return (
    <span
      className={[
        'bg-forge inline-flex items-center gap-1 rounded-full px-3 py-1',
        'font-mono text-sm font-semibold',
        count > 0 ? 'text-feu' : 'text-fumee',
        className ?? '',
      ].join(' ')}
      title={`${count} jour${count > 1 ? 's' : ''} consécutif${count > 1 ? 's' : ''}`}
    >
      <span aria-hidden className={count > 0 ? 'animate-flame-flicker' : ''}>
        🔥
      </span>
      {count}
    </span>
  )
}
