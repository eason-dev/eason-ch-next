import { BentoGrid } from '@/components/bento-grid'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative">
      <ThemeToggle />
      <BentoGrid />
    </main>
  )
}
