interface GradedBadgeProps {
  grader: string
  grade: string
}

export function GradedBadge({ grader, grade }: GradedBadgeProps) {
  const colors: Record<string, string> = {
    PSA: 'bg-red-600 hover:bg-red-700',
    BGS: 'bg-blue-600 hover:bg-blue-700',
    SGC: 'bg-green-600 hover:bg-green-700',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-bold text-white transition-colors ${
        colors[grader] || 'bg-slate-600 hover:bg-slate-700'
      }`}
    >
      {grader} <span className="ml-1">{grade}</span>
    </span>
  )
}