import { ApexerLogoAnimated } from '@/components/logo/ApexerLogoAnimated'
import { SignOutButton } from '@/components/profile/SignOutButton'
import { Card } from '@/components/ui/Card'
import { ScoreDisplay } from '@/components/ui/ScoreDisplay'
import { StreakFlame } from '@/components/ui/StreakFlame'
import { ARCHETYPES } from '@/lib/constants/archetypes'
import { LEVELS } from '@/lib/constants/levels'
import { progressToNextLevel } from '@/lib/engine/levels'
import { createClient } from '@/lib/supabase/server'
import type { Archetype } from '@apexer/db'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  if (!profile) redirect('/auth/login')

  const archetype = profile.archetype ? ARCHETYPES[profile.archetype as Archetype] : null
  const level = LEVELS.find((l) => l.level === profile.level) ?? LEVELS[0]

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

      {/* Le logo comme barre de progression — grand format */}
      <ApexerLogoAnimated
        progress={progressToNextLevel(profile.total_points)}
        size={200}
        showLabel
      />

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
