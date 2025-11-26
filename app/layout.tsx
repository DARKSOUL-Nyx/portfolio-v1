// app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // We use the optimized import
import "./globals.css";

// Load the font
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains', // We create a CSS variable
});

export const metadata: Metadata = {
  title: "V.S.S.Nishwan | System Architect",
  description: "AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font and the dark background immediately */}
      

      <body className={`${jetbrains.variable} font-mono bg-[#050505] text-gray-200 antialiased`}>
        {/* Top Left Identity Badge */}
        <div className="fixed top-6 left-6 z-50 flex items-center gap-2 text-xs font-mono opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse" />
          <span className="text-neon-cyan">USER::</span>
          <span className="text-white tracking-widest">DARK_SOUL</span>
        </div>
        {children}
      </body>
    </html>
  );
}

