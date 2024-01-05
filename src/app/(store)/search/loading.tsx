'use client'

import { LoadingSkeleton } from '@/components/loadingSkeleton'
import { useSearchParams } from 'next/navigation'

export default function Loading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="fkex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
        <LoadingSkeleton className="h-[500px]" />
      </div>
    </div>
  )
}
