import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl text-neutralDark">
          Unique Handmade Creations
        </h2>
        <p className="font-body mt-4 text-neutralDark">
          Showcasing items made with creativity, heart, and craftsmanship.
        </p>
      </section>
    </div>
  )
}
