'use client'

import { Inline } from '@/components/inline'
import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { BarChart2, TableIcon } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, YAxis } from 'recharts'

interface DataPoint {
  [key: string]: string | number
}

interface LineChartProps {
  data: DataPoint[]
  xKey: string
  yKey: string
  xLabel?: string
  yLabel?: string
  title?: string
  className?: string
}

export default function LineChart({
  data,
  xKey,
  yKey,
  xLabel,
  yLabel,
  title = 'Chart',
  className = '',
}: LineChartProps) {
  const [isChartView, setIsChartView] = useState(true)
  const [containerHeight, setContainerHeight] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Default to capitalized key names if no labels provided
  const displayXLabel = xLabel ?? xKey.charAt(0).toUpperCase() + xKey.slice(1)
  const displayYLabel = yLabel ?? yKey.charAt(0).toUpperCase() + yKey.slice(1)

  const handleChartView = useCallback(() => {
    setContainerHeight(null)
    setIsChartView(true)
  }, [])

  const handleTableView = useCallback(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight
      setContainerHeight(height)
    }
    setIsChartView(false)
  }, [])

  return !data?.length ? (
    <div className="flex items-center justify-center p-8 text-muted-foreground">
      <Text value="No data available" />
    </div>
  ) : (
    <Stack
      gap={4}
      ref={containerRef}
      className={`w-full overflow-auto ${className}`}
      style={{ height: containerHeight ? `${containerHeight}px` : 'auto' }}
    >
      <Inline className="justify-between">
        <Text value={title} />
        <Inline gap={2} className="cursor-pointer">
          <div
            onClick={handleChartView}
            className={`p-1 rounded ${isChartView ? 'text-primary' : 'text-muted-foreground hover:text-purple-200'}`}
          >
            <BarChart2 size={20} />
          </div>
          <div
            onClick={handleTableView}
            className={`p-1 rounded ${!isChartView ? 'text-primary' : 'text-muted-foreground hover:text-purple-200'}`}
          >
            <TableIcon size={20} />
          </div>
        </Inline>
      </Inline>

      {isChartView ? (
        <ChartContainer
          config={{
            [yKey]: {
              label: displayYLabel,
              color: 'var(--chart-1)',
            },
          }}
        >
          <RechartsLineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={xKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => (typeof value === 'string' ? value.slice(0, 3) : value)}
              label={{
                value: displayXLabel,
                position: 'bottom',
                style: { fill: 'var(--muted-foreground)' },
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              label={{
                value: displayYLabel,
                angle: -90,
                position: 'insideLeft',
                style: {
                  fill: 'var(--muted-foreground)',
                  textAnchor: 'middle',
                },
              }}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Line
              type="monotone"
              dataKey={yKey}
              stroke={`var(--color-${yKey})`}
              strokeWidth={2}
              dot={{
                fill: `var(--color-${yKey})`,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </RechartsLineChart>
        </ChartContainer>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky top-0 bg-background">
                <Text value={displayXLabel} />
              </TableHead>
              <TableHead className="sticky top-0 bg-background text-right">
                <Text value={displayYLabel} />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Text value={row[xKey]} />
                </TableCell>
                <TableCell className="text-right">
                  <Text
                    value={
                      typeof row[yKey] === 'number'
                        ? (row[yKey] as number).toLocaleString()
                        : row[yKey]
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Stack>
  )
}
