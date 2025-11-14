import Image from "next/image"
import Button from "./Button"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={350}
        className="w-full h-60 object-cover"
      />

      <div className="p-6 space-y-3">
        <h2 className="font-heading text-2xl text-primary">{product.name}</h2>

        <p className="font-body text-neutralDark text-sm">
          {product.description}
        </p>

        <p className="font-heading text-xl text-neutralDark mt-2">
          €{product.price.toFixed(2)}
        </p>

        <Button className="mt-4 w-full">View Details</Button>
      </div>
    </div>
  )
}
