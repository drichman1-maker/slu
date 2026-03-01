export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/3 bg-muted rounded"></div>
        <div className="h-4 w-1/4 bg-muted rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-[2/3] bg-muted rounded"></div>
              <div className="h-4 w-3/4 bg-muted rounded"></div>
              <div className="h-4 w-1/2 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
