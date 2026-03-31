// app/components/Projects.tsx
"use client";

import { profile } from "../data/profile"; // Ensure this path matches where you saved profile.ts

export default function Projects() {
  return (
    <section className="relative w-full px-6 sm:px-12 max-w-5xl mx-auto py-32">
      
      <div className="mb-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
          System Core // 02
        </h2>
        <p className="font-syne text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Selected Arsenal.
        </p>
      </div>

      {/* The Sticky Stack Container */}
      <div className="flex flex-col gap-12 relative">
        {profile.projects.map((project, index) => (
          <div 
            key={project.title}
            className="sticky top-20 pt-8" // The magic CSS that makes them stack
            style={{ 
              zIndex: index, // Ensures newer cards stack on top
              top: `calc(10vh + ${index * 40}px)` // Offsets each card slightly down
            }} 
          >
            <div className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 sm:p-12 shadow-2xl transition-all hover:border-neutral-600 group">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-neutral-800/50 pb-8">
                <h3 className="text-3xl sm:text-4xl font-syne font-bold text-neutral-200 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:bg-neutral-300 transition-colors"
                >
                  View Source ↗
                </a>
              </div>

              <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 tracking-wide uppercase">
                    {t}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}