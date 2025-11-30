"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HoloID = () => {
    return (
        <div className="relative w-full max-w-sm aspect-square mx-auto group">
            {/* The Container Frame */}
            <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-xl z-20 group-hover:border-neon-cyan transition-colors duration-500" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan z-30" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan z-30" />

            {/* The Image with "Scanline" Overlay */}
            <div className="relative w-full h-full overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                    src="/DP.jpg" // Ensure DP.jpg is in your /public folder
                    alt="Identity"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />

                {/* Animated Scanner Bar */}
                <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-2 bg-neon-cyan/50 blur-md z-10 opacity-50"
                />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
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