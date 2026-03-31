// app/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section className="relative w-full px-6 sm:px-12 max-w-6xl mx-auto py-32 z-10">
      
      {/* Massive Section Header */}
      <div className="mb-20 sm:mb-32">
        <h2 className="text-sm font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4">
          Track Record // 03
        </h2>
        <h3 className="font-clash text-5xl sm:text-7xl font-bold text-white tracking-tighter">
          Real Impact.
        </h3>
      </div>

      <div className="flex flex-col gap-6">
        {profile.experience.map((exp, index) => (
          <motion.div 
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-8 sm:p-12 rounded-[2rem] bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-500 hover:bg-[#0f0f0f] transition-all duration-500 overflow-hidden"
          >
            {/* Interactive Hover Glow (Pure CSS) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="flex-1 mb-6 md:mb-0">
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 font-satoshi text-xs font-bold tracking-widest uppercase text-neutral-400">
                  {exp.date}
                </span>
                <p className="font-satoshi text-lg font-medium text-neutral-500">
                  {exp.company}
                </p>
              </div>
              <h4 className="font-clash text-3xl sm:text-4xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                {exp.role}
              </h4>
            </div>

            <div className="md:w-1/2 md:pl-12 md:border-l border-neutral-800 group-hover:border-neutral-600 transition-colors duration-500">
              <p className="font-satoshi text-lg text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}