// app/forge/ForgeGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Wrench, ArrowUpRight } from "lucide-react";

// Define the expected shape of your projects
interface ProjectProps {
  id: string;
  title: string;
  status?: string;
  description?: string;
  excerpt?: string;
  tech?: string[];
  link?: string;
}

export default function ForgeGrid({ projects }: { projects: ProjectProps[] }) {
    return (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative h-64 bg-cyber-black/40 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/[0.02] transition-colors"
                >
                    {/* The "Drawing" Border */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.rect
                            width="100%" height="100%"
                            fill="none"
                            stroke="#00f3ff"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1 }}
                        />
                    </svg>

                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-neon-cyan/50 transition-colors" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-neon-cyan/50 transition-colors" />

                    {/* Content */}
                    <div className="p-5 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-white/5 rounded border border-white/10 text-gray-300 group-hover:text-neon-cyan group-hover:border-neon-cyan/30 transition-colors">
                                <Wrench size={20} />
                            </div>
                            <span className="font-mono text-[9px] text-gray-500 border border-white/5 px-1.5 py-0.5 tracking-widest uppercase group-hover:text-neon-cyan/70 group-hover:border-neon-cyan/20 transition-colors">
                                {project.status || "ACTIVE"}
                            </span>
                        </div>

                        <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-xs text-gray-400 font-body leading-relaxed mb-4 flex-grow line-clamp-3">
                            {project.description || project.excerpt}
                        </p>

                        {/* Tech Specs */}
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {project.tech && project.tech.map((spec: string, idx: number) => (
                                <span key={idx} className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded">
                                    {spec}
                                </span>
                            ))}
                        </div>

                        <a href={project.link || `/forge/${project.id}`} className="w-full py-2 border-t border-white/5 hover:bg-neon-cyan/10 text-gray-500 hover:text-neon-cyan font-mono text-[10px] tracking-widest flex items-center justify-center gap-2 transition-all">
                            INITIALIZE <ArrowUpRight size={12} />
                        </a>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}