'use client'

import Link from 'next/link'
import { Card } from '../lib/data'

interface IntelligenceGridProps {
  cards: Card[]
}

export function IntelligenceGrid({ cards }: IntelligenceGridProps) {
  // Sort by momentum (trending up first)
  const trendingCards = [...cards].sort((a, b) => 
    (b.momentumScore || 0) - (a.momentumScore || 0)
  ).slice(0, 6)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Market Intelligence</h2>
          <p className="text-sm text-muted-foreground">High-value cards showing momentum</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trendingCards.map((card) => {
          const momentum = card.momentumScore || 0
          const isUp = momentum > 0
          
          return (
            <Link
              key={card.id}
              href={`/cards/${card.slug}`}
              className="glass-card p-4 hover:border-cyan-400/30 transition-all group card-glow"
            >
              <div className="flex gap-4">
                {/* Thumbnail */}
                <div className="w-16 h-20 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  {card.imageUrl ? (
                    <img 
                      src={card.imageUrl} 
                      alt={card.player.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-2xl">⚾</span>
                  )}
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white truncate">
                    {card.player.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {card.set.year} {card.set.brand}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-cyan-400 font-mono text-sm font-medium">
                      #{card.fairValueScore}
                    </span>
                    <span className="text-white/20">|</span>
                    <span className={`text-sm ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                      {isUp ? '+' : ''}{momentum}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
