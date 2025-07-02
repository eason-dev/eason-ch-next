'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export function TwitterCard() {
  return (
    <BentoCard 
      href="https://twitter.com/EasonChang_me"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -10 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-2xl bg-blue-500"
        >
          <Twitter className="h-6 w-6 text-white fill-current" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Twitter</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">@EasonChang_me</p>
        </div>
      </div>
    </BentoCard>
  )
}