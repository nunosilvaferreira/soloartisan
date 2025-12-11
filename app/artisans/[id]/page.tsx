import Image from "next/image"
import Link from "next/link"
import Button from "@/components/Button"
import artisans from "@/data/artisans"

interface ArtisanPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ArtisanProfilePage(props: ArtisanPageProps) {
  // ✅ Next 16: params is a Promise → await
  const resolvedParams = await props.params
  const idParam = resolvedParams.id

  const artisanId = Number(idParam)
  const artisan = artisans.find((a) => a.id === artisanId)

  if (!artisan || Number.isNaN(artisanId)) {
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

      <div className="bg-white rounded-xl shadow-md border border-neutralLight p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src={artisan.image}
            alt={artisan.name}
            width={60}
            height={60}
            className="artisan-avatar"
          />
          <div>
            <h1 className="font-heading text-3xl text-primary">
              {artisan.name}
            </h1>
            <p className="font-body text-neutralDark text-sm">
              {artisan.shortBio}
            </p>
          </div>
        </div>

        <p className="font-body text-neutralDark text-lg">{artisan.bio}</p>

        <div>
          <h2 className="font-heading text-2xl text-primary mt-4">
            Specialties
          </h2>
          <ul className="list-disc list-inside font-body text-neutralDark mt-2">
            {artisan.specialties.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <Button className="mt-6 w-full">Contact Artisan</Button>
      </div>
    </div>
  )
}
