import { CardGrid } from '../components/CardGrid'
import { PortfolioCard } from '../components/PortfolioCard'
import { IntelligenceGrid } from '../components/IntelligenceGrid'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { getCards, getPlayers } from '../lib/data'
import Link from 'next/link'

export default function Home() {
  const cards = getCards()
  const players = getPlayers()
  
  // Calculate stats
  const totalCards = cards.length
  const totalPlayers = players.length
  const trendingCards = cards.filter(c => (c.momentumScore || 0) > 0)
  const trendingUp = trendingCards.length
  const psaCards = cards.filter(c => c.gradedCards.some(gc => gc.grader === 'PSA')).length

  // Calculate mock portfolio (sum of fair value scores * 100)
  const portfolioValue = cards.reduce((sum, card) => sum + ((card.fairValueScore || 0) * 100), 0)
  const dailyChange = portfolioValue * 0.02 // Mock 2% daily change
  const topGainer = trendingCards[0]?.player.name || '—'
  const topGainerChange = trendingCards[0]?.momentumScore || 0

  return (
    <div className="space-y-12">
      {/* Hero + Portfolio Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {/* Left: Hero Text */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                Track <span className="gradient-text">Graded</span> Cards
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-6">
                Track PSA, BGS, and SGC graded baseball cards. Market momentum, fair value scores, and recent sales data for collectors and investors.
              </p>
              <div className="flex gap-3">
                <Link 
                  href="/cards" 
                  className="btn-primary"
                >
                  Browse Cards →
                </Link>
                <Link 
                  href="/players" 
                  className="btn-secondary"
                >
                  View Players
                </Link>
              </div>
            </div>

            {/* Right: Portfolio Card */}
            <div className="lg:col-span-1">
              <PortfolioCard
                totalValue={portfolioValue}
                dailyChange={dailyChange}
                dailyChangePercent={2.1}
                cardsTracked={totalCards}
                topGainer={topGainer}
                topGainerChange={topGainerChange}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence */}
      <section>
        <IntelligenceGrid cards={cards} />
      </section>

      {/* Featured Cards */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Featured Cards</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {totalPlayers} players • {totalCards} cards tracked
            </p>
          </div>
          <Link href="/cards" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm">
            View all 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <CardGrid cards={cards.slice(0, 8)} />
      </section>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="glass-card p-4 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]">
          <AnimatedCounter value={totalCards} className="text-2xl font-bold text-white" />
          <p className="text-xs text-muted-foreground mt-0.5">Cards Tracked</p>
        </div>
        <div className="glass-card p-4 hover:border-violet-400/30 transition-all duration-300 hover:scale-[1.02]">
          <AnimatedCounter value={totalPlayers} className="text-2xl font-bold text-white" />
          <p className="text-xs text-muted-foreground mt-0.5">Players</p>
        </div>
        <div className="glass-card p-4 hover:border-cyan-400/30 transition-all duration-300 hover:scale-[1.02]">
          <AnimatedCounter value={psaCards} className="text-2xl font-bold text-cyan-400" />
          <p className="text-xs text-muted-foreground mt-0.5">PSA Graded</p>
        </div>
        <div className="glass-card p-4 hover:border-emerald-400/30 transition-all duration-300 hover:scale-[1.02]">
          <AnimatedCounter value={trendingUp} prefix="+" className="text-2xl font-bold text-emerald-400" />
          <p className="text-xs text-muted-foreground mt-0.5">Trending Up</p>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-12 border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Browse Cards</h3>
            <p className="text-muted-foreground text-sm">Search and filter through graded cards</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Check Metrics</h3>
            <p className="text-muted-foreground text-sm">View fair value & momentum scores</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Track Sales</h3>
            <p className="text-muted-foreground text-sm">Monitor recent sales & price history</p>
          </div>
        </div>
      </section>
    </div>
  )
}