'use client'

import { useState, useMemo } from 'react'
import { CardGrid } from '../../components/CardGrid'
import { Card } from '../../lib/data'

interface ClientCardsPageProps {
  cards: Card[]
}

export function ClientCardsPage({ cards }: ClientCardsPageProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGrader, setSelectedGrader] = useState('')
  const [sortBy, setSortBy] = useState('')

  const filteredCards = useMemo(() => {
    let result = [...cards]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(card => 
        card.player.name.toLowerCase().includes(query) ||
        card.set.year.toString().includes(query) ||
        card.set.brand.toLowerCase().includes(query) ||
        card.number?.toLowerCase().includes(query)
      )
    }

    // Grader filter
    if (selectedGrader) {
      result = result.filter(card => 
        card.gradedCards.some(gc => gc.grader === selectedGrader)
      )
    }

    // Sort
    switch (sortBy) {
      case 'value':
        result.sort((a, b) => (b.fairValueScore || 0) - (a.fairValueScore || 0))
        break
      case 'year':
        result.sort((a, b) => b.set.year - a.set.year)
        break
      case 'trend':
        result.sort((a, b) => (b.momentumScore || 0) - (a.momentumScore || 0))
        break
    }

    return result
  }, [cards, searchQuery, selectedGrader, sortBy])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Graded Baseball Cards</h1>
            <p className="text-muted-foreground mt-1">
              {filteredCards.length} of {cards.length} cards
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search players, years, cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-lg bg-background"
            />
            <svg 
              className="absolute left-3 top-2.5 w-5 h-5 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex gap-2">
            <select 
              value={selectedGrader}
              onChange={(e) => setSelectedGrader(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-background"
            >
              <option value="">All Graders</option>
              <option value="PSA">PSA</option>
              <option value="BGS">BGS</option>
              <option value="SGC">SGC</option>
            </select>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-background"
            >
              <option value="">Sort By</option>
              <option value="value">Fair Value (High-Low)</option>
              <option value="year">Year (Newest)</option>
              <option value="trend">Trending</option>
            </select>
          </div>
        </div>

        {/* Active filters */}
        {(searchQuery || selectedGrader) && (
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
              >
                Search: "{searchQuery}" ×
              </button>
            )}
            {selectedGrader && (
              <button
                onClick={() => setSelectedGrader('')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
              >
                Grader: {selectedGrader} ×
              </button>
            )}
          </div>
        )}
      </div>

      <CardGrid cards={filteredCards} />
    </div>
  )
}