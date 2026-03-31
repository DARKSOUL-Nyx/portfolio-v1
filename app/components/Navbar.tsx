// app/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 sm:gap-10 px-8 py-4 rounded-full bg-[#050505]/40 border border-white/[0.05] backdrop-blur-md shadow-2xl"
    >
      <a href="#identity" className="text-[10px] sm:text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors">
        Identity
      </a>
      <a href="#capabilities" className="text-[10px] sm:text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors">
        Capabilities
      </a>
      <a href="#impact" className="text-[10px] sm:text-xs font-satoshi font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors">
        Impact
      </a>
    </motion.nav>
  );
}