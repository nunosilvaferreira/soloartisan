import products from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id)
  const product = products.find((p) => p.id === productId)

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

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Link href="/products" className="inline-block">
        <Button>&larr; Back to Products</Button>
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight">
        <Image
          src={product.image}
          alt={product.name}
          width={1200}
          height={800}
          className="w-full h-96 object-cover"
        />

        <div className="p-8 space-y-6">
          <h1 className="font-heading text-4xl text-primary">
            {product.name}
          </h1>

          <p className="font-body text-neutralDark text-lg">
            {product.description}
          </p>

          <p className="font-heading text-3xl text-neutralDark">
            €{product.price.toFixed(2)}
          </p>

          <Button className="mt-4 w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
