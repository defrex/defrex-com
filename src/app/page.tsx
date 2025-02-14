import { neuroevolutionPath } from '@/app/experiments/neuroevolution/path'
import { postDetailsPath } from '@/app/posts/[slug]/path'
import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { TextLink } from '@/components/text-link'
import { Text } from '@/components/text/text'
import { postList } from '@/lib/post-list'

const experiments = [
  {
    title: 'Neuroevolution',
    href: neuroevolutionPath(),
    date: new Date('2025-02-14'),
    type: 'experiment',
  },
]

export default function Page() {
  const posts = postList().map((post) => ({
    ...post,
    type: 'post',
  }))

  const items = [...posts, ...experiments].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <div className="container mx-auto max-w-[1024px]">
      <Stack gap={8}>
        {items.map((item, index) => (
          <TextLink
            key={index}
            href={'href' in item ? item.href : postDetailsPath(item.slug)}
            className="group block"
          >
            <Stack gap={3}>
              <Text value={item.title} size="lg" color="inherit" />
              <Inline gap={1}>
                <Text value={item.date.toLocaleDateString()} size="sm" color="light" />
                <Text value="·" size="sm" color="light" />
                <Text value={item.type} size="sm" color="light" />
              </Inline>
            </Stack>
          </TextLink>
        ))}
      </Stack>
    </div>
  )
}
