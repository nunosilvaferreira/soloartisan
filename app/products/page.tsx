import products from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function ProductsPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-heading text-4xl text-primary text-center">
        Our Handmade Products
      </h1>

      <p className="font-body text-neutralDark text-center max-w-2xl mx-auto mb-10">
        Discover unique handcrafted creations made by talented artisans.
        Each piece is created with intention, creativity, and care.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
