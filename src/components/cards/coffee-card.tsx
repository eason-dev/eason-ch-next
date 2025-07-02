'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

export function CoffeeCard() {
  return (
    <BentoCard 
      href="https://www.buymeacoffee.com/easonchang"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500"
        >
          <Coffee className="h-6 w-6 text-white" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Coffee</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Support me</p>
        </div>
      </div>
    </BentoCard>
  )
}