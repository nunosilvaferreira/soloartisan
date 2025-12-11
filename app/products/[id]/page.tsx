import products from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import AddToCartButton from "@/components/AddToCartButton"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage(props: ProductPageProps) {
  // DO NOT USE optional chaining or destructuring - Turbopack bug on Windows
  const productIdParam = props.params.id

  // Find product by matching id as string
  let product = null
  for (let i = 0; i < products.length; i++) {
    if (String(products[i].id) === productIdParam) {
      product = products[i]
      break
    }
  }

  if (!product) {
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

  // Related Products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      <Link href="/products" className="inline-block">
        <Button>&larr; Back to Products</Button>
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight">
        <Image
          src={product.image}
          alt={product.name}
          width={1200}
          height={900}
          className="product-image w-full max-h-[400px] object-cover mx-auto"
        />

        <div className="p-10 space-y-6">
          <h1 className="font-heading text-5xl text-primary">{product.name}</h1>

          <p className="font-body text-neutralDark text-lg leading-relaxed">
            {product.description}
          </p>

          <p className="font-heading text-4xl text-neutralDark">
            €{product.price.toFixed(2)}
          </p>

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
