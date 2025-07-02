'use client'

import { motion } from 'framer-motion'
import { ProfileCard } from './cards/profile-card'
import { GitHubCard } from './cards/github-card'
import { TwitterCard } from './cards/twitter-card'
import { LinkedInCard } from './cards/linkedin-card'
import { EmailCard } from './cards/email-card'
import { CoffeeCard } from './cards/coffee-card'
import { ResumeCard } from './cards/resume-card'
import { WebsiteCard } from './cards/website-card'
import { FacebookCard } from './cards/facebook-card'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 grid-rows-8 md:grid-rows-4 gap-4 max-w-4xl mx-auto min-h-screen md:h-screen md:max-h-[800px] p-4 md:p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Profile Card - Large (2x2) */}
      <div className="col-span-2 row-span-2">
        <ProfileCard />
      </div>
      
      {/* GitHub Card */}
      <div className="col-span-1 row-span-1">
        <GitHubCard />
      </div>
      
      {/* Twitter Card */}
      <div className="col-span-1 row-span-1">
        <TwitterCard />
      </div>
      
      {/* LinkedIn Card */}
      <div className="col-span-1 row-span-1">
        <LinkedInCard />
      </div>
      
      {/* Email Card */}
      <div className="col-span-1 row-span-1">
        <EmailCard />
      </div>
      
      {/* Coffee Card */}
      <div className="col-span-1 row-span-1">
        <CoffeeCard />
      </div>
      
      {/* Resume Card */}
      <div className="col-span-1 row-span-1">
        <ResumeCard />
      </div>
      
      {/* Website Card */}
      <div className="col-span-1 row-span-1">
        <WebsiteCard />
      </div>
      
      {/* Facebook Card */}
      <div className="col-span-1 row-span-1">
        <FacebookCard />
      </div>
    </motion.div>
  )
}