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

## Project Structure
- `/src/app`: Next.js app router pages
- `/src/components`: Reusable UI components
- `/src/lib`: Utilities and shared code
- `/src/posts`: Markdown content