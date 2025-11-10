import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '../i18n/provider'

export const metadata: Metadata = {
  title: 'Amin Chouaibi El Azaar | Senior Backend Engineer | .NET, AWS, Kafka',
  description: 'Senior Software Engineer at Gartner Digital Markets with 6+ years building scalable distributed systems. Expert in .NET/C#, AWS, Kafka, microservices, event-driven architectures, and cloud platforms. Based in Barcelona, Spain.',
  keywords: [
    'Amin Chouaibi',
    'Backend Engineer',
    'Senior Software Engineer',
    'Platform Engineer',
    '.NET Developer',
    'C# Developer',
    'AWS Expert',
    'Kafka Developer',
    'Microservices Architect',
    'Event-Driven Architecture',
    'Distributed Systems',
    'Cloud Engineer',
    'Barcelona Software Engineer',
    'Gartner Digital Markets',
    'TypeScript Developer',
    'PostgreSQL',
    'Docker Kubernetes',
    'Software Architect',
    'CQRS DDD',
    'Next.js Developer',
    'Full Stack Engineer'
  ].join(', '),
  authors: [{ name: 'Amin Chouaibi El Azaar', url: 'https://aminch18.github.io/portfolio' }],
  creator: 'Amin Chouaibi El Azaar',
  publisher: 'Amin Chouaibi El Azaar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'ca_ES'],
    url: 'https://aminch18.github.io/portfolio',
    title: 'Amin Chouaibi El Azaar | Senior Backend Engineer',
    description: 'Senior Software Engineer specializing in .NET, AWS, Kafka, and distributed systems. Building scalable platforms at Gartner Digital Markets in Barcelona.',
    siteName: 'Amin Chouaibi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amin Chouaibi El Azaar | Senior Backend Engineer',
    description: 'Senior Software Engineer specializing in .NET, AWS, Kafka, and distributed systems.',
  },
  verification: {
    google: 'hGmfp6AhRrVeVaSfBSKhegrWv_6tbzqWZz7Qbf_9NJw',
  },
  alternates: {
    canonical: 'https://aminch18.github.io/portfolio',
    languages: {
      'en': 'https://aminch18.github.io/portfolio',
      'es': 'https://aminch18.github.io/portfolio',
      'ca': 'https://aminch18.github.io/portfolio',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}