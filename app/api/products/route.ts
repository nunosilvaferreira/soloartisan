import { NextResponse } from "next/server"
import products from "@/data/products"

export async function GET(request: Request, context: any) {
  // In Next 16, context.params pode até vir como Promise, por isso usamos await
  const params = await context.params
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id

  const productId = parseInt(id as string, 10)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
