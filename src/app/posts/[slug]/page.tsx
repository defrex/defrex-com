import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { postDetails } from '@/lib/post-details'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export default async function PostDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = postDetails(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-[65ch]">
      <Stack gap={8}>
        <Stack gap={4}>
          <Text as="h1" value={post.title} size="xxl" bold="strong" />
          <Text as="p" value={post.date.toLocaleDateString()} color="light" />
        </Stack>

        <article className="prose prose-slate prose-invert">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </Stack>
    </div>
  )
}
