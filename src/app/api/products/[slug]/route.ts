import { z } from 'zod'
import data from '../data.json'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not Found' }, { status: 404 })
  }

  return Response.json(product)
}
