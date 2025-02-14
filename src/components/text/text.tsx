import { cn } from '@/lib/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { createElement, ReactNode } from 'react'
import styles from './styles.module.css'

const textVariants = cva('inline-block', {
  variants: {
    size: {
      sm: styles['text-sm'],
      md: styles['text-md'],
      lg: styles['text-lg'],
      xl: styles['text-xl'],
      xxl: styles['text-xxl'],
      paragraph: styles['text-paragraph'],
    },
    color: {
      inherit: '',
      inverted: 'text-gray-800',
      light: 'text-gray-500',
      regular: 'text-white',
      'inverted-light': 'text-gray-400',
    },
    nowrap: {
      true: 'whitespace-nowrap',
    },
    bold: {
      true: 'font-medium',
      strong: 'font-semibold',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
    strikethrough: {
      true: 'line-through',
    },
    mono: {
      true: 'font-mono',
    },
    justify: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'regular',
    nowrap: false,
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    mono: false,
    justify: 'left',
  },
  compoundVariants: [
    {
      nowrap: false,
      size: 'paragraph',
      className: 'text-pretty',
    },
    {
      nowrap: false,
      size: ['sm', 'md', 'lg', 'xl', 'xxl'],
      className: 'text-pretty',
    },
  ],
})

export type TextProps = VariantProps<typeof textVariants> & {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  value: string | ReactNode
  title?: string
}

export function textClassNames({ className, ...props }: Omit<TextProps, 'as' | 'value' | 'title'>) {
  return cn(textVariants(props), className)
}

export function Text({ as = 'span', value, title, ...props }: TextProps) {
  return createElement(
    as as string,
    {
      className: textClassNames(props),
      title,
    },
    value,
  )
}
