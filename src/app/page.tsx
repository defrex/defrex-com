import { postDetailsPath } from '@/app/posts/[slug]/path'
import { Inline } from '@/components/inline'
import { PageContainer } from '@/components/page-container'
import { Stack } from '@/components/stack'
import { TextLink } from '@/components/text-link'
import { Text } from '@/components/text/text'
import { postList } from '@/lib/post-list'
import { ExternalLinkIcon } from 'lucide-react'

const experiments = [
  {
    title: 'Spendwell',
    href: 'https://spendwell.defrex.com/',
    date: new Date('2025-03-26'),
    type: 'Tool',
  },
  {
    title: 'Dicetribution',
    href: 'https://dicestribution.com/',
    date: new Date('2024-11-23'),
    type: 'Tool',
  },
  {
    title: 'Neuroevolution',
    href: 'https://neuroevolution.defrex.com/',
    date: new Date('2022-12-01'),
    type: 'Experiment',
  },
]

export const metadata = {
  title: 'Aron Jones',
}

export default function Page() {
  const posts = postList().map((post) => ({
    ...post,
    type: 'Article',
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
            <Inline gap={1}>
              <Text value={item.date.toLocaleDateString()} size="sm" color="light" />
              {/* <Text value="·" size="sm" color="light" /> */}
            </Inline>
          </Stack>
        </TextLink>
      ))}
    </PageContainer>
  )
}
