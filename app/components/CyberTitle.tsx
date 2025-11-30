"use client";
import { useScramble } from "../hooks/useScramble";

// 1. Define the interface explicitly
interface CyberTitleProps {
  trigger?: boolean;
}

// 2. Apply the interface to the component
const CyberTitle = ({ trigger = true }: CyberTitleProps) => {

  // Pass the trigger to the hook
  const { text, scramble } = useScramble("NISHWAN", 30, trigger);

  return (
    <div className="relative inline-block group cursor-pointer" onMouseEnter={scramble}>
      <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 select-none relative z-10 tracking-tighter">
        {text}
      </h1>

      {/* Glitch Layers */}
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-6xl md:text-8xl font-bold text-neon-cyan opacity-0 group-hover:opacity-50 group-hover:translate-x-[4px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-6xl md:text-8xl font-bold text-neon-purple opacity-0 group-hover:opacity-50 group-hover:-translate-x-[4px] transition-all duration-100 select-none">
        {text}
      </span>

      <div className="absolute -bottom-4 right-0 text-[10px] text-neon-cyan font-mono opacity-60">
        ID: USER_001
      </div>
    </div>
  );
};

export default CyberTitle;