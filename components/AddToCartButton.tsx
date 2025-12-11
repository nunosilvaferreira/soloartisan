"use client"

import Button from "./Button"
import { useCart } from "@/context/CartContext"

type ProductInput = {
  id: number
  name: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: ProductInput }) {
  const { addToCart } = useCart()

  return (
    <Button
      onClick={() => {
        addToCart(product)
        alert("Added to cart!")
      }}
      className="w-full"
    >
      Add to Cart
    </Button>
  )
}
