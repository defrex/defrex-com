import { Markdown } from '@/components/markdown-renderer'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { postDetails } from '@/lib/post-details'
import { postList } from '@/lib/post-list'
import { notFound } from 'next/navigation'

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

        <Markdown content={post.content} />
      </Stack>
    </div>
  )
}

export async function generateStaticParams() {
  const posts = postList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
