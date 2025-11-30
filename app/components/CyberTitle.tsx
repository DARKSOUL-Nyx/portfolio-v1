"use client"; // Needed for interactivity
import { useEffect } from "react";
import { useScramble } from "../hooks/useScramble";

const CyberTitle = () => {
  const { text, scramble } = useScramble("NISHWAN");

  // Scramble on mount (when page loads)
  useEffect(() => {
    scramble();
  }, []);

  return (
    <div className="relative inline-block group cursor-pointer" onMouseEnter={scramble}>
      {/* The Main Glitch Layers (Visual Decoration) */}
      <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 select-none relative z-10 tracking-tighter">
        {text}
      </h1>

      {/* The "Ghost" Glitch Effect behind it */}
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-7xl md:text-9xl font-bold text-neon-cyan opacity-0 group-hover:opacity-50 group-hover:translate-x-[4px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-7xl md:text-9xl font-bold text-neon-purple opacity-0 group-hover:opacity-50 group-hover:-translate-x-[4px] transition-all duration-100 select-none">
        {text}
      </span>

      {/* Decorative "Tag" */}
      <div className="absolute -bottom-4 right-0 text-xs text-neon-cyan font-mono opacity-60">
        ID: USER_001
      </div>
    </div>
  );
};

export default CyberTitle;