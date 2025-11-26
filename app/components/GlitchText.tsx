// app/components/GlitchText.tsx
import React from 'react';

const GlitchText = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block group">
      {/* The Base Text */}
      <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10">
        {text}
      </h1>
      
      {/* The Glitch Layers (Hidden by default, visible on hover or animation) */}
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-5xl md:text-7xl font-bold text-neon-cyan opacity-70 animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-5xl md:text-7xl font-bold text-neon-purple opacity-70 animate-pulse -translate-x-[2px] translate-y-[2px]">
        {text}
      </span>
    </div>
  );
};

export default GlitchText;