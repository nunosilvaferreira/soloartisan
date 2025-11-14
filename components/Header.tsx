import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-secondary py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl">
          SoloArtisan
        </Link>
        
        <nav className="flex gap-6 font-body">
          <Link href="/products" className="hover:text-accent">Products</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
