'use client'

import { BentoCard } from '@/components/ui/bento-card'
import { motion } from 'framer-motion'

export function ProfileCard() {
  return (
    <BentoCard className="col-span-2 row-span-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col space-y-4">
          <motion.div
            className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full h-full rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl">
              😎
            </div>
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Eason Chang
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              張楹翔
            </p>
            <motion.p 
              className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Fullstack Engineer / Maker / Indie-hacker
            </motion.p>
          </div>
        </div>
        
        <motion.div
          className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Available for projects</span>
        </motion.div>
      </div>
    </BentoCard>
  )
}