interface GradedCard {
  grader: string
  grade: string
  population?: number
}

interface PopulationReportProps {
  gradedCards: GradedCard[]
}

export function PopulationReport({ gradedCards }: PopulationReportProps) {
  const graderColors: Record<string, { bg: string; text: string }> = {
    PSA: { bg: 'bg-red-600', text: 'text-red-400' },
    BGS: { bg: 'bg-blue-600', text: 'text-blue-400' },
    SGC: { bg: 'bg-green-600', text: 'text-green-400' },
  }

  const maxPop = Math.max(...gradedCards.map(g => g.population || 0))

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Population Report</h3>
      <div className="space-y-3">
        {gradedCards.map((gc) => {
          const percentage = maxPop > 0 ? ((gc.population || 0) / maxPop) * 100 : 0
          const colors = graderColors[gc.grader] || { bg: 'bg-slate-600', text: 'text-slate-400' }
          
          return (
            <div key={gc.grade} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className={colors.text}>{gc.grader} {gc.grade}</span>
                <span className="text-muted-foreground">{gc.population?.toLocaleString() || 'N/A'}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${colors.bg} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}