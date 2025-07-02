'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export function WebsiteCard() {
  return (
    <BentoCard 
      href="https://easonchang.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 hover:from-indigo-500/30 hover:to-indigo-600/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-2xl bg-indigo-500"
        >
          <Globe className="h-6 w-6 text-white" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Website</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">easonchang.com</p>
        </div>
      </div>
    </BentoCard>
  )
}