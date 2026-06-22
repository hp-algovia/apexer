type CoachingMessageProps = {
  message: string
  className?: string
}

// Message de coaching — accent bordure feu à gauche.
export function CoachingMessage({ message, className }: CoachingMessageProps) {
  return (
    <div
      className={[
        'border-feu bg-forge rounded-md border-l-2 px-4 py-4 text-white',
        className ?? '',
      ].join(' ')}
    >
      <p className="text-feu text-sm font-medium uppercase tracking-wider">Coaching</p>
      <p className="mt-2 leading-relaxed">{message}</p>
    </div>
  )
}
