"use client"

import { useState } from "react"

interface ProductFiltersProps {
  categories: string[]
  onSearch: (term: string) => void
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
}

export default function ProductFilters({
  categories,
  onSearch,
  onCategoryChange,
  onSortChange
}: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center justify-between py-4">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 border border-neutralDark/20 rounded-lg w-full sm:w-1/3"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
          onSearch(e.target.value)
        }}
      />

      {/* Category Filter */}
      <select
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2 border border-neutralDark/20 rounded-lg"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 border border-neutralDark/20 rounded-lg"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>

    </div>
  )
}
