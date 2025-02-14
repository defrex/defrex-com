import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { cn } from '@/lib/utils/cn'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import type React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'min-h-screen',
          'border-y-4',
          'border-purple-400',
          'bg-background',
          'text-foreground',
          'py-4',
        )}
      >
        <Stack gap={12}>
          <header className="container mx-auto max-w-[1024px]">
            <Inline className="py-4" justify="between">
              <Link href="/" className="transition-colors text-zinc-100 hover:text-purple-400">
                <Text as="h1" value="Aron Jones" size="xl" color="inherit" />
              </Link>

              <Inline justify="between">
                <a
                  href="https://github.com/defrex"
                  className="transition-colors hover:text-purple-400"
                >
                  <Text value="GitHub" color="inherit" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aronjones/"
                  className="transition-colors hover:text-purple-400"
                >
                  <Text value="LinkedIn" color="inherit" />
                </a>
              </Inline>
            </Inline>
          </header>

          {children}
        </Stack>
      </body>
    </html>
  )
}
