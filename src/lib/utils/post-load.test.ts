import { describe, expect, test } from 'bun:test'
import { postLoad } from './post-load'

// Path: src/lib/utils/post-load.test.ts

describe('postLoad', () => {
  test('returns Post object for existing markdown file', () => {
    const post = postLoad('burn-damage.md')
    expect(post).not.toBeNull()
    expect(post?.slug).toBe('burn-damage')
    expect(post?.title).toBe('Burn Damage')
    expect(post?.date.toISOString()).toBe('2025-02-17T21:00:00.000Z')
    expect(post?.content).toContain("Recently I've been playing a lot")
  })

  test('returns null when markdown file does not exist', () => {
    const post = postLoad('nonexistent-file.md')
    expect(post).toBeNull()
  })
})
