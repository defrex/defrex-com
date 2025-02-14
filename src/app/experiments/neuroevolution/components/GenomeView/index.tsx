import { round } from 'lodash'
import { MouseEvent, useEffect, useMemo, useState } from 'react'
import { EdgeData, NodeData } from 'reaflow'
import { Agent } from '../../lib/Agent'
import { Genome, getSquashName } from '../../lib/Genome'

interface GenomeViewProps {
  genome: Genome
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

export function GenomeView({ genome, onClick }: GenomeViewProps) {
  const [realflow, setRealflow] = useState<typeof import('reaflow') | null>(null)

  useEffect(() => {
    if (realflow) return
    import('reaflow').then((realflowImport) => {
      setRealflow(realflowImport)
    })
  }, [realflow, setRealflow])

  useEffect(() => {
    const prevScrollY = window.scrollY
    window.scroll(0, 0)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      window.scroll(0, prevScrollY)
      document.documentElement.style.overflow = 'initial'
    }
  }, [])

  const nodes: NodeData[] = useMemo(() => {
    return genome.nodes.map((node, index) => ({
      id: index.toString(),
      text: `${
        index < Agent.inputLabels.length
          ? `${Agent.inputLabels[index]}`
          : index >= genome.nodes.length - Agent.outputLabels.length
            ? `${Agent.outputLabels[index - (genome.nodes.length - Agent.outputLabels.length)]}`
            : node.type === 'hidden'
              ? ''
              : node.type
      } ${getSquashName(node.squash)}(${round(node.bias, 2)})`,
    }))
  }, [genome])

  const edges: EdgeData[] = useMemo(() => {
    return genome.edges.map((edge, index) => ({
      id: index.toString(),
      from: edge.fromNodeIndex.toString(),
      to: edge.toNodeIndex.toString(),
      text: round(edge.weight, 2).toString(),
    }))
  }, [genome])

  if (!realflow) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-black/80" onClick={onClick}>
      <realflow.Canvas
        fit={true}
        nodes={nodes}
        edges={edges}
        disabled={true}
        animated={false}
        node={
          <realflow.Node
            style={{
              fill: '#27272a',
              strokeWidth: 0,
            }}
            label={<realflow.Label style={{ fill: '#fafafa' }} />}
          />
        }
        edge={
          <realflow.Edge
            style={{
              stroke: '#52525b',
            }}
          />
        }
        arrow={<realflow.MarkerArrow style={{ fill: '#52525b' }} />}
      />
    </div>
  )
}
