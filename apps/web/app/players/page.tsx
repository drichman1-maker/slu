import { prisma } from "@slugger/db/client"
import { PlayerHero } from "@slugger/ui/components/player-hero"
import { CardGrid } from "@slugger/ui/components/card-grid"

export default async function PlayersPage() {
  const players = await prisma.player.findMany({
    include: {
      cards: {
        include: {
          set: true,
          gradedCards: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  })

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Players</h1>
          <p className="text-muted-foreground mt-2">
            {players.length} baseball legends tracked
          </p>
        </div>

        <div className="space-y-12">
          {players.map((player) => (
            <section key={player.id}>
              <PlayerHero player={player} />
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Cards</h2>
                <CardGrid cards={player.cards} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
