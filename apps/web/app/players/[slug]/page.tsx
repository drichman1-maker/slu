import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'
import { getPlayer, getPlayers, getCards } from '../../../lib/data'
import { PlayerHero } from '../../../components/PlayerHero'
import { CardGrid } from '../../../components/CardGrid'
import { PageHeader } from '../../../components/PageHeader'
import { SkeletonGrid } from '../../../components/Skeleton'

interface PlayerPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const players = getPlayers()
  return players.map((player) => ({
    slug: player.slug,
  }))
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { slug } = await params
  const player = getPlayer(slug)
  
  if (!player) {
    notFound()
  }

  // Get all cards for this player
  const allCards = getCards()
  const playerCards = allCards.filter(card => card.player.slug === slug)

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <PageHeader 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Players', href: '/players' },
          { label: player.name }
        ]}
      />

      {/* Player Hero */}
      <PlayerHero player={player} />

      {/* Player's Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Cards ({playerCards.length})</h2>
        <Suspense fallback={<SkeletonGrid count={6} />}>
          {playerCards.length > 0 ? (
            <CardGrid cards={playerCards} />
          ) : (
            <p className="text-muted-foreground">No cards found for this player.</p>
          )}
        </Suspense>
      </section>
    </div>
  )
}