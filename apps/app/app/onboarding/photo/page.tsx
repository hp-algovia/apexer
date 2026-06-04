'use client'

import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

// Étape photo — « Montre-nous qui tu es. » (skippable)
export default function PhotoPage() {
  const router = useRouter()
  const supabase = createClient()
  const fileInput = useRef<HTMLInputElement>(null)

  const [preview, setPreview] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0]
    if (!selected) return
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
  }

  async function saveAndContinue() {
    if (!file) {
      router.push('/onboarding/context')
      return
    }
    setLoading(true)
    setError(null)

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      router.push('/auth/login')
      return
    }

    const extension = file.name.split('.').pop() ?? 'jpg'
    const path = `${user.id}/avatar.${extension}`

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, file, { upsert: true })

    if (uploadError) {
      setError('L’envoi de la photo a échoué. Tu pourras la changer plus tard.')
      setLoading(false)
      return
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from('avatars').getPublicUrl(path)

    await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id)

    router.push('/onboarding/context')
  }

  return (
    <main className="flex flex-1 flex-col px-6 py-10">
      <h1 className="font-sans text-3xl font-black text-white">Montre-nous qui tu es.</h1>
      <p className="text-fumee mt-2">Ta photo apparaîtra sur ton profil APEXER.</p>

      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="border-feu bg-forge flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 transition-transform active:scale-[0.98]"
        >
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element -- aperçu blob local
            <img src={preview} alt="Aperçu de ta photo" className="h-full w-full object-cover" />
          ) : (
            <span className="text-fumee px-4 text-center text-sm">
              Appuie pour ajouter une photo
            </span>
          )}
        </button>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          capture="user"
          className="hidden"
          onChange={onFileChange}
        />
        {error ? <p className="text-alerte text-center text-sm">{error}</p> : null}
      </div>

      <div className="flex flex-col gap-3 pb-6">
        <Button fullWidth onClick={saveAndContinue} disabled={loading}>
          {loading ? 'Envoi…' : 'Continuer'}
        </Button>
        {!file ? (
          <button
            type="button"
            onClick={() => router.push('/onboarding/context')}
            className="text-fumee text-center text-sm transition-colors hover:text-white"
          >
            Plus tard
          </button>
        ) : null}
      </div>
    </main>
  )
}
