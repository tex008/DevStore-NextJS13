import { ProductCard } from '@/components/productCard'
import { api } from '@/data/api'
import { Product } from '@/data/types/products'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 3600,
    },
  })
  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className=" grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <div className="col-span-6 row-span-6">
        <ProductCard product={highlightedProduct} />
      </div>

      {otherProducts.map((product) => (
        <div key={product.id} className="col-span-3 row-span-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
