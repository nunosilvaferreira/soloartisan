"use client"

import Button from "./Button"
import { addToCart } from "@/lib/cart"

export default function AddToCartButton({ product }) {
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
