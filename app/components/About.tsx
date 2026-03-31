// app/components/About.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data/profile";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress for the cinematic text fade
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 50%"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section ref={containerRef} className="relative w-full px-6 sm:px-12 max-w-6xl mx-auto py-40 z-10 flex items-center min-h-[80vh]">
      
      <div className="max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-500 mb-10"
        >
          Identity // 01
        </motion.h2>
        
        {/* Massive Manifesto Text */}
        <motion.p 
          style={{ opacity: textOpacity, y: textY }}
          className="font-clash text-4xl sm:text-6xl md:text-7xl font leading-[1.1] tracking-tight text-white"
        >
          {profile.bio}
        </motion.p>
        
        {/* Clean, high-contrast contact pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 sm:mt-24 flex items-center gap-6"
        >
          <a 
            href="mailto:your.email@example.com" 
            className="px-8 py-4 rounded-full bg-neutral-900 border border-neutral-700 text-white font-satoshi font-bold text-sm tracking-wide hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            Initiate Contact
          </a>
          <div className="flex gap-4">
            {profile.contact.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="font-satoshi text-neutral-500 font-bold hover:text-white transition-colors uppercase tracking-widest text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}