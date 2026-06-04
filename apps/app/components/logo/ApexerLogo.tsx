type ApexerLogoProps = {
  size?: number
  className?: string
}

// Logo APEXER complet : triangle orange (écosystème) + triangle noir (individu).
// C'est l'état « cible » — pour la version progression, voir ApexerLogoAnimated.
export function ApexerLogo({ size = 64, className }: ApexerLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="APEXER"
    >
      <path d="M50 10L20 90H80L50 10Z" fill="#FF6B35" />
      <path d="M50 45L40 90H60L50 45Z" fill="#000000" />
    </svg>
  )
}
