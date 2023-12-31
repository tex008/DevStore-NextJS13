'use client'

import { useCart } from '@/ contexts/cart-context'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export default function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />
      {/* the cart will only show the number of different types of products are in
      the cart, not necessarily the total amount */}
      <span className="text-sm ">Cart ({items.length})</span>
      <div className="w-px h-4 bg-zinc-700" />
    </div>
  )
}
