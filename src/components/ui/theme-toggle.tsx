'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card/80 backdrop-blur-md border border-border hover:bg-accent transition-all duration-300 group shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-foreground group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-foreground group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  )
}