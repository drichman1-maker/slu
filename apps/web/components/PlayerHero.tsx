import { Player } from '../lib/data'

interface PlayerHeroProps {
  player: Player
}

export function PlayerHero({ player }: PlayerHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-8 rounded-2xl mb-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{player.name}</h1>
        <div className="flex items-center gap-3 text-blue-100 text-lg mb-6">
          <span>{player.position}</span>
          {player.team && (
            <>
              <span>•</span>
              <span>{player.team}</span>
            </>
          )}
        </div>
        
        {player.careerStats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {player.careerStats.hits !== undefined && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">{player.careerStats.hits.toLocaleString()}</p>
                <p className="text-sm text-blue-200">Career Hits</p>
              </div>
            )}
            {player.careerStats.homeRuns !== undefined && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">{player.careerStats.homeRuns}</p>
                <p className="text-sm text-blue-200">Home Runs</p>
              </div>
            )}
            {player.careerStats.battingAverage !== undefined && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-2xl md:text-3xl font-bold">.{player.careerStats.battingAverage.toString().slice(2)}</p>
                <p className="text-sm text-blue-200">Batting Avg</p>
              </div>
            )}
            {player.careerStats.years !== undefined && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-xl md:text-2xl font-bold">{player.careerStats.years}</p>
                <p className="text-sm text-blue-200">Career</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}