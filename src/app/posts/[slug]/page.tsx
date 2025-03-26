import { Markdown } from '@/components/markdown-renderer'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { postDetails } from '@/lib/post-details'
import { postList } from '@/lib/post-list'
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
    return {
      title: 'Post not found - Aron Jones',
    }
  }

  const domain =
    process.env.VERCEL_URL ??
    process.env.VERCEL_BRANCH_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL

  const baseUrl = domain ? `https://${domain}` : 'http://localhost:3000'

  console.log({
    VERCEL_URL: process.env.VERCEL_URL,
    VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
    baseUrl,
  })

  // Get first paragraph for description (without any markdown components)
  const firstParagraph =
    post.content
      .split('\n\n')
      .find(
        (paragraph) =>
          paragraph.trim() !== '' && !paragraph.startsWith('#') && !paragraph.startsWith('```'),
      ) || ''

  return {
    title: `${post.title} - Aron Jones`,
    description: firstParagraph.slice(0, 160),
    openGraph: {
      title: post.title,
      description: firstParagraph.slice(0, 160),
      type: 'article',
      publishedTime: post.date.toISOString(),
      authors: ['Aron Jones'],
      url: `${baseUrl}/posts/${post.slug}`,
      siteName: 'Aron Jones',
      images: [
        {
          url: `${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: firstParagraph.slice(0, 160),
      images: [`${baseUrl}/api/og?title=${encodeURIComponent(post.title)}`],
    },
  }
}

export async function generateStaticParams() {
  const posts = postList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
