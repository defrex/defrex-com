import { Text, TextProps } from '@/components/text/text'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'

interface TextLinkProps {
  href: string
  text?: string
  children?: React.ReactNode
  className?: string
  textProps?: Omit<TextProps, 'value'>
}

export function TextLink({ href, text, children, className, textProps }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        className,
        'text-purple-400',
        'hover:text-purple-300',
        'transition-colors',
        'duration-100',
      )}
    >
      {typeof text === 'string' ? <Text value={text} color="inherit" {...textProps} /> : children}
    </Link>
  )
}
