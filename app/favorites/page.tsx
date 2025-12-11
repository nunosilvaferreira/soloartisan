"use client"

import { useState, useEffect } from "react"
import products from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem("soloartisan-favorites")
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  const favoriteProducts = products.filter((p) => favorites.includes(p.id))

  if (favoriteProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-3xl text-primary">No Favorites Yet</h1>
        <p className="font-body text-neutralDark mt-4">
          Browse products and click the heart icon to save your favorites!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-heading text-4xl text-primary text-center mb-10">
        Your Favorites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {favoriteProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
