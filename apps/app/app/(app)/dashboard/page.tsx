import { ApexerLogoAnimated } from '@/components/logo/ApexerLogoAnimated'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { ScoreDisplay } from '@/components/ui/ScoreDisplay'
import { StreakFlame } from '@/components/ui/StreakFlame'
import { progressToNextLevel } from '@/lib/engine/levels'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

// D-01 — Le hub quotidien
export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const today = new Date().toISOString().slice(0, 10)

  const [{ data: profile }, { data: objective }, { data: todayTask }, { data: recentTasks }] =
    await Promise.all([
      supabase.from('profiles').select('*').eq('id', user.id).single(),
      supabase
        .from('objectives')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('tasks')
        .select('*')
        .eq('user_id', user.id)
        .eq('scheduled_date', today)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from('tasks')
        .select('id, status, scheduled_date')
        .eq('user_id', user.id)
        .lte('scheduled_date', today)
        .order('scheduled_date', { ascending: false })
        .limit(5),
    ])

  if (!profile) redirect('/auth/login')

  const firstName = profile.display_name?.split(' ')[0] ?? 'Forgeron'
  const daysLeft = objective?.target_at
    ? Math.max(
        0,
        Math.ceil((new Date(objective.target_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      )
    : null

  return (
    <main className="flex flex-col gap-5 px-6 py-8">
      {/* Header : salut + streak + progression logo */}
      <header className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-sans text-2xl font-black text-white">Salut {firstName}</h1>
            <StreakFlame count={profile.current_streak} />
          </div>
          <p className="text-fumee mt-1 text-sm capitalize">{formatDate(new Date())}</p>
        </div>
        <Link href="/profile" aria-label="Mon profil">
          <ApexerLogoAnimated progress={progressToNextLevel(profile.total_points)} size={56} />
        </Link>
      </header>

      {/* Objectif actif */}
      {objective ? (
        <Card>
          <p className="text-feu text-sm font-medium uppercase tracking-wider">🎯 Objectif actif</p>
          <p className="mt-2 font-sans text-lg font-bold text-white">{objective.title}</p>
          <ProgressBar value={objective.progress_pct ?? 0} className="mt-3" />
          <div className="text-fumee mt-2 flex justify-between font-mono text-xs">
            <span>{Math.round(objective.progress_pct ?? 0)}%</span>
            {daysLeft !== null ? <span>{daysLeft} jours restants</span> : null}
          </div>
        </Card>
      ) : null}

      {/* Tâche du jour */}
      <section>
        <p className="text-fumee mb-3 text-sm font-medium uppercase tracking-wider">
          Ta tâche du jour
        </p>
        {todayTask ? (
          <Card className="border-feu/40">
            <p className="font-sans text-lg font-bold text-white">{todayTask.title}</p>
            {todayTask.micro_script ? (
              <p className="text-fumee mt-2 text-sm">{todayTask.micro_script}</p>
            ) : null}
            <p className="text-fumee mt-3 font-mono text-sm">
              ⏱ ~{todayTask.estimated_minutes ?? 10} min
            </p>
            {todayTask.status === 'completed' ? (
              <p className="text-valide mt-4 font-sans font-bold">✓ Fait — bien joué.</p>
            ) : (
              <Link href={`/task/${todayTask.id}`} className="mt-4 block">
                <Button fullWidth>COMMENCER</Button>
              </Link>
            )}
          </Card>
        ) : (
          <Card className="border-dashed">
            <p className="text-fumee">
              Ta première tâche arrive avec le game loop (Sprint 2). En attendant, tes 3
              micro-actions de profil sont ton plan d’action.
            </p>
          </Card>
        )}
      </section>

      {/* Score de la semaine */}
      <Card>
        <ScoreDisplay label="Score APEXER" score={profile.total_points} max={2500} />
        <p className="text-fumee mt-1 text-xs">
          Niveau {profile.level} — prochain palier à {progressToNextLevel(profile.total_points)}%
        </p>
      </Card>

      {/* Timeline des 5 dernières actions */}
      {recentTasks && recentTasks.length > 0 ? (
        <div className="flex items-center gap-3">
          {recentTasks.map((task) => (
            <span
              key={task.id}
              className={[
                'h-3 w-3 rounded-full',
                task.status === 'completed' ? 'bg-valide' : 'bg-acier',
              ].join(' ')}
              title={task.scheduled_date}
            />
          ))}
          <span className="text-fumee text-xs">5 dernières actions</span>
        </div>
      ) : null}
    </main>
  )
}
