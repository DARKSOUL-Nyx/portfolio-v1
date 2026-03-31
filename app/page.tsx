// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-24">
      {/* 1. The Hook */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Nishwan</h1>
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
          I'm a final-year Computer Science undergraduate at VIT Chennai, specializing in AI & ML. 
          I focus on Agentic AI, MLOps, and scalable systems, currently exploring the intersection of 
          autonomous agents and security.
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <a href="https://github.com/DARKSOUL-Nyx" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">GitHub</a>
          <a href="https://vssnishwan.xyz" className="hover:underline underline-offset-4">Website</a>
          {/* Add LinkedIn or Twitter here if desired */}
        </div>
      </section>

      {/* 2. Highlight Reel */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Recent Highlights</h2>
        <div className="space-y-4">
          <div className="p-5 border border-[var(--border)] rounded-lg bg-[var(--muted)]">
            <h3 className="font-medium">Best Paper Award &mdash; IEEE Xplore</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              Authored and published a research paper receiving the Best Paper Award.
            </p>
          </div>
          <div className="p-5 border border-[var(--border)] rounded-lg bg-[var(--muted)]">
            <h3 className="font-medium">Freelance Developer &mdash; Perfect Test House</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              Designed, built, and deployed a production-ready corporate website for a commercial client.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Projects */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Selected Work</h2>
        <div className="flex flex-col gap-8">
          
          {/* Project 1 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">SentinLLM</h3>
              <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">View Source ↗</a>
            </div>
            <p className="text-[var(--muted-foreground)]">
              An Autonomous Deception & Containment Framework for Large Language Models. Focuses on handling specific vulnerabilities and tool design for secure LLM execution.
            </p>
          </div>

          {/* Project 2 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">CodeReaper</h3>
              <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">View Source ↗</a>
            </div>
            <p className="text-[var(--muted-foreground)]">
              A multi-agent system engineered for automated legacy code refactoring.
            </p>
          </div>

          {/* Project 3 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">Nexus Lite</h3>
              <a href="#" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">View Source ↗</a>
            </div>
            <p className="text-[var(--muted-foreground)]">
              A personal on-device AI assistant with a dedicated voice interface, optimized to run locally.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Contact / Footer */}
      <section className="pt-8 border-t border-[var(--border)]">
        <p className="text-sm text-[var(--muted-foreground)]">
          Building scalable systems. Expected graduation: 2026.
        </p>
      </section>
    </main>
  );
}