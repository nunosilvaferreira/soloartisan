import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import artisans from "@/data/artisans"

interface ArtisanPageProps {
  params: {
    id: string
  }
}

export default function ArtisanProfilePage({ params }: ArtisanPageProps) {
  const artisanId = parseInt(params.id)
  const artisan = artisans.find((a) => a.id === artisanId)

  if (!artisan) {
    return (
      <div className="text-center py-20">
        <h1 className="font-heading text-3xl text-primary">
          Artisan Not Found
        </h1>
        <Link href="/artisans">
          <Button className="mt-6">Back to Artisans</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Link href="/artisans" className="inline-block">
        <Button>&larr; Back to Artisans</Button>
      </Link>

      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutralLight">
        <Image
          src={artisan.image}
          alt={artisan.name}
          width={1200}
          height={800}
          className="w-full h-96 object-cover"
        />

        <div className="p-8 space-y-6">
          <h1 className="font-heading text-4xl text-primary">
            {artisan.name}
          </h1>

          <p className="font-body text-neutralDark text-lg">
            {artisan.bio}
          </p>

          <h2 className="font-heading text-2xl text-primary mt-10">Specialties</h2>
          <ul className="list-disc list-inside font-body text-neutralDark">
            {artisan.specialties.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <Button className="mt-8 w-full">Contact Artisan</Button>
        </div>
      </div>
    </div>
  )
}
