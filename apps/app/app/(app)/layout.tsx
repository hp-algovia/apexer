import { BottomNav } from '@/components/navigation/BottomNav'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="min-h-dvh pb-24">{children}</div>
      <BottomNav />
    </div>
  )
}
