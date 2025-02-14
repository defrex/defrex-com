import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export interface Post {
  slug: string
  title: string
  date: Date
  content: string
}

export const postsDirectory = path.join(process.cwd(), 'src/posts')

export function postLoad(filename: string): Post | null {
  const slug = filename.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${filename}`)
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title ?? 'Untitled',
      date: new Date(data.date ?? ''),
      content,
    }
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
      return null
    }
    throw err
  }
}
