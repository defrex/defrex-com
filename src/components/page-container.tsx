import { Stack } from '@/components/stack'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-[1024px]">
      <Stack gap={8}>{children}</Stack>
    </div>
  )
}
