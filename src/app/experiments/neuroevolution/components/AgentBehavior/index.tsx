import { Stack } from '@/components/stack'
import { Agent } from '../../lib/Agent'
import { Position } from '../Board/lib/BoardState'
import { SampleBoard } from '../SampleBoard'

interface AgentBehaviorProps {
  agent: Agent
}

const testKillPositions: Position[][] = [
  [[-1, 2]],
  [
    [-1, 1],
    [-1, 2],
    [-1, 3],
  ],
  [
    [-1, 2],
    [-2, 2],
  ],
  [
    [-1, 1],
    [-1, 2],
    [-2, 2],
    [-1, 3],
  ],
  [
    [-1, 0],
    [-2, 1],
    [-3, 2],
    [-2, 3],
    [-1, 4],
  ],
  [
    [-1, 0],
    [-2, 1],
    [-3, 2],
    [-2, 2],
    [-2, 3],
    [-1, 4],
  ],
]

export function AgentBehavior({ agent }: AgentBehaviorProps) {
  return (
    <Stack gap={6}>
      {testKillPositions.map((killPositions, index) => (
        <SampleBoard agent={agent} killPositions={killPositions} key={index} />
      ))}
    </Stack>
  )
}
