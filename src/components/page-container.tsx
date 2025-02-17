import { Stack } from '@/components/stack'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <Stack gap={8}>{children}</Stack>
}
