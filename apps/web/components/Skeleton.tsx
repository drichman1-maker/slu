export function SkeletonCard() {
  return (
    <div className="glass-card p-4 animate-pulse">
      <div className="aspect-[2/3] bg-white/5 rounded-xl mb-4" />
      <div className="h-5 bg-white/5 rounded mb-2 w-3/4" />
      <div className="h-3 bg-white/5 rounded w-1/2" />
    </div>
  )
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-white/5 rounded"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  )
}
