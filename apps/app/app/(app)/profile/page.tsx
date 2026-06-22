import { ApexerLogoAnimated } from '@/components/logo/ApexerLogoAnimated'
import { SignOutButton } from '@/components/profile/SignOutButton'
import { Card } from '@/components/ui/Card'
import { ScoreDisplay } from '@/components/ui/ScoreDisplay'
import { StreakFlame } from '@/components/ui/StreakFlame'
import { ARCHETYPES } from '@/lib/constants/archetypes'
import { LEVELS } from '@/lib/constants/levels'
import { progressToNextLevel } from '@/lib/engine/levels'
import { STAGE_ORDER, getStage } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/server'
import type { Archetype } from '@apexer/db'
import Image from 'next/image'
import { redirect } from 'next/navigation'

// Nombre total d'étapes prévues au programme Mont Blanc
const MONT_BLANC_TOTAL_STAGES = 6

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <span className="text-feu font-mono text-2xl font-bold">{value}</span>
      <span className="text-fumee mt-1 text-center text-xs">{label}</span>
    </div>
  )
}

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const [{ data: profile }, { data: validations }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('stage_daily_validations').select('stage_id').eq('user_id', user.id),
  ])
  if (!profile) redirect('/auth/login')

  const archetype = profile.archetype ? ARCHETYPES[profile.archetype as Archetype] : null
  const level = LEVELS.find((l) => l.level === profile.level) ?? LEVELS[0]

  const countByStage: Record<string, number> = {}
  for (const v of validations ?? []) {
    countByStage[v.stage_id] = (countByStage[v.stage_id] ?? 0) + 1
  }
  const activeDays = (validations ?? []).length
  const completedStages = STAGE_ORDER.filter(
    (id) => (countByStage[id] ?? 0) >= (getStage(id)?.durationDays ?? 21),
  ).length

  // Anneau de progression vers le niveau suivant
  const progress = progressToNextLevel(profile.total_points)
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - progress / 100)

  return (
    <main className="flex flex-col items-center gap-6 px-6 py-8">
      {profile.avatar_url ? (
        <Image
          src={profile.avatar_url}
          alt={profile.display_name ?? 'Photo de profil'}
          width={96}
          height={96}
          className="border-feu h-24 w-24 rounded-full border-4 object-cover"
        />
      ) : (
        <div className="border-feu bg-forge text-feu flex h-24 w-24 items-center justify-center rounded-full border-4 font-sans text-3xl font-black">
          {(profile.display_name ?? '?').charAt(0).toUpperCase()}
        </div>
      )}

      <div className="text-center">
        <h1 className="font-sans text-2xl font-black text-white">{profile.display_name}</h1>
        {archetype ? <p className="text-fumee mt-1 text-sm">{archetype.name}</p> : null}
      </div>

      <StreakFlame count={profile.current_streak} />

      {/* Triangle entouré de l'anneau de progression vers le niveau suivant */}
      <div className="relative flex h-[200px] w-[200px] items-center justify-center">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#1A1A1A" strokeWidth="3" />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#FF6B35"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 100 100)"
          />
        </svg>
        <ApexerLogoAnimated progress={progress} size={120} />
      </div>
      <p className="text-feu -mt-2 font-mono text-sm font-semibold">{progress}%</p>

      {/* Stats */}
      <div className="border-acier bg-forge flex w-full items-start justify-between rounded-lg border px-2 py-4">
        <Stat value={String(activeDays)} label="Jours actifs" />
        <div className="bg-acier w-px self-stretch" />
        <Stat value={`${completedStages}/${MONT_BLANC_TOTAL_STAGES}`} label="Étapes terminées" />
        <div className="bg-acier w-px self-stretch" />
        <Stat value={String(profile.total_points)} label="Score" />
      </div>

      <Card className="w-full">
        <ScoreDisplay label="Points" score={profile.total_points} max={2500} />
        <p className="text-fumee mt-2 text-sm">
          Niveau {level.level} — {level.name} · {level.description}
        </p>
      </Card>

      <SignOutButton />
    </main>
  )
}
