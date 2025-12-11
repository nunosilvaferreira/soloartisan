"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function Header() {
  const { cart } = useCart()

  return (
    <header className="site-header bg-primary text-secondary shadow-lg">
      <div className="header-inner container mx-auto px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-3xl tracking-wide text-secondary hover:text-white transition"
        >
          SoloArtisan
        </Link>

        {/* Navigation */}
        <nav className="header-nav font-body text-lg">
          <Link href="/products" className="menu-link">
            Products
          </Link>
          <Link href="/artisans" className="menu-link">
            Artisans
          </Link>
          <Link href="/about" className="menu-link">
            About
          </Link>
          <Link href="/contact" className="menu-link">
            Contact
          </Link>
          <Link href="/favorites" className="menu-link">
            Favorites
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center ml-2">
            <ShoppingCart className="w-7 h-7 text-secondary hover:text-white transition" />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-accent text-neutralDark text-xs px-2 py-0.5 rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
