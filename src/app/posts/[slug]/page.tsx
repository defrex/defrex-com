import { Markdown } from '@/components/markdown-renderer'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { postDetails } from '@/lib/post-details'
import { postList } from '@/lib/post-list'
import { generateDefaultMetadata } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PostDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export default async function PostDetailsPage({ params }: PostDetailsPageProps) {
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

export async function generateMetadata({ params }: PostDetailsPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = postDetails(slug)

  if (!post) {
    return generateDefaultMetadata({
      title: 'Post not found - Aron Jones',
    })
  }

  // Get first paragraph for description (without any markdown components)
  const firstParagraph =
    post.content
      .split('\n\n')
      .find(
        (paragraph) =>
          paragraph.trim() !== '' && !paragraph.startsWith('#') && !paragraph.startsWith('```'),
      ) || ''
  
  const description = firstParagraph.slice(0, 160)

  return generateDefaultMetadata({
    title: `${post.title} - Aron Jones`,
    description,
    ogTitle: post.title,
    ogDescription: description,
    ogType: 'article',
    ogPath: `/posts/${post.slug}`,
    openGraph: {
      publishedTime: post.date.toISOString(),
      authors: ['Aron Jones'],
    }
  })
}

export async function generateStaticParams() {
  const posts = postList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
