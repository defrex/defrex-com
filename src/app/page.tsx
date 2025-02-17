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
    title: 'Dicetribution',
    href: 'https://dicestribution.com/',
    date: new Date('2024-11-23'),
    type: 'tool',
  },
  {
    title: 'Neuroevolution',
    href: 'https://neuroevolution.defrex.com/',
    date: new Date('2022-12-01'),
    type: 'experiment',
  },
]

export const metadata = {
  title: 'Aron Jones',
}

export default function Page() {
  const posts = postList().map((post) => ({
    ...post,
    type: 'post',
  }))

  const items = [...posts, ...experiments].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <PageContainer>
      {items.map((item, index) => (
        <TextLink key={index} href={'href' in item ? item.href : postDetailsPath(item.slug)}>
          <Stack gap={3}>
            <Inline gap={1}>
              <Text value={item.title} color="inherit" />
              {'href' in item && !item.href.startsWith('/') ? (
                <ExternalLinkIcon className="size-3" />
              ) : null}
            </Inline>
            <Inline gap={1}>
              <Text value={item.date.toLocaleDateString()} size="sm" color="light" />
              <Text value="·" size="sm" color="light" />
              <Text value={item.type} size="sm" color="light" />
            </Inline>
          </Stack>
        </TextLink>
      ))}
    </PageContainer>
  )
}
