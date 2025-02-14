import Link from "next/link";

export default function Page() {
  return (
    <div className="p-8">
      <header className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-white text-5xl font-light mb-2">Aron Jones</h1>
            <p className="text-zinc-400 text-2xl font-light">Superhumanist</p>
          </div>
          <div className="flex gap-8 text-xl">
            <Link
              href="#"
              className="text-white hover:text-purple-400 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="text-white hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <span>Feb 14, 2025</span>
              <span className="mx-2">·</span>
              <span>Experiment</span>
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              Neuroevolution
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <span>Feb 10, 2025</span>
              <span className="mx-2">·</span>
              <span>Article</span>
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              Normativity
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <span>Feb 05, 2025</span>
              <span className="mx-2">·</span>
              <span>Article</span>
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              Maxwell&apos;s Demon is You!
            </div>
          </Link>

          <Link href="#" className="group block">
            <div className="text-zinc-500 text-sm mb-1">
              <span>Jan 30, 2025</span>
              <span className="mx-2">·</span>
              <span>Article</span>
            </div>
            <div className="text-purple-400 group-hover:text-purple-300 transition-colors text-xl">
              First, know that everything you believe is wrong
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
