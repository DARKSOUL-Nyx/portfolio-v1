"use client";
import { motion } from "framer-motion";

const logs = [
    {
        date: "2025-11-15",
        title: "Scaling Docker for Heavy ML Workloads",
        tag: "DevOps",
        preview: "Why your containers are crashing and how to fix memory fragmentation...",
    },
    {
        date: "2025-10-22",
        title: "The Ethics of Autonomous Swarms",
        tag: "Philosophy",
        preview: "Exploring the decision-making loops in military drone tech...",
    },
];

export default function Logs() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter">
                TRANSMISSION <span className="text-neon-purple">LOGS</span>
            </h1>

            <div className="space-y-4">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col md:flex-row gap-6 p-6 border-l-2 border-white/10 hover:border-neon-purple bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
                    >
                        <div className="md:w-32 flex-shrink-0">
                            <span className="font-mono text-xs text-neon-cyan">{log.date}</span>
                            <div className="mt-2 text-[10px] border border-white/10 inline-block px-2 py-1 rounded text-gray-500">
                                {log.tag}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors mb-2">
                                {log.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-light">
                                {log.preview}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}