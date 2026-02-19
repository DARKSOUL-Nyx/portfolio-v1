"use client";
import { motion } from "framer-motion";
import { Folder, ArrowUpRight } from "lucide-react";

interface ArsenalItem {
    id: string;
    title: string;
    status?: string;
    description?: string;
    tech?: string[];
}

export default function ArsenalGrid({ items }: { items: ArsenalItem[] }) {
    if (!items || items.length === 0) {
        return <p className="text-gray-500 font-mono text-sm">NO_SYSTEMS_DETECTED...</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    key={item.id}
                    className="group relative h-64 perspective-1000"
                >
                    <div className="absolute inset-0 bg-cyber-gray/30 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col transition-all duration-500 group-hover:border-neon-purple/50">
                        {/* "Folder" Tab Visual */}
                        <div className="absolute -top-3 left-6 px-3 py-1 bg-black border border-white/10 rounded-t-lg text-[10px] font-mono text-gray-500 group-hover:text-neon-purple group-hover:border-neon-purple/50 transition-colors">
                            DIR_{item.id.substring(0, 4).toUpperCase()}
                        </div>

                        <div className="flex justify-between items-start mb-4">
                            <Folder className="text-gray-600 group-hover:text-neon-purple transition-colors" />
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed flex-grow line-clamp-3">
                            {item.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tech && item.tech.map((t: string) => (
                                <span key={t} className="text-[9px] font-mono border border-white/5 px-2 py-1 rounded text-gray-400 group-hover:border-neon-cyan/30 group-hover:text-white transition-all">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}