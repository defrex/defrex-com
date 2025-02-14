import { Post } from '@/lib/post'
import { postLoad } from '@/lib/utils/post-load'

export function postDetails(slug: string): Post | null {
  return postLoad(`${slug}.md`)
}
