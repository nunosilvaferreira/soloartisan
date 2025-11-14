"use client"

import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl font-heading bg-primary text-secondary hover:opacity-90 transition",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
