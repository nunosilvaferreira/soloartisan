import Button from "./Button"

export default function Hero() {
  return (
    <section className="bg-neutralLight text-center py-24 rounded-xl shadow-sm">
      <h1 className="font-heading text-5xl text-primary">
        Discover Handcrafted Treasures
      </h1>

      <p className="font-body text-neutralDark mt-6 max-w-xl mx-auto text-lg">
        A curated digital space connecting artisans with people who value
        creativity, craftsmanship, and meaningful products.
      </p>

      <div className="mt-8">
        <Button>Explore Products</Button>
      </div>
    </section>
  )
}
