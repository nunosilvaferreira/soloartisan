export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-10 mt-20">
      <div className="container mx-auto px-6 text-center font-body">
        © {new Date().getFullYear()} SoloArtisan. All rights reserved.
      </div>
    </footer>
  )
}
