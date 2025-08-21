import { cn } from '@/lib/utils/cn'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🤍</text></svg>"
        ></link>
      </head>
      <body className={cn(inter.className, 'h-screen', 'w-screen')}>{children}</body>
    </html>
  )
}
