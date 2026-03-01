import Link from 'next/link'
import { Card } from '../lib/data'

interface CardGridProps {
  cards: Card[]
}

function getGradeColor(grader: string) {
  switch (grader) {
    case 'PSA': return 'bg-red-600 ring-red-600/20'
    case 'BGS': return 'bg-blue-600 ring-blue-600/20'
    case 'SGC': return 'bg-green-600 ring-green-600/20'
    default: return 'bg-slate-600 ring-slate-600/20'
  }
}

function getMomentumIndicator(score?: number) {
  if (score === undefined) return { icon: '→', color: 'text-muted-foreground' }
  if (score > 5) return { icon: '↗', color: 'text-green-400' }
  if (score < -5) return { icon: '↘', color: 'text-red-400' }
  return { icon: '→', color: 'text-muted-foreground' }
}

export function CardGrid({ cards }: CardGridProps) {
  if (cards.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="text-muted-foreground">No cards found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card) => {
        const momentum = getMomentumIndicator(card.momentumScore)
        
        return (
          <Link
            key={card.id}
            href={`/cards/${card.slug}`}
            className="group block glass-card p-4 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="aspect-[2/3] relative mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-violet-500/10 to-purple-500/10">
              {card.imageUrl ? (
                <img 
                  src={card.imageUrl} 
                  alt={`${card.player.name} ${card.set.year} ${card.set.brand}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">⚾</span>
                </div>
              )}
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Momentum badge */}
              <div className="absolute top-2 right-2">
                <span className={`flex items-center gap-0.5 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-sm font-bold ${momentum.color}`}>
                  {card.fairValueScore}
                  <span className="text-xs">{momentum.icon}</span>
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-lg leading-tight text-white group-hover:text-violet-400 transition-colors line-clamp-1">
                {card.player.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {card.set.year} {card.set.brand} #{card.number}
              </p>
              
              {/* Graded badges */}
              {card.gradedCards.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {card.gradedCards.slice(0, 3).map((gc) => (
                    <span
                      key={gc.id}
                      className={`px-2 py-0.5 rounded-md text-xs font-bold text-white ring-1 ${getGradeColor(gc.grader)}`}
                    >
                      {gc.grader} {gc.grade}
                    </span>
                  ))}
                  {card.gradedCards.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-xs text-muted-foreground bg-muted">
                      +{card.gradedCards.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}