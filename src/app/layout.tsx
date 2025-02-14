import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 min-h-screen border-t-2 border-b-2 border-purple-400`}>
        {children}
      </body>
    </html>
  )
}
