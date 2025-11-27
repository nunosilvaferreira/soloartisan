"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="bg-primary text-secondary py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl">
          SoloArtisan
        </Link>

        <nav className="flex items-center gap-6 font-body">
          <Link href="/products" className="hover:text-accent">Products</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-accent" />

            {/* Cart Badge */}
            {cart && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-neutralDark text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
