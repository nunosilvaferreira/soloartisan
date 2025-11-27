import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

export const metadata: Metadata = {
  title: "SoloArtisan – Handcrafted Haven Lite",
  description: "A curated digital space for handmade artisan creations."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body bg-neutralLight text-neutralDark">
        <CartProvider>
          <Header />
          <main className="container mx-auto px-6 py-10">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
