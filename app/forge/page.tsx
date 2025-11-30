"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Box, Wrench } from "lucide-react";

const tools = [
    {
        title: "Regex_Killer",
        desc: "AI-powered regex generator for messy log files.",
        icon: Terminal,
        status: "v1.0",
        link: "#"
    },
    {
        title: "Docker_Slim",
        desc: "Automated script to shrink ML container images by 60%.",
        icon: Box,
        status: "Beta",
        link: "#"
    },
    {
        title: "Prompt_Engineer",
        desc: "A playground for testing system prompts across multiple LLMs.",
        icon: Wrench,
        status: "Dev",
        link: "#"
    }
];

export default function Forge() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-16 border-b border-white/10 pb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                    THE <span className="text-neon-cyan">FORGE</span>
                </h1>
                <p className="text-gray-400 font-mono text-sm">
          /// UTILITIES_FOR_THE_COMMUNITY
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, i) => (
                    <motion.div
                        key={tool.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-cyber-gray/30 border border-white/5 hover:border-neon-cyan/50 p-6 rounded-xl transition-all duration-300 hover:bg-cyber-gray/50"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-black/50 rounded-lg border border-white/10 text-neon-purple group-hover:text-neon-cyan transition-colors">
                                <tool.icon size={24} />
                            </div>
                            <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-full text-gray-500">
                                {tool.status}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            {tool.desc}
                        </p>

                        <a href={tool.link} className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan hover:text-white transition-colors">
                            LAUNCH_TOOL <ArrowUpRight size={14} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}