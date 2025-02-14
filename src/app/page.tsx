import { Text } from '@/components/text/text'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="p-8">
      <header className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-start mb-16">
          <div>
            <Text as="h1" value="Aron Jones" className="text-5xl font-light mb-2" />
            <Text value="Superhumanist" className="text-2xl font-light" color="light" />
          </div>
          <div className="flex gap-8 text-xl">
            <Link href="#" className="text-white hover:text-purple-400 transition-colors">
              <Text value="GitHub" color="inherit" />
            </Link>
            <Link href="#" className="text-white hover:text-purple-400 transition-colors">
              <Text value="LinkedIn" color="inherit" />
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <Text value="Feb 14, 2025" color="inherit" size="sm" />
              <Text value=" · " color="inherit" size="sm" />
              <Text value="Experiment" color="inherit" size="sm" />
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              <Text value="Neuroevolution" color="inherit" size="xl" />
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <Text value="Feb 10, 2025" color="inherit" size="sm" />
              <Text value=" · " color="inherit" size="sm" />
              <Text value="Article" color="inherit" size="sm" />
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              <Text value="Normativity" color="inherit" size="xl" />
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <Text value="Feb 05, 2025" color="inherit" size="sm" />
              <Text value=" · " color="inherit" size="sm" />
              <Text value="Article" color="inherit" size="sm" />
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              <Text value="Maxwell's Demon is You!" color="inherit" size="xl" />
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <Text value="Jan 30, 2025" color="inherit" size="sm" />
              <Text value=" · " color="inherit" size="sm" />
              <Text value="Article" color="inherit" size="sm" />
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              <Text
                value="First, know that everything you believe is wrong"
                color="inherit"
                size="xl"
              />
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
