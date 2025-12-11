"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="site-header bg-primary text-secondary shadow-md">
      <div className="header-inner container mx-auto px-4 py-4">
        <Link href="/" className="font-heading text-2xl tracking-tight">
          SoloArtisan
        </Link>

        <nav className="header-nav font-body text-sm sm:text-base">
          <Link href="/products" className="hover:text-accent">
            Products
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
          <Link href="/favorites" className="hover:text-accent">
            Favorites
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart className="w-6 h-6 hover:text-accent" />
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
