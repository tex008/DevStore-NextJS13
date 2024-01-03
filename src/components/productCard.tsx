import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export async function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
    >
      <Image
        className="group-hover:scale-105 transition-transform duration-500"
        alt={product.description}
        src={product.image}
        width={920}
        height={920}
        quality={100}
      />

      <div className="absolute bottom-20 right-28 h-12 flex items-center gap-2 max-w-[290px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <span className="text-sm truncate">{product.title}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </Link>
  )
}
