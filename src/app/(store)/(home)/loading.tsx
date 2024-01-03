import { LoadingSkeletion } from '@/components/loadingSkeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <LoadingSkeletion className="col-span-6 row-span-6 h-[920px]" />
      <LoadingSkeletion className="col-span-3 row-span-3" />
      <LoadingSkeletion className="col-span-3 row-span-3" />
    </div>
  )
}
