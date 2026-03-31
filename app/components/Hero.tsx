// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 sm:px-12 w-full max-w-7xl mx-auto">
      
      {/* CSS Ghost Orb - Adjusted to look like a massive glowing light behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white opacity-[0.04] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="z-10 mix-blend-difference">
        {/* Massive Name Reveal - ADDED font-clash */}
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-clash text-[16vw] md:text-[12vw] leading-none font-bold tracking-tighter uppercase text-white"
        >
          Nishwan
        </motion.h1>
        
        {/* Subtitle and Bio - ADDED font-satoshi */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-4 md:gap-12 mt-6 md:items-center"
        >
          <h2 className="font-satoshi text-2xl md:text-3xl font-medium tracking-tight text-neutral-300 whitespace-nowrap">
            AI & ML Engineer
          </h2>
          <p className="font-satoshi max-w-md text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
            Building scalable systems and exploring the intersection of autonomous LLM agents and security.
          </p>
        </motion.div>
      </div>

      {/* Background Kinetic Text - ADDED font-clash */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="font-clash text-[22vw] font-bold whitespace-nowrap tracking-tighter text-white"
        >
          DARKSOUL-NYX DARKSOUL-NYX DARKSOUL-NYX
        </motion.h2>
      </div>
    {/* Social Links - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 sm:left-12 flex gap-6 z-20"
      >
        <a href="https://github.com/DARKSOUL-Nyx" target="_blank" rel="noreferrer" className="text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-600 hover:text-white transition-colors">GH</a>
        <a href="https://www.linkedin.com/in/vasamsetty-satya-surya-nishwan-895222319/" target="_blank" rel="noreferrer" className="text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-600 hover:text-white transition-colors">IN</a>
        <a href="https://x.com/vssnishwan" target="_blank" rel="noreferrer" className="text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-600 hover:text-white transition-colors">X</a>
      </motion.div>
    </section>
  );
}