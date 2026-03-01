import { SkeletonGrid } from '../../components/Skeleton'

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="h-8 w-64 bg-white/5 rounded mb-2 animate-pulse" />
            <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
          </div>
        </div>

        {/* Search placeholder */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 h-10 bg-white/5 rounded animate-pulse" />
          <div className="flex gap-2">
            <div className="w-32 h-10 bg-white/5 rounded animate-pulse" />
            <div className="w-32 h-10 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>

      <SkeletonGrid count={12} />
    </div>
  )
}
