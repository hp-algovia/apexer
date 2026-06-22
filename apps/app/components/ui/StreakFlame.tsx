type StreakFlameProps = {
  count: number
  className?: string
}

// Indicateur de série : discret à 0, chaud et vivant dès qu'il monte.
export function StreakFlame({ count, className }: StreakFlameProps) {
  const active = count > 0
  const hot = count >= 7

  const tone = !active
    ? 'bg-forge text-fumee border border-transparent'
    : hot
      ? 'bg-feu/15 text-feu border border-feu/30 shadow-[0_0_16px_rgba(255,107,53,0.25)]'
      : 'bg-feu/10 text-feu border border-feu/20'

  return (
    <span
      className={[
        'inline-flex items-center gap-1 rounded-full px-3 py-1',
        'font-mono text-sm font-semibold',
        active ? 'animate-pulse-logo' : '',
        tone,
        className ?? '',
      ].join(' ')}
      title={`${count} jour${count > 1 ? 's' : ''} consécutif${count > 1 ? 's' : ''}`}
    >
      <span aria-hidden className={active ? 'animate-flame-flicker' : ''}>
        🔥
      </span>
      {count}
    </span>
  )
}
