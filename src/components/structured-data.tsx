'use client'

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Eason Chang",
    "alternateName": "張楹翔",
    "jobTitle": "Fullstack Engineer",
    "description": "Fullstack Engineer, Maker, and Indie-hacker",
    "url": "https://eason.ch",
    "sameAs": [
      "https://easonchang.com",
      "https://www.linkedin.com/in/easonchang101/",
      "https://github.com/Kamigami55",
      "https://twitter.com/EasonChang_me",
      "https://www.facebook.com/chang.ying.hsiang"
    ],
    "email": "eason@easonchang.com",
    "nationality": "Taiwan",
    "knowsAbout": [
      "Fullstack Development",
      "Web Development",
      "Software Engineering",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://eason.ch"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}