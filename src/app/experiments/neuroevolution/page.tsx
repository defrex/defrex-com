'use client'

import { Inline } from '@/components/inline'
import { PageContainer } from '@/components/page-container'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { Button } from '@/components/ui/button'
import { last, round, some } from 'lodash'
import { useCallback, useState } from 'react'
import { VictoryArea, VictoryChart, VictoryLine } from 'victory'
import { AgentBehavior } from './components/AgentBehavior'
import { FrameBoard, SetState } from './components/FrameBoard'
import { GenomeView } from './components/GenomeView'
import HowItWorks from './components/HowItWorks'
import { Agent } from './lib/Agent'
import {
  defaultCanvasHeight,
  defaultCanvasWidth,
  defaultCellSize,
  FrameState,
  getNextFrameState,
  initFrameState,
  movesColor,
} from './lib/getNextFrameState'

interface AgentSample {
  move: number
  difficulty: number
  fitness?: number
  agent: Agent
}

function equivalentSamples(agent: Agent, otherAgent: Agent): boolean {
  return otherAgent.id === agent.id && otherAgent.move === agent.move
}

export default function NeuroevolutionPage() {
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const [sampleAgents, setSampleAgents] = useState<AgentSample[]>([])
  const [showAgentBehavior, setShowAgentBehavior] = useState<Agent | null>(null)
  const [showAgentNetwork, setShowAgentNetwork] = useState<Agent | null>(null)
  const [metricsSpeed, setMetricsSpeed] = useState<Record<string, 'fast' | 'slow'>>({
    population: 'slow',
    lineage: 'slow',
    difficulty: 'slow',
    complexity: 'slow',
  })

  const handleToggleMetric = useCallback(
    (metric: 'population' | 'lineage' | 'difficulty' | 'complexity') => () => {
      setMetricsSpeed({
        ...metricsSpeed,
        [metric]: metricsSpeed[metric] === 'fast' ? 'slow' : 'fast',
      })
    },
    [metricsSpeed, setMetricsSpeed],
  )

  const handleToggleAutoSample = useCallback(
    (setState: SetState<FrameState>) => () => {
      setState((state) => ({ ...state, autoSample: !state.autoSample }))
    },
    [],
  )

  const handleSampleAgent = useCallback(
    (state: FrameState) => () => {
      setSampleAgents((sampleAgents) => {
        // const nextSampleAgent = bestAgent(state.agents)
        const nextSampleAgent = state.agents.reduce((best: Agent | undefined, agent) => {
          if (
            !some(sampleAgents, (sampleAgent) => equivalentSamples(agent, sampleAgent.agent)) &&
            (best === undefined || agent.moves > best.moves)
          ) {
            return agent
          }
          return best
        }, undefined)

        if (!nextSampleAgent) {
          console.log('No Samples Left!')
          return sampleAgents
        }

        console.log('Sample Agent', nextSampleAgent)

        return [
          ...sampleAgents,
          {
            move: state.move,
            difficulty: last(state.metrics.fast.difficulty)?.value ?? 0,
            agent: nextSampleAgent,
          },
        ]
      })
    },
    [setSampleAgents],
  )

  const handleFrame = useCallback(
    (state: FrameState): void => {
      const sampleRate = state.move < 100000 ? 10000 : 100000
      if (state.autoSample && state.move % sampleRate === 0) {
        requestAnimationFrame(handleSampleAgent(state))
      }
    },
    [handleSampleAgent],
  )

  const handleClearSampleAgent = useCallback(
    (agent: Agent) => () => {
      setSampleAgents((sampleAgents) => {
        return sampleAgents.filter((sample) => !equivalentSamples(sample.agent, agent))
      })
    },
    [setSampleAgents],
  )

  const handleToggleAgentBehavior = useCallback(
    (selection: Agent | null) => () => {
      setShowAgentBehavior(null)
      if (selection && (!showAgentBehavior || !equivalentSamples(selection, showAgentBehavior))) {
        requestAnimationFrame(() => setShowAgentBehavior(selection))
      }
    },
    [setShowAgentBehavior, showAgentBehavior],
  )

  const handleShowAgentNetwork = useCallback(
    (selection: Agent | null) => () => {
      setShowAgentNetwork(selection)
    },
    [setShowAgentNetwork],
  )

  const handleToggleHowItWorks = useCallback(() => {
    setShowHowItWorks(!showHowItWorks)
  }, [setShowHowItWorks, showHowItWorks])

  return (
    <Stack gap={4}>
      <PageContainer>
        <Stack gap={8}>
          <Inline justify="between" align="center">
            <Stack gap={2}>
              <Text value="Neuroevolution" size="lg" />
              <Text value="Neural Networks trained via Evolutionary Algorithm" color="light" />
            </Stack>
            <Button onClick={handleToggleHowItWorks} variant="outline">
              {showHowItWorks ? 'Hide' : 'How It Works'}
            </Button>
          </Inline>

          {showHowItWorks ? <HowItWorks /> : null}
        </Stack>
      </PageContainer>
      <Inline align="top" justify="center" className="max-w-[1536px] mx-auto">
        <FrameBoard
          initFrameState={initFrameState}
          getNextFrameState={getNextFrameState}
          onFrame={handleFrame}
          width={defaultCanvasWidth}
          height={defaultCanvasHeight}
          renderControl={(state, setState) => (
            <Inline justify="right" gap={2}>
              <Button variant="outline" onClick={handleToggleAutoSample(setState)}>
                Auto {state.autoSample ? '(On)' : '(Off)'}
              </Button>
              <Button onClick={handleSampleAgent(state)}>Take Sample</Button>
            </Inline>
          )}
          renderChildren={(state: FrameState) => (
            <Stack gap={6}>
              <Stack gap={2}>
                <Inline justify="between">
                  <Text value="Difficulty (spawns/frame)" color="light" />
                  <Button variant="ghost" size="sm" onClick={handleToggleMetric('difficulty')}>
                    {metricsSpeed.difficulty === 'fast' ? 'Realtime (On)' : 'Realtime (Off)'}
                  </Button>
                </Inline>
                <VictoryChart height={200}>
                  <VictoryLine
                    data={state.metrics[metricsSpeed.difficulty].difficulty}
                    x="move"
                    y="value"
                  />
                </VictoryChart>
              </Stack>

              <Stack gap={2}>
                <Inline justify="between">
                  <Text value="Network Complexity" color="light" />
                  <Button variant="ghost" size="sm" onClick={handleToggleMetric('complexity')}>
                    {metricsSpeed.complexity === 'fast' ? 'Realtime (On)' : 'Realtime (Off)'}
                  </Button>
                </Inline>
                <VictoryChart height={200}>
                  <VictoryArea
                    data={state.metrics[metricsSpeed.complexity].complexity}
                    x="move"
                    y0="min"
                    y="max"
                  />
                  <VictoryLine
                    data={state.metrics[metricsSpeed.complexity].complexityMax}
                    x="move"
                    y="value"
                  />
                  <VictoryLine
                    data={state.metrics[metricsSpeed.complexity].complexityMin}
                    x="move"
                    y="value"
                  />
                </VictoryChart>
              </Stack>

              <Stack gap={2}>
                <Inline justify="between">
                  <Text value="Lineage" color="light" />
                  <Button variant="ghost" size="sm" onClick={handleToggleMetric('lineage')}>
                    {metricsSpeed.lineage === 'fast' ? 'Realtime (On)' : 'Realtime (Off)'}
                  </Button>
                </Inline>
                <VictoryChart height={200}>
                  <VictoryArea
                    data={state.metrics[metricsSpeed.lineage].lineage}
                    x="move"
                    y0="min"
                    y="max"
                  />
                  <VictoryLine
                    data={state.metrics[metricsSpeed.lineage].lineageMax}
                    x="move"
                    y="value"
                  />
                  <VictoryLine
                    data={state.metrics[metricsSpeed.lineage].lineageMin}
                    x="move"
                    y="value"
                  />
                </VictoryChart>
              </Stack>
            </Stack>
          )}
        />

        {sampleAgents.length > 0 ? (
          <Stack gap={4}>
            <table className="w-[768px]">
              <thead>
                <tr>
                  <th className="text-left p-2">
                    <Text value="At Frame" color="light" />
                  </th>
                  <th className="text-left p-2">
                    <Text value="At Difficulty" color="light" />
                  </th>
                  <th className="p-2"></th>
                  <th className="text-left p-2">
                    <Text value="Moves" color="light" />
                  </th>
                  <th className="text-left p-2">
                    <Text value="Lineage" color="light" />
                  </th>
                  <th className="text-left p-2">
                    <Text value="Complexity" color="light" />
                  </th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {sampleAgents.map(({ move, fitness, difficulty, agent }) => (
                  <tr key={`${move}-${agent.id}`}>
                    <td className="p-2 first:rounded-l-md">
                      <Text value={`${move.toLocaleString()}`} />
                    </td>
                    <td className="p-2">
                      <Text value={`${round((difficulty || fitness) ?? 0, 2)}`} />
                    </td>
                    <td className="p-2">
                      <div
                        style={{
                          backgroundColor: movesColor(
                            agent.moves,
                            defaultCanvasWidth / defaultCellSize,
                          ),
                          height: defaultCellSize * 0.5,
                          width: defaultCellSize * 0.5,
                        }}
                      />
                    </td>
                    <td className="p-2">
                      <Text value={`${agent.moves}`} />
                    </td>
                    <td className="p-2">
                      <Text value={`${agent.lineage.toLocaleString()}`} />
                    </td>
                    <td className="p-2">
                      <Text value={`${agent.genome.nodes.length + agent.genome.edges.length}`} />
                    </td>
                    <td className="p-2 text-right last:rounded-r-md">
                      <Inline gap={2} justify="right">
                        <Inline gap={1}>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleShowAgentNetwork(agent)}
                          >
                            Network
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleToggleAgentBehavior(agent)}
                            disabled={
                              !!(showAgentBehavior && equivalentSamples(showAgentBehavior, agent))
                            }
                          >
                            Behavior
                          </Button>
                        </Inline>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={handleClearSampleAgent(agent)}
                        >
                          Remove
                        </Button>
                      </Inline>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {showAgentBehavior ? <AgentBehavior agent={showAgentBehavior} /> : null}

            {showAgentNetwork ? (
              <GenomeView genome={showAgentNetwork.genome} onClick={handleShowAgentNetwork(null)} />
            ) : null}
          </Stack>
        ) : null}
      </Inline>
    </Stack>
  )
}
