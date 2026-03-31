// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Projects() {
  return (
    <section className="relative w-full px-6 sm:px-12 max-w-6xl mx-auto py-32 z-10">
      
      {/* Massive Section Header */}
      <div className="mb-24 sm:mb-32">
        <h2 className="text-sm font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4">
          Capabilities // 02
        </h2>
        <h3 className="font-clash text-5xl sm:text-7xl font-bold text-white tracking-tighter">
          Featured Works.
        </h3>
      </div>

      {/* The Sticky Stacking Container */}
      <div className="flex flex-col relative pb-32">
        {profile.projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="sticky w-full"
            style={{ 
              top: `calc(15vh + ${index * 40}px)`, // Creates the physical stacking offset
              zIndex: index, 
            }}
          >
            {/* The Project Card */}
            <div className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-[2rem] p-8 sm:p-14 shadow-[0_-20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-neutral-600 group relative overflow-hidden">
              
              {/* Subtle top glare effect for a premium glass feel */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
                <h4 className="text-4xl sm:text-5xl font-clash font-bold text-neutral-100 group-hover:text-white transition-colors">
                  {project.title}
                </h4>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-satoshi font-bold text-sm tracking-wide hover:bg-neutral-200 hover:scale-105 transition-all duration-300"
                >
                  View Source 
                  <span className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <p className="font-satoshi text-lg sm:text-xl text-neutral-400 leading-relaxed lg:w-2/3">
                  {project.description}
                </p>

                <div className="lg:w-1/3 flex flex-wrap content-start gap-3">
                  {project.tech.map(t => (
                    <span 
                      key={t} 
                      className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-satoshi font-medium text-neutral-300 tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}