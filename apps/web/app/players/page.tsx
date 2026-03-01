import Link from 'next/link'
import { getPlayers } from '../../lib/data'

export default function PlayersPage() {
  const players = getPlayers()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Players</h1>
        <p className="text-muted-foreground mt-1">{players.length} players in the database</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <Link
            key={player.id}
            href={`/players/${player.slug}`}
            className="group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {player.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {player.position} • {player.team}
                </p>
              </div>
              <span className="text-2xl">⚾</span>
            </div>
            
            {player.careerStats && (
              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                <div>
                  <p className="text-lg font-bold">{player.careerStats.hits?.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Hits</p>
                </div>
                <div>
                  <p className="text-lg font-bold">{player.careerStats.homeRuns}</p>
                  <p className="text-xs text-muted-foreground">HR</p>
                </div>
                <div>
                  <p className="text-lg font-bold">.{player.careerStats.battingAverage?.toString().slice(2)}</p>
                  <p className="text-xs text-muted-foreground">AVG</p>
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}