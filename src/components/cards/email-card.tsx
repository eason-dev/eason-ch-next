'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function EmailCard() {
  return (
    <BentoCard 
      href="mailto:eason@easonchang.com"
      className="bg-gradient-to-br from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-2xl bg-green-500"
        >
          <Mail className="h-6 w-6 text-white" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Get in touch</p>
        </div>
      </div>
    </BentoCard>
  )
}