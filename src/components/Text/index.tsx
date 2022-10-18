import React from "react"
import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"

export interface TextProps {
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export default function Text({
  children,
  size = "md",
  asChild = false,
}: TextProps) {
  const TextComponent = asChild ? Slot : "span"

  return (
    <TextComponent
      className={clsx("font-sans text-gray-100", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </TextComponent>
  )
}
