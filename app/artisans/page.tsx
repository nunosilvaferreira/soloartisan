import Link from "next/link"
import artisans from "@/data/artisans"
import Image from "next/image"

export default function ArtisanListPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-heading text-4xl text-primary text-center">
        Meet Our Artisans
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {artisans.map((artisan) => (
          <Link key={artisan.id} href={`/artisans/${artisan.id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight hover:shadow-lg transition">
              <Image
                src={artisan.image}
                alt={artisan.name}
                width={500}
                height={350}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h2 className="font-heading text-xl text-primary">
                  {artisan.name}
                </h2>
                <p className="font-body text-neutralDark text-sm mt-2">
                  {artisan.shortBio}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
