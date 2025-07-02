import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Github, Twitter, Linkedin, Mail, Coffee, FileText, Globe, Facebook } from 'lucide-react'

const features = [
  {
    name: "Eason Chang",
    description: "Fullstack Engineer / Maker / Indie-hacker 😎",
    href: "https://easonchang.com",
    cta: "Visit Website",
    className: "col-span-3 lg:col-span-2 row-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Globe,
  },
  {
    name: "GitHub",
    description: "Open source projects and contributions",
    href: "https://github.com/Kamigami55",
    cta: "View Projects",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-800/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Github,
  },
  {
    name: "Twitter",
    description: "Follow my tech journey and insights",
    href: "https://twitter.com/EasonChang_me",
    cta: "Follow",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-sky-600/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Twitter,
  },
  {
    name: "LinkedIn",
    description: "Professional network and career updates",
    href: "https://www.linkedin.com/in/easonchang101/",
    cta: "Connect",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Linkedin,
  },
  {
    name: "Email",
    description: "Get in touch for collaborations",
    href: "mailto:eason@easonchang.com",
    cta: "Send Email",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Mail,
  },
  {
    name: "Buy Me Coffee",
    description: "Support my work and projects",
    href: "https://www.buymeacoffee.com/easonchang",
    cta: "Support",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Coffee,
  },
  {
    name: "Resume",
    description: "View my professional experience",
    href: "https://www.cakeresume.com/eason-chang",
    cta: "View CV",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: FileText,
  },
  {
    name: "Facebook",
    description: "Connect on social media",
    href: "https://www.facebook.com/chang.ying.hsiang",
    cta: "Add Friend",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-700/20">
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    ),
    Icon: Facebook,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen p-4 lg:p-8 bg-background text-foreground">
      <ThemeToggle />
      
      {/* Debug indicator */}
      <div className="fixed top-6 left-6 z-50 p-2 text-xs bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded">
        <div className="text-black dark:text-white">
          BG: <span className="px-1 bg-background">test</span>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-16 lg:pt-8">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </main>
  )
}
