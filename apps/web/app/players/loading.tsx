import { SkeletonGrid } from '../../components/Skeleton'

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-8 w-48 bg-white/5 rounded mb-2 animate-pulse" />
        <div className="h-4 w-64 bg-white/5 rounded animate-pulse" />
      </div>

      <SkeletonGrid count={9} />
    </div>
  )
}
