'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion'

export function GitHubCard() {
  return (
    <BentoCard 
      href="https://github.com/Kamigami55"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-gray-900/20 to-gray-700/20 hover:from-gray-900/30 hover:to-gray-700/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 rounded-2xl bg-gray-900 dark:bg-white"
        >
          <Github className="h-6 w-6 text-white dark:text-gray-900" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">@Kamigami55</p>
        </div>
      </div>
    </BentoCard>
  )
}