import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { Button } from '@/components/ui/button'
import { sleep } from '@/lib/utils/sleep'
import { round, sum } from 'lodash'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Board } from '../Board'
import { BoardState } from '../Board/lib/BoardState'

export interface DefaultFrameState {
  boardState: BoardState
  running?: boolean
  speed?: number
  runFor?: number | null
  fps?: number
  fpss?: number[]
  time?: number
  turbo?: boolean
  framesPerFrame?: number
  pendingFrames?: number
}

const turboFramesPerFrame = 16
const defaultFramesPerFrame = 1
const slowFps = 12
const slowSpeed = 1000 / slowFps
const defaultSpeed = 0

function framesPerSecond(currentFrameTime: number, previousFrameTime: number): number {
  return 1000 / (currentFrameTime - previousFrameTime)
}

export type SetState<TFrameState> = Dispatch<SetStateAction<TFrameState>>

interface FrameBoardProps<FrameState extends DefaultFrameState> {
  getNextFrameState: (state: FrameState) => FrameState
  onFrame?: (state: FrameState) => void
  initFrameState: () => FrameState
  renderChildren?: (state: FrameState, setState: SetState<FrameState>) => ReactNode
  renderControl?: (state: FrameState, setState: SetState<FrameState>) => ReactNode
  reset?: boolean
  turbo?: boolean
  height: number
  width: number
}

export function FrameBoard<FrameState extends DefaultFrameState>({
  getNextFrameState,
  onFrame,
  initFrameState,
  renderChildren,
  renderControl,
  reset = true,
  turbo = true,
  height,
  width,
}: FrameBoardProps<FrameState>) {
  const frameRef = useRef<number>(null)
  const [state, setState] = useState<FrameState>(initFrameState)

  const renderFrame = useCallback(
    (time: number) => {
      setState((prevState: FrameState) => {
        if (!prevState.running) {
          frameRef.current = requestAnimationFrame(renderFrame)
          return prevState
        }

        let nextState = getNextFrameState(prevState)
        if (onFrame) onFrame(nextState)

        let extraFrames = (prevState.framesPerFrame ?? 1) - 1
        while (extraFrames--) {
          nextState = getNextFrameState(nextState)
          if (onFrame) onFrame(nextState)
        }

        nextState.time = time

        nextState.fpss = [
          ...(nextState.fpss?.slice(-5) ?? []),
          framesPerSecond(nextState.time, prevState.time ?? time),
        ]
        nextState.fps = round(sum(nextState.fpss) / nextState.fpss.length)
        if (nextState.fps === Infinity) {
          nextState.fps = undefined
        }

        if (nextState.turbo && nextState.fps && nextState.fps > 40) {
          nextState.framesPerFrame = (nextState.framesPerFrame ?? 0) + 1
        } else if (nextState.turbo && nextState.fps && nextState.fps < 20) {
          nextState.framesPerFrame = (nextState.framesPerFrame ?? 0) - 1
        }

        nextState.runFor = prevState.runFor ? prevState.runFor - 1 : null
        nextState.running = nextState.runFor === null ? nextState.running : nextState.runFor > 0

        if (nextState.speed && nextState.speed > 0) {
          void sleep(nextState.speed).then(() => {
            frameRef.current = requestAnimationFrame(renderFrame)
          })
        } else {
          frameRef.current = requestAnimationFrame(renderFrame)
        }

        return nextState
      })
    },
    [getNextFrameState, onFrame],
  )

  useEffect(() => {
    frameRef.current = requestAnimationFrame(renderFrame)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [renderFrame])

  const handleReset = useCallback(() => {
    setState(initFrameState())
  }, [initFrameState])

  const handlePlay = useCallback(() => {
    setState((state) => ({
      ...state,
      running: true,
      runFor: null,
      speed: defaultSpeed,
      framesPerFrame: defaultFramesPerFrame,
      turbo: false,
    }))
  }, [])

  const handlePause = useCallback(() => {
    setState((state) => ({
      ...state,
      running: false,
      runFor: null,
      speed: defaultSpeed,
      framesPerFrame: defaultFramesPerFrame,
    }))
  }, [])

  const handleRunOne = useCallback(() => {
    setState((state) => ({
      ...state,
      running: true,
      runFor: 1,
      speed: defaultSpeed,
      framesPerFrame: defaultFramesPerFrame,
    }))
  }, [])

  const handleSetSpeed = useCallback(
    (speed: number) => () => {
      setState((state) => ({
        ...state,
        running: true,
        speed,
        framesPerFrame: defaultFramesPerFrame,
      }))
    },
    [],
  )

  const handleTurbo = useCallback(() => {
    setState((state) => ({
      ...state,
      running: true,
      speed: defaultSpeed,
      turbo: true,
      framesPerFrame: turboFramesPerFrame,
    }))
  }, [])

  const control = useMemo(
    () => (renderControl ? renderControl(state, setState) : null),
    [state, renderControl],
  )
  const children = useMemo(
    () => (renderChildren ? renderChildren(state, setState) : null),
    [state, renderChildren],
  )

  return (
    <Stack gap={6}>
      <Stack gap={2}>
        <Board boardState={state.boardState} width={width} height={height} />

        <Inline gap={4} flipMobile wrap>
          {reset && (
            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>
          )}

          <Inline gap={2}>
            <Button variant="outline" onClick={handlePause} disabled={!state.running}>
              Pause
            </Button>
            <Button
              onClick={handlePlay}
              disabled={state.running && !state.turbo && state.speed !== slowSpeed}
            >
              Play
            </Button>
          </Inline>

          <Inline gap={2}>
            {turbo && (
              <Button
                variant="secondary"
                onClick={handleTurbo}
                disabled={state.running && state.turbo}
              >
                Turbo
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={handleSetSpeed(slowSpeed)}
              disabled={state.running && state.speed === slowSpeed}
            >
              Slow
            </Button>
            <Button variant="outline" onClick={handleRunOne}>
              Step
            </Button>
          </Inline>

          {state.fps && <Text value={`${state.fps}fps`} color="light" />}

          {control}
        </Inline>
      </Stack>
      {children}
    </Stack>
  )
}
