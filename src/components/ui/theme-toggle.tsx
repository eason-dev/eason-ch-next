'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('Theme Debug:', { theme, resolvedTheme })
  }, [theme, resolvedTheme])

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="h-5 w-5" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => {
        const newTheme = isDark ? 'light' : 'dark'
        console.log('Switching theme to:', newTheme)
        setTheme(newTheme)
      }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group shadow-lg"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
      <div className="sr-only">Current: {resolvedTheme}</div>
    </button>
  )
}