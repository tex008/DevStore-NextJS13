import { LoadingSkeleton } from '@/components/loadingSkeleton'
import { Suspense } from 'react'
import { CurrentSearch } from './current-search'

export default function SearchLoading() {
  return (
    <div className="fkex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        Cu
      </div>
    </div>
  )
}
