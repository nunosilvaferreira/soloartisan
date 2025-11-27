"use client"

import { useState } from "react"
import productsData from "@/data/products"
import ProductCard from "@/components/ProductCard"
import ProductFilters from "@/components/ProductFilters"

export default function ProductsPage() {
  const categories = [...new Set(productsData.map((p) => p.category))]

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [sortOption, setSortOption] = useState("")

  // ----------------------------
  // FILTERING LOGIC
  // ----------------------------
  let filteredProducts = productsData.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.category === category)
    )
  })

  // ----------------------------
  // SORT LOGIC
  // ----------------------------
  if (sortOption === "price-asc") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortOption === "price-desc") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortOption === "name-asc") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  } else if (sortOption === "name-desc") {
    filteredProducts = filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    )
  }

  return (
    <div className="space-y-10">
      <h1 className="font-heading text-4xl text-primary text-center">
        Our Handmade Products
      </h1>

      <p className="font-body text-neutralDark text-center max-w-2xl mx-auto mb-10">
        Discover unique handcrafted creations made by talented artisans.
        Each piece is created with intention, creativity, and care.
      </p>

      {/* Filters Section */}
      <ProductFilters
        categories={categories}
        onSearch={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSortOption}
      />

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center font-body text-neutralDark">
          No products found for your criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
