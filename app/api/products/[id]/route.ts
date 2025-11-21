import { NextResponse } from "next/server"
import products from "@/data/products"

interface Params {
  params: { id: string }
}

export function GET({ params }: Params) {
  const productId = parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    )
  }

  return NextResponse.json(product)
}
