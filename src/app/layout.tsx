import "./globals.css"
import { Outfit } from 'next/font/google'
import type { Metadata } from "next"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Local Trade",
  description: "Woodworking classes hosted in Marin County",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
