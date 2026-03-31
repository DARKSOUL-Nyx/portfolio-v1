// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 sm:px-12 w-full max-w-7xl mx-auto">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="z-10 mix-blend-difference">
        {/* Massive Name Reveal */}
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[10vw] leading-none font-black tracking-tighter uppercase text-white"
        >
          Nishwan
        </motion.h1>
        
        {/* Subtitle and Bio */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-4 md:gap-12 mt-6 md:items-center"
        >
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-400 whitespace-nowrap">
            AI & ML Engineer
          </h2>
          <p className="max-w-md text-sm md:text-base text-neutral-500 leading-relaxed">
            Building scalable systems and exploring the intersection of autonomous LLM agents and security.
          </p>
        </motion.div>
      </div>

      {/* Background Kinetic Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-5 pointer-events-none select-none">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-[20vw] font-black whitespace-nowrap tracking-tighter text-white"
        >
          DARKSOUL-NYX DARKSOUL-NYX DARKSOUL-NYX
        </motion.h2>
      </div>
    
    </section>
  );
}