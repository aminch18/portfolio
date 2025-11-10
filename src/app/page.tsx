import TimelinePortfolio from '@/components/TimelinePortfolioFixed'
import ThemeProvider from '@/components/ThemeProvider'
import Script from 'next/script'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amin Chouaibi El Azaar",
    "url": "https://aminch18.github.io/portfolio",
    "image": "https://media.licdn.com/dms/image/v2/D4D03AQFifrbYAS7S0g/profile-displayphoto-scale_200_200/B4DZoWWCMfJcAY-/0/1761311467201?e=1763596800&v=beta&t=dIyDiBEsfUcqWsp4jwGb3lPwBwS16jDOQlBCs3aDu_M",
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Gartner Digital Markets"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressCountry": "Spain"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Universitat Oberta de Catalunya"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Escola Pia Mataró"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Universitat de Barcelona"
      }
    ],
    "knowsAbout": [
      "Software Engineering",
      ".NET",
      "C#",
      "AWS",
      "Apache Kafka",
      "Microservices",
      "Event-Driven Architecture",
      "Distributed Systems",
      "Cloud Computing",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/amin-chouaibi-el-azaar/",
      "https://github.com/aminch18"
    ],
    "email": "experimentalaminch@outlook.com",
    "telephone": "+34643174896"
  };

  return (
    <ThemeProvider>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <TimelinePortfolio />
      </main>
    </ThemeProvider>
  )
}