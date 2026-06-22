type CardProps = {
  children: React.ReactNode
  className?: string
}

// Carte primaire : ce qui porte l'action (mission du jour, programme, score).
// Bordure feu à gauche + ligne de lueur en haut + fond légèrement plus clair.
export function CardPrimary({ children, className }: CardProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-lg bg-[#141414] p-5',
        'border-y-acier border-r-acier border-l-feu border-y border-l-[3px] border-r',
        'shadow-[0_0_30px_rgba(255,107,53,0.04)]',
        className ?? '',
      ].join(' ')}
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, #FF6B35 0%, transparent 60%)' }}
      />
      {children}
    </div>
  )
}
