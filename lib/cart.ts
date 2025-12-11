// lib/cart.ts

// Basic cart product type (matches what we put in the cart)
export interface CartProduct {
  id: number
  name: string
  price: number
  image: string
}

const STORAGE_KEY = "soloartisan-cart"

// Safely get cart (empty array on server or if nothing saved)
export function getCart(): CartProduct[] {
  if (typeof window === "undefined") {
    // During SSR, localStorage is not available
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as CartProduct[]
  } catch {
    return []
  }
}

// Add a product to the cart in localStorage
export function addToCart(product: CartProduct): void {
  if (typeof window === "undefined") {
    return
  }

  const cart = getCart()
  cart.push(product)
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
}

// Optional helper if you ever need to clear cart from localStorage
export function clearCart(): void {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(STORAGE_KEY)
}
