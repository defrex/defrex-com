import { cn } from '@/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

const inlineVariants = cva('flex flex-row', {
  variants: {
    align: {
      top: 'items-start',
      center: 'items-center',
      bottom: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      stretch: 'justify-stretch',
    },
    gap: Object.fromEntries(
      [
        0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36,
        40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
      ].map((n) => [n, `gap-${n}`]),
    ),
    grow: {
      true: 'flex-grow',
      false: '',
    },
    flipMobile: {
      true: 'max-md:flex-col',
      false: '',
    },
    wrap: {
      true: 'flex-wrap',
      false: '',
    },
  },
  defaultVariants: {
    align: 'center',
    justify: 'left',
    gap: 4,
    grow: false,
    flipMobile: false,
    wrap: false,
  },
})

interface InlineProps extends Omit<VariantProps<typeof inlineVariants>, 'gap'> {
  children: ReactNode
  className?: string
  gap?: number
}

export function Inline({ children, className, ...props }: InlineProps) {
  return <div className={cn(inlineVariants({ ...props }), className)}>{children}</div>
}
