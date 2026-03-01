'use client'

import { AnimatedCounter } from './AnimatedCounter'

interface PortfolioCardProps {
  totalValue: number
  dailyChange: number
  dailyChangePercent: number
  cardsTracked: number
  topGainer: string
  topGainerChange: number
}

export function PortfolioCard({ 
  totalValue, 
  dailyChange, 
  dailyChangePercent,
  cardsTracked,
  topGainer,
  topGainerChange
}: PortfolioCardProps) {
  const isPositive = dailyChange >= 0
  
  return (
    <div className="glass-card p-6 hover:border-cyan-400/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm text-muted-foreground font-medium">Current Portfolio</h3>
        <span className="text-xs text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded animate-pulse">
          Live
        </span>
      </div>
      
      <AnimatedCounter 
        value={totalValue} 
        prefix="$" 
        className="text-4xl font-bold text-white" 
        duration={1500}
      />
      
      <div className={`flex items-center gap-2 text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
        <AnimatedCounter 
          value={dailyChange} 
          prefix={isPositive ? '+$' : '-$'} 
          className="font-medium"
          duration={1200}
        />
        <span>({isPositive ? '+' : ''}{dailyChangePercent}%)</span>
        <span className="text-muted-foreground ml-2">today</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
        <div className="hover:scale-105 transition-transform duration-200">
          <AnimatedCounter value={cardsTracked} className="text-2xl font-bold text-white" />
          <p className="text-xs text-muted-foreground mt-0.5">Cards Tracked</p>
        </div>
        <div className="hover:scale-105 transition-transform duration-200">
          <p className="text-2xl font-bold text-white truncate">{topGainer}</p>
          <p className={`text-xs mt-0.5 ${topGainerChange >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {topGainerChange >= 0 ? '+' : ''}{topGainerChange}%
          </p>
        </div>
      </div>
    </div>
  )
}