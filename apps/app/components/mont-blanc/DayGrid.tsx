type DayGridProps = {
  totalDays: number
  currentDay: number
  validatedDays: number[]
  missedDays?: number[]
  className?: string
}

// Grille des jours — tableau de bord industriel.
export function DayGrid({
  totalDays,
  currentDay,
  validatedDays,
  missedDays = [],
  className,
}: DayGridProps) {
  const validated = new Set(validatedDays)
  const missed = new Set(missedDays)

  return (
    <div className={['grid grid-cols-7 gap-2', className ?? ''].join(' ')}>
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => {
        const isValidated = validated.has(day)
        const isToday = day === currentDay && !isValidated
        const isMissed = missed.has(day) && !isValidated

        const cls = isValidated
          ? 'bg-valide/20 border-valide/40 text-valide'
          : isToday
            ? 'animate-pulse-logo border-feu bg-feu/15 text-feu'
            : isMissed
              ? 'border-alerte/30 bg-alerte/10 text-alerte'
              : 'border-acier bg-forge text-fumee'

        return (
          <div
            key={day}
            className={[
              'flex aspect-square items-center justify-center rounded-md border font-mono text-xs font-bold',
              cls,
            ].join(' ')}
            title={`Jour ${day}`}
          >
            {isValidated ? '✓' : day}
          </div>
        )
      })}
    </div>
  )
}
