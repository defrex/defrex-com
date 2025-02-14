import { Stack } from '@/components/stack'
import { Text } from '@/components/text/text'
import Image from 'next/image'
import { defaultLearningRate } from '../../lib/Genome'
import initialNeuralNetworkImage from './initialNeuralNet.png'

export default function HowItWorks() {
  return (
    <Stack gap={6}>
      <Text value="How It Works" size="xl" />

      <Text
        size="paragraph"
        as="p"
        color="light"
        value={`
          Each colored square (🟦) is a Neural Network, and each red square (🟥) is
          a killer! If a 🟦 touches a 🟥, it dies.
        `}
      />

      <Text
        size="paragraph"
        as="p"
        color="light"
        value={`
          When a 🟦 reaches the right edge, it circles back to the left edge
          and spawns a new child 🟦, which is the same as it's parent, but for
          a single mutation. The 🟥 spawn rate is directly proportional to the
          population size, so the more the 🟦 win, the harder it gets.
        `}
      />

      <Text
        size="paragraph"
        as="p"
        color="light"
        value={`
          The 🟦 neural networks start very simply. They have 3 inputs, and 3
          outputs.
        `}
      />
      <Stack gap={2}>
        <Text value="Inputs" size="lg" />
        <Text size="md" color="light" value="↱🟥 - Distance to 🟥 on the row above" />
        <Text size="md" color="light" value="→🟥 - Distance to 🟥 on the current row" />
        <Text size="md" color="light" value="↳🟥 - Distance to 🟥 on the row below" />
      </Stack>

      <Stack gap={2}>
        <Text value="Outputs" size="lg" />
        <Text size="md" color="light" value="🟦↑ - Move up" />
        <Text size="md" color="light" value="🟦→ - Move forward" />
        <Text size="md" color="light" value="🟦↓ - Move down" />
      </Stack>

      <Text
        size="paragraph"
        as="p"
        color="light"
        value={`
          The initial state of the network has the inputs mapped to the
          outputs with no hidden nodes, and edge weights randomly set to 1 or -1.
        `}
      />
      <div className="w-64 h-64">
        <Image src={initialNeuralNetworkImage} alt="Neural Network initial state" />
      </div>
      <Text
        size="paragraph"
        as="p"
        color="light"
        value={`
          From that initial state, these are the possible mutations that
          occur when a 🟦 hits the right wall.
        `}
      />

      <Stack gap={2}>
        <Text value="Add Node" size="lg" />
        <Text
          size="md"
          color="light"
          value={`
            Pick an edge at random and intermediate it with a node of bias
            1, a random squash function, and edge of weight 1.
          `}
        />
      </Stack>

      <Stack gap={2}>
        <Text value="Add Edge" size="lg" />
        <Text
          size="md"
          color="light"
          value="Select two random nodes and add an edge with weight 1."
        />
      </Stack>

      <Stack gap={2}>
        <Text value="Remove Node" size="lg" />
        <Text
          size="md"
          color="light"
          value={`Find and remove a hidden node, connecting all its inbound edges to all its outbound edges.`}
        />
      </Stack>

      <Stack gap={2}>
        <Text value="Remove Edge" size="lg" />
        <Text
          size="md"
          color="light"
          value="Find and remove an edge, making sure not to orphan any input or output nodes."
        />
      </Stack>

      <Stack gap={2}>
        <Text value="Mutate Edge Weight" size="lg" />
        <Text
          size="md"
          color="light"
          value={`
            Adjust the weight proportional with some "learning rate"
            constant, currently ${defaultLearningRate}.
          `}
        />
        <code className="bg-zinc-800 p-4 rounded-md text-sm font-mono">
          let newValue = (value * random(-2, 2) * learningRate) + (value * (1 - learningRate))
        </code>
      </Stack>

      <Stack gap={2}>
        <Text value="Mutate Node Bias" size="lg" />
        <Text
          size="md"
          color="light"
          value={`
            Adjust the bias proportional with some "learning rate"
            constant, currently ${defaultLearningRate}.
          `}
        />
      </Stack>

      <Stack gap={2}>
        <Text value="Mutate Node Squash" size="lg" />
        <Text size="md" color="light" value="Select a random squash (or activation) function." />
      </Stack>
    </Stack>
  )
}
