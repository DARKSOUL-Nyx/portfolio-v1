// app/components/Capabilities.tsx
"use client";

import { motion } from "framer-motion";

const capabilities = [
  { id: "01", title: "Agentic AI Frameworks", desc: "Designing autonomous LLM agents capable of multi-step reasoning, tool execution, and self-correction." },
  { id: "02", title: "LLM Security & Containment", desc: "Building defense-in-depth mechanisms, including deception frameworks and sandbox containment for safe AI execution." },
  { id: "03", title: "Scalable Infrastructure", desc: "Architecting high-performance MLOps pipelines and edge-computing solutions for real-time inference." },
  { id: "04", title: "Production Engineering", desc: "Delivering commercial-grade web applications and deployment architectures for enterprise clients." },
];

export default function Capabilities() {
  return (
    <section className="relative w-full px-6 sm:px-12 max-w-7xl mx-auto py-32 border-t border-neutral-900">
      
      {/* Background Blueprint Grid for the Fortune 500 Tech vibe */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

      <div className="relative z-10 mb-20">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
          Infrastructure // Capabilities
        </h2>
        <p className="font-clash text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Core Competencies.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 overflow-hidden rounded-2xl">
        {capabilities.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-[#050505] p-10 sm:p-14 hover:bg-[#0a0a0a] transition-colors duration-500"
          >
            <div className="text-neutral-600 font-clash text-2xl font-bold mb-6 group-hover:text-neutral-400 transition-colors">
              {item.id}
            </div>
            <h3 className="font-clash text-2xl sm:text-3xl font-semibold text-neutral-200 mb-4 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            <p className="text-neutral-400 leading-relaxed font-satoshi">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}