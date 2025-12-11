import { NextRequest, NextResponse } from "next/server"
import products from "@/data/products"

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // In Next 16, params is a Promise – we must await it
  const { id } = await context.params

  const productId = Number(id)
  const product = products.find((p) => p.id === productId)

  if (!product || Number.isNaN(productId)) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json(product)
}
