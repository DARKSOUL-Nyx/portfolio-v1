"use client";
import { motion } from "framer-motion";
import { Terminal, Box, Wrench, ArrowUpRight, Layers, Cpu } from "lucide-react";

const tools = [
    {
        title: "REGEX_KILLER",
        desc: "AI-powered regex generator for messy log files.",
        icon: Terminal,
        status: "v1.0",
        specs: ["12ms Latency", "Llama-3"],
        link: "#"
    },
    {
        title: "DOCKER_SLIM",
        desc: "Automated script to shrink ML images by 60%.",
        icon: Box,
        status: "BETA",
        specs: ["Compression", "Nvidia-RT"],
        link: "#"
    },
    {
        title: "PROMPT_LAB",
        desc: "A/B testing system prompts across multiple LLMs.",
        icon: Wrench,
        status: "DEV",
        specs: ["Multi-Model", "Unlimited"],
        link: "#"
    },
    {
        title: "NEURAL_VIS",
        desc: "Real-time 3D visualization of weights.",
        icon: Cpu,
        status: "CONCEPT",
        specs: ["WebGL", "PyTorch"],
        link: "#"
    }
];

export default function Forge() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-7xl mx-auto relative">

            {/* 1. CLEANER BACKGROUND: Micro-Dots instead of messy lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
            </div>

            {/* Header */}
            <div className="relative z-10 mb-16 border-b border-white/5 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                        THE <span className="text-neon-cyan">FORGE</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-xs">
            /// ENGINEERING_UTILITIES_&_PROTOTYPES
                    </p>
                </div>
                {/* Decorative Status */}
                <div className="hidden md:flex gap-4 text-[10px] font-mono text-neon-cyan/50">
                    <span>SYS_LOAD: 34%</span>
                    <span>MODULES: {tools.length}</span>
                </div>
            </div>

            {/* 2. COMPACT GRID: Switch to 3 columns so cards are smaller */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tools.map((tool, i) => (
                    <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-64 bg-cyber-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/[0.02] transition-colors"
                    >
                        {/* The "Drawing" Border - Now thinner and darker blue */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <motion.rect
                                width="100%" height="100%"
                                fill="none"
                                stroke="#00f3ff"
                                strokeWidth="1"
                                strokeOpacity="0.3" // Very subtle
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1 }}
                            />
                        </svg>

                        {/* Corner Markers (The "Technical" Look) */}
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-neon-cyan/50 transition-colors" />
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-neon-cyan/50 transition-colors" />

                        {/* Content - Compact Padding (p-5) */}
                        <div className="p-5 h-full flex flex-col">

                            {/* Header Row */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-white/5 rounded border border-white/10 text-gray-300 group-hover:text-neon-cyan group-hover:border-neon-cyan/30 transition-colors">
                                    <tool.icon size={20} />
                                </div>
                                <span className="font-mono text-[9px] text-gray-500 border border-white/5 px-1.5 py-0.5 tracking-widest uppercase group-hover:text-neon-cyan/70 group-hover:border-neon-cyan/20 transition-colors">
                                    {tool.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                {tool.title}
                            </h3>

                            <p className="text-xs text-gray-400 font-body leading-relaxed mb-4 flex-grow">
                                {tool.desc}
                            </p>

                            {/* Specs Grid - Simplified */}
                            <div className="flex gap-2 mb-4">
                                {tool.specs.map((spec, idx) => (
                                    <span key={idx} className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            <a href={tool.link} className="w-full py-2 border-t border-white/5 hover:bg-neon-cyan/10 text-gray-500 hover:text-neon-cyan font-mono text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all">
                                INITIALIZE <ArrowUpRight size={12} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}