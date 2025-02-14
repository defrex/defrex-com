import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { Button } from '@/components/ui/button'
import { MouseEvent } from 'react'
import { Agent } from '../../lib/Agent'

interface AgentInfoProps {
  agent: Agent
  onSelect?: (agent: Agent) => (event: MouseEvent) => void
}

export function AgentInfo({ agent, onSelect }: AgentInfoProps) {
  return (
    <Inline key={agent.id} gap={4} align="top">
      <Stack gap={2}>
        <Text value={`Agent ${agent.id}`} size="xl" />
        {agent.moves !== undefined && (
          <Stack gap={1}>
            <Text value="Moves" color="light" />
            <Text value={agent.moves.toString()} />
          </Stack>
        )}
        {agent.position !== undefined && (
          <Stack gap={1}>
            <Text value="Current Position" color="light" />
            <Text value={`[${agent.position.join(' , ')}]`} mono />
          </Stack>
        )}
      </Stack>

      {onSelect && (
        <Button variant="outline" onClick={onSelect(agent)}>
          Select
        </Button>
      )}
    </Inline>
  )
}
