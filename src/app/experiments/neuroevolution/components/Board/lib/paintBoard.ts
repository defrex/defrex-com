import { Edge, edgeDirection, Position } from './BoardState'

const colors = {
  grid: '#71717a', // zinc-500
  node: '#0ea5e9', // sky-500
} as const

export function paintEdge(
  context: CanvasRenderingContext2D,
  nodeSize: number,
  [fromPosition, toPosition]: Edge,
  color: string = colors.grid,
): void {
  const direction = edgeDirection([fromPosition, toPosition])
  const fromX = fromPosition[0] * nodeSize
  const fromY = fromPosition[1] * nodeSize

  context.strokeStyle = color
  context.beginPath()
  if (direction === 'right') {
    context.moveTo(fromX + nodeSize, fromY)
    context.lineTo(fromX + nodeSize, fromY + nodeSize)
  } else if (direction === 'left') {
    context.moveTo(fromX, fromY)
    context.lineTo(fromX, fromY + nodeSize)
  } else if (direction === 'down') {
    context.moveTo(fromX, fromY + nodeSize)
    context.lineTo(fromX + nodeSize, fromY + nodeSize)
  } else if (direction === 'up') {
    context.moveTo(fromX, fromY)
    context.lineTo(fromX + nodeSize, fromY)
  }
  context.closePath()
  context.stroke()
}

export function clearEdge(
  context: CanvasRenderingContext2D,
  nodeSize: number,
  [fromPosition, toPosition]: Edge,
): void {
  const direction = edgeDirection([fromPosition, toPosition])
  const fromX = fromPosition[0] * nodeSize
  const fromY = fromPosition[1] * nodeSize

  if (direction === 'right') {
    context.clearRect(fromX - 1 + nodeSize, fromY, 3, nodeSize)
  } else if (direction === 'left') {
    context.clearRect(fromX - 1, fromY, 3, nodeSize)
  } else if (direction === 'down') {
    context.clearRect(fromX, fromY + nodeSize - 1, nodeSize, 3)
  } else if (direction === 'up') {
    context.clearRect(fromX, fromY - 1, nodeSize, 3)
  }
}

export function paintNode(
  context: CanvasRenderingContext2D,
  nodeSize: number,
  [gridX, gridY]: Position,
  color: string = colors.node,
): void {
  const dotHeight = nodeSize * 0.5
  const dotWidth = nodeSize * 0.5
  context.fillStyle = color
  context.fillRect(
    gridX * nodeSize + nodeSize * 0.5 - dotHeight * 0.5,
    gridY * nodeSize + nodeSize * 0.5 - dotHeight * 0.5,
    dotHeight,
    dotWidth,
  )
}

export function clearNode(
  context: CanvasRenderingContext2D,
  nodeSize: number,
  [gridX, gridY]: Position,
): void {
  const dotHeight = nodeSize * 0.25
  const dotWidth = nodeSize * 0.25
  context.clearRect(
    gridX * nodeSize + nodeSize * 0.5 - dotHeight * 0.5,
    gridY * nodeSize + nodeSize * 0.5 - dotHeight * 0.5,
    dotHeight,
    dotWidth,
  )
}
