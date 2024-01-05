'use client'

import { useCart } from '@/ contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton(props: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(props.productId)
  }

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white
              px-4"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
