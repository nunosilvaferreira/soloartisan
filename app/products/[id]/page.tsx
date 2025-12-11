import products from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import AddToCartButton from "@/components/AddToCartButton"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage(props: ProductPageProps) {
  // ✅ Next 16: params is a Promise → we must await it
  const resolvedParams = await props.params
  const idParam = resolvedParams.id

  const productId = Number(idParam)
  const product = products.find((p) => p.id === productId)

  if (!product || Number.isNaN(productId)) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-3xl text-primary">
          Product Not Found
        </h1>
        <Link href="/products">
          <Button className="mt-6">Back to Products</Button>
        </Link>
      </div>
    )
  }

  // Related products (same category, not this product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Back Button */}
      <Link href="/products" className="inline-block">
        <Button>&larr; Back to Products</Button>
      </Link>

      {/* Main Product Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight">
        <Image
          src={product.image}
          alt={product.name}
          width={1200}
          height={900}
          className="product-image w-full max-h-[400px] object-cover mx-auto"
        />

        <div className="p-10 space-y-6">
          {/* Product Title */}
          <h1 className="font-heading text-5xl text-primary">
            {product.name}
          </h1>

          {/* Description */}
          <p className="font-body text-neutralDark text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <p className="font-heading text-4xl text-neutralDark">
            €{product.price.toFixed(2)}
          </p>

          {/* Add to Cart */}
          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
          />
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-heading text-3xl text-primary">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight hover:shadow-lg transition">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={350}
                    className="product-image h-56 object-cover mx-auto"
                  />

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading text-xl text-primary">
                      {item.name}
                    </h3>
                    <p className="font-body text-neutralDark text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <p className="font-heading text-lg text-neutralDark">
                      €{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
