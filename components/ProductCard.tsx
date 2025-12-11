"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [isFavorited, setIsFavorited] = useState(false)

  // Load initial favorite state
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("soloartisan-favorites") || "[]"
    )
    setIsFavorited(saved.includes(product.id))
  }, [product.id])

  // Toggle favorite state
  const toggleFavorite = () => {
    let saved = JSON.parse(
      localStorage.getItem("soloartisan-favorites") || "[]"
    )

    if (saved.includes(product.id)) {
      saved = saved.filter((id: number) => id !== product.id)
      setIsFavorited(false)
    } else {
      saved.push(product.id)
      setIsFavorited(true)
    }

    localStorage.setItem("soloartisan-favorites", JSON.stringify(saved))
  }

  return (
    <div className="product-card relative bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight hover:shadow-lg transition">
      {/* Favorite Button */}
      <button
        type="button"
        onClick={toggleFavorite}
        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition color: #f7e7d4"
      >
        <Heart
          className={`w-5 h-5 product-heart ${
            isFavorited ? "favorited" : ""
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={280}
          className="product-image h-60 object-cover mx-auto"
        />
      </div>

      {/* Info */}
      <div className="p-6 space-y-3">
        <h2 className="font-heading text-2xl text-primary">
          {product.name}
        </h2>

        <p className="font-body text-neutralDark text-sm line-clamp-2">
          {product.description}
        </p>

        <p className="font-heading text-xl text-neutralDark mt-2">
          €{product.price.toFixed(2)}
        </p>

        {/* Details Link styled as button */}
        <Link
          href={`/products/${product.id}`}
          className="product-details-btn block text-center mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
