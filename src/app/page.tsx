import { postDetailsPath } from '@/app/posts/[slug]/path'
import { Inline } from '@/components/inline'
import { PageContainer } from '@/components/page-container'
import { Stack } from '@/components/stack'
import { TextLink } from '@/components/text-link'
import { Text } from '@/components/text/text'
import { postList } from '@/lib/post-list'
import { generateDefaultMetadata } from '@/lib/utils/metadata'
import { ExternalLinkIcon } from 'lucide-react'

const experiments = [
  {
    title: 'Abiogenesis.fun',
    href: 'https://abiogenesis.fun/',
    date: new Date('2024-08-30'),
    type: 'Experiment',
    description: 'Interactive simulation demonstrating the spontaneous emergence of life',
  },
  {
    title: 'Spendwell',
    href: 'https://spendwell.defrex.com/',
    date: new Date('2025-03-26'),
    type: 'Tool',
    description: 'Monitoring spending and managing subscriptions via CSV imports',
  },
  {
    title: 'Dicetribution',
    href: 'https://dicestribution.com/',
    date: new Date('2024-11-23'),
    type: 'Tool',
    description: 'Get the probability distribution of dice rolls',
  },
  {
    title: 'Neuroevolution',
    href: 'https://neuroevolution.defrex.com/',
    date: new Date('2022-12-01'),
    type: 'Experiment',
    description: 'Real-time neural network training via evolution',
  },
]

export const metadata = generateDefaultMetadata({
  title: 'Aron Jones',
  description: 'Personal site and blog of Aron Jones, software engineer and technologist.',
})

const postDescriptions: Record<string, string> = {
  'burn-damage': 'Analysis of burn damage mechanics',
  'first-know-all-you-believe-is-wrong': 'Exploring the limits of truth',
  'free-will':
    'Examining free will through the lens of continuity, compression, and subjective identity',
  'maxwells-demon-is-you':
    "How computation costs defeat Maxwell's Demon and what it means for consciousness",
  normativity:
    'Understanding how human groups form emergent organisms through shared mental models',
}

export default function Page() {
  const posts = postList().map((post) => ({
    ...post,
    type: 'Article',
    description: postDescriptions[post.slug] || '',
  }))

  const items = [...posts, ...experiments].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <PageContainer>
      {items.map((item, index) => (
        <TextLink key={index} href={'href' in item ? item.href : postDetailsPath(item.slug)}>
          <Stack gap={3}>
            {/* <div className="border border-neutral-400 rounded py-px px-1">
            </div> */}
            <Text value={item.type} size="sm" color="light" />
            <Inline gap={1}>
              <Text value={item.title} color="inherit" />
              {'href' in item && !item.href.startsWith('/') ? (
                <ExternalLinkIcon className="size-3" />
              ) : null}
            </Inline>
            {'description' in item && item.description ? (
              <Text value={item.description} size="sm" color="light" />
            ) : null}
            <Inline gap={1}>
              <Text value={item.date.toLocaleDateString()} size="sm" />
              {/* <Text value="·" size="sm" color="light" /> */}
            </Inline>
          </Stack>
        </TextLink>
      ))}
    </PageContainer>
  )
}
