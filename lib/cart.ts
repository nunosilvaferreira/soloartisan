"use client"

export function getCart() {
  if (typeof window === "undefined") return []
  const cart = localStorage.getItem("soloartisan-cart")
  return cart ? JSON.parse(cart) : []
}

export function addToCart(product) {
  const cart = getCart()
  cart.push(product)
  localStorage.setItem("soloartisan-cart", JSON.stringify(cart))
}

export function clearCart() {
  localStorage.removeItem("soloartisan-cart")
}
