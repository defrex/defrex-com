# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# defrex-com Development Guide

## Build & Development Commands
- Development: `bun run dev` or `npm run dev` (with Turbopack)
- Build: `bun run build` or `npm run build`
- Start: `bun run start` or `npm run start`
- Lint: `bun run lint` or `npm run lint`
- Run tests: `bun test` or `bun test src/lib/utils/extract-markdown-component.test.ts` (for a single file)

## Code Style Guidelines
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/inline`)
- **Formatting**: Use TypeScript, strict mode, and proper type annotations
- **Components**: React functional components with explicit type declarations
- **CSS**: Tailwind with `cn()` utility for class merging and conditional classes
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error Handling**: Use TypeScript to avoid runtime errors, throw when necessary
- **Testing**: Use Bun test framework with `describe`/`test`/`expect` pattern

## Architecture Overview

### Blog System
The blog uses a custom markdown-based content system:
- Posts are stored as markdown files in `/src/posts/`
- Dynamic routing via `/app/posts/[slug]/page.tsx`
- Custom markdown renderer (`/src/components/markdown-renderer.tsx`) supports embedding React components using JSON blocks:
  ```markdown
  ```json [ComponentName]
  { "prop": "value" }
  ```
  ```
- Post metadata extracted via gray-matter frontmatter
- OG images generated dynamically via `/app/api/og/route.tsx`

### Component Architecture
- **UI Components**: Using shadcn/ui setup (configured in `components.json`) with Radix UI primitives
- **Layout Components**: Stack and Inline components for consistent spacing
- **Text Component**: Custom typography system with predefined variants
- **Background**: Particle animation system in `/src/components/background-gradient/`

### Data Visualization
Multiple charting libraries are integrated:
- recharts (primary)
- victory
- reaflow
Custom LineChart component provides a consistent interface

### Styling System
- Dark theme by default using zinc color palette
- CSS variables defined in globals.css for theming
- Component-specific styles use CSS modules when needed
- Always use `cn()` utility from `/src/lib/utils/cn.ts` for conditional classes