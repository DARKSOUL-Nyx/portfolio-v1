"use client";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Hash } from "lucide-react";

// Mock Data (Replace with your real blogs later)
const logs = [
    {
        id: "0x001",
        date: "2025-11-15",
        title: "Scaling Docker for Heavy ML Workloads",
        excerpt: "Optimizing container runtime for heavy CUDA operations. Solving the shared memory bottleneck in PyTorch.",
        tags: ["DevOps", "Docker", "MLOps"],
        readTime: "5 min read"
    },
    {
        id: "0x002",
        date: "2025-10-22",
        title: "The Ethics of Autonomous Swarms",
        excerpt: "Analyzing the decision-making loops in military drone tech. Where do we draw the line in algorithmic accountability?",
        tags: ["Philosophy", "AI Safety"],
        readTime: "8 min read"
    },
    {
        id: "0x003",
        date: "2025-09-10",
        title: "Rebuilding the Neural Interface",
        excerpt: "A deep dive into the frontend architecture of this portfolio. Using React Three Fiber for immersive UI.",
        tags: ["Frontend", "React", "3D"],
        readTime: "4 min read"
    },
    {
        id: "0x004",
        date: "2025-08-05",
        title: "System Latency in Real-time Vision",
        excerpt: "Benchmarking YOLOv8 vs EfficientDet on edge devices. Every millisecond counts in drone navigation.",
        tags: ["Computer Vision", "Edge AI"],
        readTime: "6 min read"
    }
];

export default function Logs() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-5xl mx-auto">

            {/* Header */}
            <div className="mb-20 border-b border-white/10 pb-8">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tighter">
                    SYSTEM <span className="text-neon-purple">LOGS</span>
                </h1>
                <div className="flex items-center gap-4 text-gray-400 font-mono text-xs md:text-sm">
                    <Hash size={14} className="text-neon-purple" />
                    <span>/// ARCHIVED_TRANSMISSIONS_&_THOUGHTS</span>
                    <span className="text-neon-purple/50">|</span>
                    <span>ENTRIES: {logs.length}</span>
                </div>
            </div>

            {/* The Timeline Stream */}
            <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">

                {logs.map((log, i) => (
                    <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative pl-8 md:pl-12 group"
                    >
                        {/* Timeline Node (The Dot) */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyber-black border border-white/30 rounded-full group-hover:bg-neon-purple group-hover:border-neon-purple group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#050505]" />

                        {/* The Log Card */}
                        <div className="relative bg-cyber-gray/20 border border-white/5 hover:border-neon-purple/50 p-6 md:p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.03] group-hover:translate-x-2">

                            {/* Metadata Row */}
                            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                <span className="text-neon-purple">{log.id}</span>
                                <div className="flex items-center gap-2">
                                    <Calendar size={12} />
                                    <span>{log.date}</span>
                                </div>
                                <span className="hidden md:inline text-white/10">|</span>
                                <span>{log.readTime}</span>
                            </div>

                            {/* Title & Excerpt */}
                            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                                {log.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-body leading-relaxed mb-6 max-w-2xl">
                                {log.excerpt}
                            </p>

                            {/* Footer: Tags & Link */}
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                                <div className="flex gap-2">
                                    {log.tags.map(tag => (
                                        <span key={tag} className="flex items-center gap-1 text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400 group-hover:border-neon-purple/30 transition-colors">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="text-xs font-mono text-neon-purple flex items-center gap-2 hover:text-white transition-colors">
                                    READ_ENTRY <ArrowRight size={14} />
                                </button>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}