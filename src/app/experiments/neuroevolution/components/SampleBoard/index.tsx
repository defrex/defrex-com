import { Inline } from '@/components/inline'
import { Text } from '@/components/text/text'
import { isNil, some } from 'lodash'
import { useCallback } from 'react'
import { Agent } from '../../lib/Agent'
import {
  advanceKillPositions,
  agentPositionColors,
  defaultCanvasWidth,
  defaultCellSize,
  killPositionColors,
} from '../../lib/getNextFrameState'
import { BoardState, Position } from '../Board/lib/BoardState'
import { DefaultFrameState, FrameBoard } from '../FrameBoard'

interface SampleBoardProps {
  agent: Agent
  killPositions: Position[]
}

interface SampleFrameState extends DefaultFrameState {
  agent: Agent
  boardState: BoardState
  result: 'death' | 'life' | null
}

const cellSize = defaultCellSize
const canvasHeight = defaultCellSize * 5
const canvasWidth = defaultCanvasWidth
const gridWidth = canvasWidth / cellSize
const gridHeight = canvasHeight / cellSize

export function SampleBoard({ agent: propsAgent, killPositions }: SampleBoardProps) {
  const initSampleFrameState = useCallback(
    (state?: SampleFrameState): SampleFrameState => {
      const agent = propsAgent.setPosition([0, 2])
      return {
        agent,
        running: !state,
        result: !isNil(state?.result) ? state!.result : null,
        boardState: new BoardState({
          gridWidth,
          gridHeight,
          cellSize,
        }).setPositions([
          ...agentPositionColors([agent], gridWidth),
          ...killPositions.map((position) => ({
            type: 'kill',
            color: '#ef4444',
            position,
          })),
        ]),
      }
    },
    [propsAgent, killPositions],
  )

  const getNextSampleFrameState = useCallback(
    (state: SampleFrameState): SampleFrameState => {
      const boardState = state.boardState
      const agent = state.agent.move(boardState)

      if (agent.position[0] >= gridWidth - 1) {
        return initSampleFrameState({ ...state, result: 'life' })
      }

      const killPositions: Position[] = advanceKillPositions(boardState)

      if (killPositions.length === 0) {
        return initSampleFrameState({ ...state, result: 'life' })
      }

      if (
        some(
          killPositions,
          ([killerX, killerY]) => agent.position[0] === killerX && agent.position[1] === killerY,
        )
      ) {
        return initSampleFrameState({ ...state, result: 'death' })
      }

      return {
        ...state,
        agent,
        boardState: boardState.setPositions([
          ...killPositionColors(killPositions),
          ...agentPositionColors([agent], gridWidth),
        ]),
        result: null,
      }
    },
    [initSampleFrameState],
  )

  return (
    <FrameBoard
      initFrameState={initSampleFrameState}
      getNextFrameState={getNextSampleFrameState}
      width={canvasWidth}
      height={canvasHeight}
      turbo={false}
      reset={false}
      renderControl={(state: SampleFrameState) => (
        <Inline justify="right">
          <Text
            value={state.result === 'life' ? '👑' : state.result === 'death' ? '☠️' : ''}
            size="lg"
          />
        </Inline>
      )}
    />
  )
}
