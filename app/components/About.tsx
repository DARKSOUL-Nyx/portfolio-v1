// app/components/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track how far the user has scrolled through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"] // Starts revealing when top hits 80% of viewport, finishes at 50%
  });

  // Map the scroll progress to an opacity value (from very dim to fully bright)
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    // We give this section extra padding so there is actual room to scroll
    <section ref={containerRef} className="relative min-h-[120vh] flex items-center justify-center px-6 sm:px-12 max-w-7xl mx-auto">
      
      <div className="max-w-4xl">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-8">
          System Core // 01
        </h2>
        
        {/* The Scroll-Revealing Text */}
        <motion.p 
          style={{ opacity: textOpacity }}
          className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white"
        >
          I am a computer science engineer specializing in AI & ML. My focus lies at the bleeding edge of Agentic AI, MLOps, and scalable systems. I build autonomous frameworks that don't just compute—they reason, adapt, and secure themselves.
        </motion.p>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-12 border-t border-neutral-800 pt-8">
          <div>
            <h3 className="text-neutral-500 mb-2 text-sm uppercase tracking-widest">Base</h3>
            <p className="text-neutral-200">VIT Chennai</p>
          </div>
          <div>
            <h3 className="text-neutral-500 mb-2 text-sm uppercase tracking-widest">Graduation</h3>
            <p className="text-neutral-200">Class of 2026</p>
          </div>
          <div>
            <h3 className="text-neutral-500 mb-2 text-sm uppercase tracking-widest">Focus</h3>
            <p className="text-neutral-200">LLM Security & Autonomous Agents</p>
          </div>
        </div>
      </div>

    </section>
  );
}