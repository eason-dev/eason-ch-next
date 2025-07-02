'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export function ResumeCard() {
  return (
    <BentoCard 
      href="https://www.cakeresume.com/eason-chang"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30"
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
        <motion.div
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ duration: 0.3 }}
          className="p-3 rounded-2xl bg-purple-500"
        >
          <FileText className="h-6 w-6 text-white" />
        </motion.div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">Resume</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">View my CV</p>
        </div>
      </div>
    </BentoCard>
  )
}