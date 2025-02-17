import { BackgroundGradient } from '@/components/background-gradient/background-gradient'
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
      <body className={cn(inter.className, 'min-h-screen', 'min-w-screen')}>
        <BackgroundGradient
          className={cn(
            'flex',
            'flex-col',
            'items-center',
            'h-full',
            'w-full',
            'justify-start',
            'sm:justify-center',
          )}
        >
          <Stack
            gap={12}
            className={cn(
              'container',
              'mx-auto',
              'max-w-[65ch]',
              'bg-zinc-900/30',
              'rounded-lg',
              'shadow-lg',
              'shadow-violet-800/30',
              'p-8',
              'my-0',
              'min-h-screen',
              'sm:my-8',
              'sm:min-h-fit',
            )}
          >
            <header>
              <div
                className={cn(
                  'flex',
                  'flex-col',
                  'gap-2',
                  'sm:flex-row',
                  'sm:items-start',
                  'sm:justify-between',
                )}
              >
                <Link href="/" className="transition-colors text-zinc-100 hover:text-violet-300">
                  <Text as="h1" value="Aron Jones" size="xl" color="inherit" />
                </Link>

                <Inline className="gap-2 sm:gap-4">
                  <a
                    href="https://github.com/defrex"
                    className="transition-colors text-violet-300 hover:text-violet-400"
                  >
                    <Text value="GitHub" color="inherit" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aronjones/"
                    className="transition-colors text-violet-300 hover:text-violet-400"
                  >
                    <Text value="LinkedIn" color="inherit" />
                  </a>
                </Inline>
              </div>
            </header>
            {children}
          </Stack>
        </BackgroundGradient>
      </body>
    </html>
  )
}
