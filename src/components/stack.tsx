import { cn } from '@/lib/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import { Children, ReactNode } from 'react'

const stackVariants = cva('flex flex-col', {
  variants: {
    align: {
      left: 'items-start',
      center: 'items-center',
      right: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
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
    divide: {
      true: 'divide-y-2 divide-gray-100',
      false: '',
    },
  },
  defaultVariants: {
    gap: 2,
    grow: false,
    divide: false,
  },
  compoundVariants: [
    {
      divide: true,
      className: 'gap-0', // Remove gap when using dividers
    },
  ],
})

interface StackProps extends Omit<VariantProps<typeof stackVariants>, 'gap'> {
  children: ReactNode
  className?: string
  gap?: number // explicitly type gap to avoid null
  ref?: React.Ref<HTMLDivElement>
  style?: React.CSSProperties
}

export function Stack({
  align,
  justify,
  gap = 2,
  grow,
  divide,
  children,
  className,
  ref,
  style,
}: StackProps) {
  if (divide) {
    children = Children.map(children, (child) => (
      <div className={cn(`py-${gap / 2} first:pt-0 last:pb-0`)}>{child}</div>
    ))
  }

  return (
    <div
      className={cn(stackVariants({ align, justify, gap, grow, divide }), className)}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  )
}
