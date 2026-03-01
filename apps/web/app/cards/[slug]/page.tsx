import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCard, getCards } from '../../../lib/data'
import { MarketStats } from '../../../components/MarketStats'
import { GradedBadge } from '../../../components/GradedBadge'
import { PriceChart } from '../../../components/PriceChart'
import { PopulationReport } from '../../../components/PopulationReport'
import { PageHeader } from '../../../components/PageHeader'
import { CardDetailClient } from './CardDetailClient'

interface CardPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const cards = getCards()
  return cards.map((card) => ({
    slug: card.slug,
  }))
}

export default async function CardPage({ params }: CardPageProps) {
  const { slug } = await params
  const card = getCard(slug)
  
  if (!card) {
    notFound()
  }

  // Get related cards (same player, other cards)
  const allCards = getCards()
  const relatedCards = allCards.filter(c => c.player.slug === card.player.slug && c.id !== card.id)

  // Generate price history from recent sales
  const priceHistory = card.recentSales?.map(s => s.price).reverse() || []

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cards', href: '/cards' },
          { label: card.player.name }
        ]}
      />

      {/* Card Header */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card Image */}
        <div className="glass-card aspect-[2/3] rounded-2xl overflow-hidden">
          {card.imageUrl ? (
            <img 
              src={card.imageUrl} 
              alt={`${card.player.name} ${card.set.year} ${card.set.brand}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-8xl">⚾</span>
            </div>
          )}
        </div>

        {/* Card Info */}
        <div className="space-y-6">
          <div>
            <Link 
              href={`/players/${card.player.slug}`}
              className="text-[var(--accent)] hover:underline text-lg font-medium"
            >
              {card.player.name}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              {card.set.year} {card.set.brand}
            </h1>
            <p className="text-xl text-muted-foreground mt-1">
              #{card.number}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                {card.player.position}
              </span>
              <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                {card.player.team}
              </span>
            </div>
          </div>

          {/* Market Stats */}
          <MarketStats 
            fairValueScore={card.fairValueScore}
            liquidityIndex={card.liquidityIndex}
            momentumScore={card.momentumScore}
            volatilityScore={card.volatilityScore}
          />

          {/* Action Buttons */}
          <CardDetailClient cardName={`${card.player.name} ${card.set.year}`} />
        </div>
      </div>

      {/* Price Chart & Population Report */}
      <div className="grid md:grid-cols-2 gap-6">
        {priceHistory.length > 0 && (
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Price History</h2>
            <PriceChart data={priceHistory} />
          </div>
        )}
        <div className="glass-card p-6">
          <PopulationReport gradedCards={card.gradedCards} />
        </div>
      </div>

      {/* Graded Versions */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Graded Versions</h2>
        <div className="flex flex-wrap gap-2">
          {card.gradedCards.map((gc) => (
            <GradedBadge key={gc.id} grader={gc.grader} grade={gc.grade} />
          ))}
        </div>
      </div>

      {/* Recent Sales Table */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 border-b border-border/50">
          <h2 className="text-lg font-semibold text-white">Recent Sales</h2>
        </div>
        {card.recentSales && card.recentSales.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 text-sm text-muted-foreground">
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Grade</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Platform</th>
                </tr>
              </thead>
              <tbody>
                {card.recentSales.map((sale, index) => (
                  <tr key={sale.id} className="border-b border-border/50 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="p-4">{sale.date}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold text-white ${
                        sale.grader === 'PSA' ? 'bg-red-600' :
                        sale.grader === 'BGS' ? 'bg-blue-600' :
                        'bg-green-600'
                      }`}>
                        {sale.grader} {sale.grade}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-white">${sale.price.toLocaleString()}</td>
                    <td className="p-4 text-muted-foreground">{sale.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            <p className="text-muted-foreground">No recent sales data available.</p>
          </div>
        )}
      </div>

      {/* Related Cards */}
      {relatedCards.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">More {card.player.name} Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedCards.map(relatedCard => (
              <Link
                key={relatedCard.id}
                href={`/cards/${relatedCard.slug}`}
                className="glass-card p-4 hover:border-[var(--accent)]/30 transition-all"
              >
                <div className="aspect-[2/3] relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                  {relatedCard.imageUrl ? (
                    <img 
                      src={relatedCard.imageUrl} 
                      alt={relatedCard.player.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">⚾</span>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-white">{relatedCard.set.year} {relatedCard.set.brand}</h3>
                <p className="text-sm text-muted-foreground">#{relatedCard.number}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}