"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Button from "@/components/Button"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-3xl text-primary">Your Cart is Empty</h1>
      </div>
    )
  }

  return (
    <div className="space-y-10 max-w-3xl mx-auto">
      <h1 className="font-heading text-4xl text-primary text-center">Your Cart</h1>

      <div className="space-y-8">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={80}
              className="rounded-lg"
            />

            <div className="flex-1">
              <h2 className="font-heading text-xl">{item.name}</h2>
              <p className="font-body">€{item.price.toFixed(2)}</p>
              <p className="font-body text-sm text-neutralDark">Qty: {item.quantity}</p>
            </div>

            <Button onClick={() => removeFromCart(item.id)} className="bg-red-600">
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <h2 className="font-heading text-2xl mt-6">Total: €{total.toFixed(2)}</h2>

        <Button className="mt-4 w-full bg-accent text-neutralDark">
          Proceed to Checkout
        </Button>

        <Button
          onClick={clearCart}
          className="mt-4 w-full bg-red-700 text-secondary"
        >
          Clear Cart
        </Button>
      </div>
    </div>
  )
}
