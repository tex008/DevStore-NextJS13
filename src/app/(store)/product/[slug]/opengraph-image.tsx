import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { env } from '@/env'
import Image from 'next/image'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'
import 'zod'

export const runtime = 'edge'

export const alt = 'Example of image'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 3600,
    },
  })

  const product = await response.json()

  return product
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  console.log('productImageURL', productImageURL)

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image
          src={productImageURL}
          alt={product.title}
          style={{ width: '100%' }}
          width={24}
          height={24}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
