import { notFound } from "next/navigation"
import { getProductBySlug } from "@/data/products"
import { getReviewsByProduct } from "@/data/reviews"
import { getRelatedProducts } from "@/data/products"
import ProductDetailClient from "./product-detail-client"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const reviews = getReviewsByProduct(product.id)
  const related = getRelatedProducts(product.id)

  return <ProductDetailClient product={product} reviews={reviews} related={related} />
}