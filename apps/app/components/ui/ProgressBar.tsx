type ProgressBarProps = {
  /** 0 à 100 */
  value: number
  className?: string
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))
  return (
    <div
      className={['bg-acier h-2 w-full overflow-hidden rounded-full', className ?? ''].join(' ')}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="bg-feu duration-600 ease-apexer h-full rounded-full transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  )
}
