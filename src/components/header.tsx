import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'
import CartWidget from './cart-widget'
import SearchForm from './search-form'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          DevStore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            alt="account icon"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            src="https://github.com/tex008.png"
          />
        </Link>
      </div>
    </div>
  )
}
