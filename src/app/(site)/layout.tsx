import { BackgroundGradient } from '@/components/background-gradient/background-gradient'
import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'
import type React from 'react'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <BackgroundGradient>
      <div
        className={cn(
          'flex',
          'flex-col',
          'items-center',
          'min-h-full',
          'min-w-full',
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
              <Link
                href="/"
                className="text-zinc-100 transition-colors
                  hover:text-violet-300"
              >
                <Text as="h1" value="Aron Jones" size="xl" color="inherit" />
              </Link>

              <Inline className="gap-2 sm:gap-4">
                <a
                  href="https://github.com/defrex"
                  className="text-violet-300 transition-colors
                    hover:text-violet-400"
                >
                  <Text value="GitHub" color="inherit" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aronjones/"
                  className="text-violet-300 transition-colors
                    hover:text-violet-400"
                >
                  <Text value="LinkedIn" color="inherit" />
                </a>
              </Inline>
            </div>
          </header>
          {children}
        </Stack>
      </div>
    </BackgroundGradient>
  )
}
