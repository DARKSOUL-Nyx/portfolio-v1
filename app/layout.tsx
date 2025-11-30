// app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // We use the optimized import
import "./globals.css";
import NeuralBackground from "./components/NeuralBackground";
import Dock from "./components/Dock";

// Load the font
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains', // We create a CSS variable
});

export const metadata: Metadata = {
  title: "V.S.S.Nishwan | System Architect",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cyber-black text-gray-200 antialiased overflow-x-hidden">
        {/* PERSISTENT LAYERS (They don't reload) */}
        <NeuralBackground />

        {/* 2. The Grid Overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* 3. Atmosphere */}
        <div className="vignette" />
        <div className="scanlines" />

        {/* TOP LEFT IDENTITY (Keep this here too) */}
        {/* FIXED IDENTITY BADGE */}
        {/* 1. Increased z-index to 50 so it's always on top */}
        {/* 2. Increased size to text-sm (bigger) */}
        {/* 3. Removed 'opacity-70' and 'hover' states */}
        <div className="fixed top-6 left-6 z-50 flex items-center gap-3 text-xs font-mono select-none pointer-events-none">

          {/* Green Dot (Constant Pulse) */}
          {/* <div className="w-3 h-3 bg-matrix-green rounded-full shadow-[0_0_8px_#00ff41] animate-pulse" /> */}

          <span className="text-neon-cyan font-bold tracking-tight">USER   ::</span>

          {/* Name (Constant Flicker/Pulse) */}
          <span className="text-white tracking-[0.2em] font-bold animate-pulse drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            DARK_SOUL
          </span>
        </div>
        {/* The Page Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Navigation Dock */}
        <Dock />
      </body>
    </html>
  );
}

