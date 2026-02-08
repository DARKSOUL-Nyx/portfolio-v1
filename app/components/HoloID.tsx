"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HoloID = () => {
    return (
        // MERGED: logic is now on one solid container to prevent height collapse
        <div className="relative w-full max-w-sm aspect-square mx-auto group">

            {/* The Container Frame */}
            <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-xl z-20 group-hover:border-neon-cyan transition-colors duration-500 pointer-events-none" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan z-30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan z-30" />

            {/* The Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 bg-cyber-black">
                <Image
                    src="/dp.jpg" // ⚠️ ACTION: Rename your file in public folder to 'DP.jpg' exactly, or change this string.
                    alt="Identity"
                    fill
                    priority // Loads immediately (Crucial for LCP)
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // ⚠️ FIX: Tells browser which size to download
                    className="object-cover opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />

                {/* Animated Scanner Bar */}
                <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-2 bg-neon-cyan/50 blur-md z-10 opacity-50 pointer-events-none"
                />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Label */}
            <div className="absolute -bottom-8 left-0 text-sm font-mono text-neon-cyan tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                ID: DARK_SOUL
            </div>
        </div>
    );
};

export default HoloID;