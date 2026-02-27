// app/layout.tsx
import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Rajdhani } from "next/font/google"; // Import new fonts
import "./globals.css";
import NeuralBackground from "./components/NeuralBackground";
import Dock from "./components/Dock";
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'; // Import the component

// 1. Configure the Code Font
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

// 2. Configure the Header Font (Sci-Fi)
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ["400", "500", "700", "900"], // Load multiple weights
});

// 3. Configure the Body Font (Technical)
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: '--font-rajdhani',
  weight: ["300", "400", "500", "600", "700"],
});

// app/layout.tsx
export const metadata: Metadata = {
  title: "DARKSOUL | AI Engineer Portfolio", // Improved for SEO
  description: "Portfolio of an AI Engineer specializing in Machine Learning and Full-Stack Development.",
  keywords: ["AI Engineer", "Machine Learning", "Portfolio", "DARKSOUL"],
  openGraph: {
    title: "DARKSOUL | AI Engineer",
    description: "Autonomous Deception & Containment Frameworks and AI Research.",
    url: "https://yourdomain.com",
    siteName: "DARKSOUL Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARKSOUL | AI Engineer",
    description: "AI Research and Engineering Portfolio",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} ${orbitron.variable} ${rajdhani.variable} font-sans bg-[#050505] text-gray-200 antialiased`}>
        {/* --- PERSISTENT WORLD LAYER (Never Reloads) --- */}
        <NeuralBackground />

        {/* Atmosphere */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
        <div className="vignette" />
        <div className="scanlines" />

        {/* Identity Badge (Always on Top) */}
        <div className="fixed top-6 left-6 z-50 flex items-center gap-3 text-sm font-mono select-none pointer-events-none mix-blend-difference">
          <div className="w-2 h-2 bg-matrix-green rounded-full shadow-[0_0_8px_#00ff41] animate-pulse" />
          <span className="text-neon-cyan font-bold tracking-tight">USER::</span>
          <span className="text-white tracking-[0.2em] font-bold animate-pulse">DARK_SOUL</span>
        </div>

        {/* --- DYNAMIC CONTENT LAYER --- */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>

        {/* Navigation (Always Available) */}
        <Dock />

      </body>
    </html>
  );
}