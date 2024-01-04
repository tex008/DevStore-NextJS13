import { CartProvider } from '@/ contexts/cart-context'
import Header from '@/components/header'
import { ReactNode } from 'react'

interface StoreLayoutProps {
  children: ReactNode
}

export default function StoreLayout(props: StoreLayoutProps) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px]  grid-rows-[min-content_max-content] gap-5 px-8 py-8">
        <Header />
        {props.children}
      </div>
    </CartProvider>
  )
}
