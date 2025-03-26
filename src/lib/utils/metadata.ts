import { Metadata } from 'next'

/**
 * Get the base URL based on the current environment
 */
export function getBaseUrl(): string {
  const domain =
    process.env.VERCEL_URL ??
    process.env.VERCEL_BRANCH_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL

  return domain ? `https://${domain}` : 'http://localhost:3000'
}

/**
 * Generate metadata for pages with sensible defaults
 */
export function generateDefaultMetadata({
  title,
  description = 'Personal site and blog of Aron Jones, software engineer and technologist.',
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  ogPath = '',
  openGraph = {},
}: {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  ogPath?: string
  openGraph?: Record<string, unknown>
}): Metadata {
  const baseUrl = getBaseUrl()
  const fullUrl = `${baseUrl}${ogPath}`

  // Use provided values or fallback to defaults
  const metaOgTitle =
    ogTitle || (title === 'Aron Jones' ? 'Technologist & Natural Philosopher' : title)
  const metaOgDescription = ogDescription || description
  const metaOgImage = ogImage || `${baseUrl}/api/og?title=${encodeURIComponent(metaOgTitle)}`

  return {
    title,
    description,
    openGraph: {
      title: metaOgTitle,
      description: metaOgDescription,
      type: ogType,
      url: fullUrl,
      siteName: 'Aron Jones',
      images: [
        {
          url: metaOgImage,
          width: 1200,
          height: 630,
          alt: metaOgTitle,
        },
      ],
      ...openGraph, // Merge additional OpenGraph properties
    },
    twitter: {
      card: 'summary_large_image',
      title: metaOgTitle,
      description: metaOgDescription,
      images: [metaOgImage],
    },
  }
}
