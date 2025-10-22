import TimelinePortfolio from '@/components/TimelinePortfolioFixed'
import ThemeProvider from '@/components/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <TimelinePortfolio />
      </main>
    </ThemeProvider>
  )
}