import { describe, expect, test } from 'bun:test'
import { extractMarkdownComponent } from './extract-markdown-component'

describe('extractMarkdownComponent', () => {
  test('should correctly parse a valid component block', () => {
    const markdown = `
\`\`\`json [LineChart]
{
  "data": [
    {"x": 1, "y": 2},
    {"x": 2, "y": 3},
    {"x": 3, "y": 4}
  ]
}
\`\`\`
`
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: true,
      componentName: 'LineChart',
      jsonData: {
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 4 },
        ],
      },
    })
  })

  test('should return isComponentBlock: false for regular markdown', () => {
    const markdown = 'This is just regular markdown text'
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: false,
    })
  })

  test('should handle component blocks with minimal whitespace', () => {
    const markdown = '```json [Minimal]\n{"key":"value"}```'
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: true,
      componentName: 'Minimal',
      jsonData: { key: 'value' },
    })
  })

  test('should handle component blocks with extra whitespace', () => {
    const markdown = `
\`\`\`json   [SpacedComponent]
    {
      "key": "value"
    }
\`\`\`
    `
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: true,
      componentName: 'SpacedComponent',
      jsonData: { key: 'value' },
    })
  })

  test('should throw error for invalid JSON', () => {
    const markdown = `
\`\`\`json [BadJSON]
{
  "key": "value"
  invalid json here
}
\`\`\`
`
    expect(() => extractMarkdownComponent(markdown)).toThrow()
  })

  test('should handle empty JSON object', () => {
    const markdown = `\`\`\`json [EmptyComponent]
{}
\`\`\``
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: true,
      componentName: 'EmptyComponent',
      jsonData: {},
    })
  })

  test('should handle complex nested JSON', () => {
    const markdown = `
\`\`\`json [ComplexComponent]
{
  "array": [1, 2, 3],
  "nested": {
    "object": {
      "key": "value"
    }
  },
  "nullValue": null,
  "boolean": true
}
\`\`\`
`
    const result = extractMarkdownComponent(markdown)
    expect(result).toEqual({
      isComponentBlock: true,
      componentName: 'ComplexComponent',
      jsonData: {
        array: [1, 2, 3],
        nested: {
          object: {
            key: 'value',
          },
        },
        nullValue: null,
        boolean: true,
      },
    })
  })
})
