interface MarketStatsProps {
  fairValueScore?: number
  liquidityIndex?: number
  momentumScore?: number
  volatilityScore?: number
}

export function MarketStats({
  fairValueScore,
  liquidityIndex,
  momentumScore,
  volatilityScore,
}: MarketStatsProps) {
  const getScoreColor = (score: number | undefined) => {
    if (score === undefined) return 'text-gray-400'
    if (score >= 70) return 'text-green-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const formatScore = (score: number | undefined) => {
    if (score === undefined) return '—'
    return score.toFixed(1)
  }

  const getMomentumIcon = (score: number | undefined) => {
    if (score === undefined) return '→'
    if (score > 5) return '↗'
    if (score < -5) return '↘'
    return '→'
  }

  const getMomentumColor = (score: number | undefined) => {
    if (score === undefined) return 'text-gray-400'
    if (score > 5) return 'text-green-500'
    if (score < -5) return 'text-red-500'
    return 'text-gray-400'
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border">
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Fair Value</p>
        <p className={`text-xl md:text-2xl font-bold ${getScoreColor(fairValueScore)}`}>
          {formatScore(fairValueScore)}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Liquidity</p>
        <p className={`text-xl md:text-2xl font-bold ${getScoreColor(liquidityIndex)}`}>
          {formatScore(liquidityIndex)}
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Momentum</p>
        <p className={`text-xl md:text-2xl font-bold ${getMomentumColor(momentumScore)}`}>
          {formatScore(momentumScore)}
          <span className="ml-1 text-sm">{getMomentumIcon(momentumScore)}</span>
        </p>
      </div>
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">Volatility</p>
        <p className={`text-xl md:text-2xl font-bold ${getScoreColor(volatilityScore)}`}>
          {formatScore(volatilityScore)}
        </p>
      </div>
    </div>
  )
}