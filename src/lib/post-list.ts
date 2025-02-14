import { Post } from '@/lib/post'
import { postLoad } from '@/lib/utils/post-load'
import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function postList(): Post[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => postLoad(filename))
    .filter((post) => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) return 1
      if (a.date > b.date) return -1
      return 0
    })
}
