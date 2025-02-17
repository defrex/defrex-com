import LineChart from '@/components/line-chart'
import { Stack } from '@/components/stack'
import { extractMarkdownComponent } from '@/lib/utils/extract-markdown-component'
import { marked } from 'marked'
import { memo, ReactNode, useMemo } from 'react'
import ReactMarkdown from 'react-markdown'

// eslint-disable-next-line
const componentBlocks: Record<string, React.FC<any>> = {
  LineChart,
}

function parseMarkdownIntoBlocks(markdown: string): Array<string | ReactNode> {
  const tokens = marked.lexer(markdown)
  return tokens
    .map((token) => token.raw)
    .reduce<Array<string | ReactNode>>((blocks, block) => {
      const { isComponentBlock, componentName, jsonData } = extractMarkdownComponent(block)
      const lastBlock = blocks[blocks.length - 1]

      if (isComponentBlock) {
        if (!componentName || !componentBlocks[componentName]) {
          throw new Error(`Unknown component type: ${componentName}`)
        }

        const Component = componentBlocks[componentName]
        blocks.push(Component ? <Component key={blocks.length} {...jsonData} /> : null)
      } else if (!lastBlock || typeof lastBlock !== 'string') {
        blocks.push(block)
      } else {
        blocks[blocks.length - 1] = lastBlock + block
      }
      return blocks
    }, [])
}

const MarkdownBlock = memo(
  ({ content }: { content: string }) => {
    if (content.replace(/[\s\n]/g, '').length === 0) {
      return null
    }
    return (
      content && <ReactMarkdown className="prose prose-slate prose-invert">{content}</ReactMarkdown>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.content !== nextProps.content) return false
    return true
  },
)

MarkdownBlock.displayName = 'MarkdownBlock'

type MarkdownProps = {
  content: string
}

export const Markdown = memo(({ content }: MarkdownProps) => {
  const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content])

  return (
    <Stack gap={4}>
      {blocks.map((block, index) =>
        typeof block === 'string' ? <MarkdownBlock content={block} key={index} /> : block,
      )}
    </Stack>
  )
})

Markdown.displayName = 'Markdown'
