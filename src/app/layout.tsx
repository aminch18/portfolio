import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amin Chouaibi El Azaar | Backend & Platform Engineer',
  description: 'Software engineer with 6+ years of experience building backend systems and distributed platforms. Specialized in .NET, C#, event-driven architectures, data pipelines, and cloud environments.',
  keywords: 'Backend Engineer, Platform Engineer, .NET, C#, AWS, Azure, Software Engineer, Barcelona',
  authors: [{ name: 'Amin Chouaibi El Azaar' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}