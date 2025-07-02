'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function BentoCard({ 
  children, 
  className = '', 
  href, 
  target, 
  rel, 
  onClick 
}: BentoCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  const baseClasses = `
    relative p-6 rounded-3xl backdrop-blur-md border border-white/10 
    bg-gradient-to-br from-white/5 to-white/10 
    dark:from-gray-900/50 dark:to-gray-800/30
    hover:border-white/20 hover:shadow-2xl hover:shadow-black/20
    transition-all duration-300 cursor-pointer overflow-hidden
    ${className}
  `

  const Component = href ? motion.a : motion.div

  return (
    <Component
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={baseClasses}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      {...hoverVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  )
}