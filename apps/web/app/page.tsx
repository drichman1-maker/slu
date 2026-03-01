import { prisma } from "@slugger/db/client"
import { CardGrid } from "@slugger/ui/components/card-grid"

export default async function HomePage() {
  // Get featured cards (top 6 by fair value score)
  const featuredCards = await prisma.card.findMany({
    include: {
      player: true,
      set: true,
      gradedCards: true,
    },
    orderBy: {
      fairValueScore: "desc",
    },
    take: 6,
  })

  // Get recent sales count
  const recentSalesCount = await prisma.sale.count({
    where: {
      date: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // Last 30 days
      },
    },
  })

  // Get total cards and players
  const totalCards = await prisma.card.count()
  const totalPlayers = await prisma.player.count()

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Slugger
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Track prices and values of graded baseball cards.
              PSA, BGS, SGC pricing data for collectors and investors.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a 
                href="/cards"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-blue-900 hover:bg-white/90"
              >
                Browse Cards
              </a>
              <a 
                href="/players"
                className="inline-flex items-center justify-center rounded-md bg-blue-800 px-6 py-3 text-sm font-medium text-white hover:bg-blue-800/90"
              >
                View Players
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold">{totalCards}</p>
              <p className="text-sm text-blue-200">Cards Tracked</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{totalPlayers}</p>
              <p className="text-sm text-blue-200">Players</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{recentSalesCount}</p>
              <p className="text-sm text-blue-200">Sales (30d)</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-blue-200">Graders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Cards</h2>
          <a 
            href="/cards"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all →
          </a>
        </div>
        <CardGrid cards={featuredCards} />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold">Track Prices</h3>
            <p className="text-muted-foreground mt-2">
              Monitor historical sales data from eBay, PWCC, Heritage, and more.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold">Market Intelligence</h3>
            <p className="text-muted-foreground mt-2">
              Fair value scores, liquidity index, and momentum tracking.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-semibold">Graded Cards Only</h3>
            <p className="text-muted-foreground mt-2">
              Focused on PSA, BGS, and SGC graded cards with population reports.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
