'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { getStage } from '@/lib/mont-blanc/stages'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function generateToken() {
  return crypto.randomUUID().replace(/-/g, '')
}

export default function StageTemoinPage() {
  const params = useParams<{ stageId: string }>()
  const supabase = createClient()
  const stage = getStage(params.stageId)

  const [name, setName] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!stage) return
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return
      const { data: existing } = await supabase
        .from('stage_witness_requests')
        .select('witness_name, share_token, status')
        .eq('user_id', user.id)
        .eq('stage_id', stage!.id)
        .maybeSingle()
      if (existing) {
        setName(existing.witness_name)
        setToken(existing.share_token)
        setStatus(existing.status)
      }
    }
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!stage) return notFound()

  const link = token
    ? `${typeof window !== 'undefined' ? window.location.origin : ''}/temoin/${token}`
    : ''

  async function generate() {
    if (!stage || name.trim().length < 2) return
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return

    const newToken = generateToken()
    const { error } = await supabase.from('stage_witness_requests').insert({
      user_id: user.id,
      stage_id: stage.id,
      witness_name: name.trim(),
      share_token: newToken,
    })
    if (!error) {
      setToken(newToken)
      setStatus('pending')
    }
    setLoading(false)
  }

  async function copy() {
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="flex min-h-dvh flex-col px-6 py-10">
      <p className="text-feu text-sm font-medium uppercase tracking-wider">Preuve externe</p>
      <h1 className="mt-2 font-sans text-3xl font-black text-white">Un regard extérieur</h1>
      <p className="text-fumee mt-2">
        Choisis une personne proche qui peut témoigner de ton évolution. Elle répondra à 3
        questions, anonymement.
      </p>

      <div className="mt-8 flex flex-1 flex-col gap-4">
        {status === 'completed' ? (
          <Card className="border-valide/50">
            <p className="font-sans font-bold text-white">{name} a répondu. Merci à lui.</p>
            <p className="text-fumee mt-2 text-sm">
              Son retour apparaît dans ton bilan de fin d’étape.
            </p>
          </Card>
        ) : (
          <>
            <div>
              <label htmlFor="witness-name" className="text-fumee text-sm font-medium">
                Prénom de ton témoin
              </label>
              <input
                id="witness-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex. Camille"
                maxLength={40}
                className="border-acier bg-forge placeholder:text-fumee focus:border-feu mt-2 w-full rounded-md border px-4 py-3.5 text-base text-white focus:outline-none"
              />
            </div>

            {token ? (
              <Card>
                <p className="text-fumee text-sm">Lien à envoyer à {name}</p>
                <p className="mt-2 break-all font-mono text-sm text-white">{link}</p>
                <Button variant="secondary" fullWidth className="mt-4" onClick={copy}>
                  {copied ? 'Lien copié ✓' : 'Copier le lien'}
                </Button>
              </Card>
            ) : null}
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 pb-6">
        {status !== 'completed' && !token ? (
          <Button fullWidth onClick={generate} disabled={loading || name.trim().length < 2}>
            {loading ? 'Génération…' : 'Générer le lien'}
          </Button>
        ) : null}
        <Link
          href={`/mont-blanc/${stage.id}/dashboard`}
          className="text-fumee text-center text-sm transition-colors hover:text-white"
        >
          Retour au tableau de bord
        </Link>
      </div>
    </main>
  )
}
