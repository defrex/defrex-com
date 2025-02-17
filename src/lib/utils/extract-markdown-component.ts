interface ComponentBlockResult {
  isComponentBlock: boolean
  componentName?: string
  jsonData?: object
}

export function extractMarkdownComponent(markdown: string): {
  isComponentBlock: boolean
  componentName?: string
  jsonData?: object
} {
  // Default result
  const result: ComponentBlockResult = {
    isComponentBlock: false,
  }

  // Regular expression to match ```json [ComponentName] pattern and its content
  const regex = /```json\s*\[([^\]]+)\]\s*\n([\s\S]*?)```/
  const match = markdown.match(regex)

  if (!match) {
    return result
  }

  const [, componentName, jsonContent] = match

  const jsonData = JSON.parse(jsonContent.trim())
  return {
    isComponentBlock: true,
    componentName,
    jsonData,
  }
}
