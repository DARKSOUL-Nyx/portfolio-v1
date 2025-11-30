"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; // Re-using your data
import { ArrowUpRight } from "lucide-react";

export default function Arsenal() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-16 border-b border-white/10 pb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                    FULL <span className="text-neon-cyan">ARSENAL</span>
                </h1>
                <p className="text-gray-400 font-mono text-sm">
          /// DEPLOYED_PROJECTS_AND_EXPERIMENTS
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative bg-cyber-gray/30 border border-white/5 hover:border-neon-cyan/50 p-8 rounded-xl transition-all duration-300 hover:bg-cyber-gray/50 flex flex-col h-full"
                    >
                        {/* Status Badge */}
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase border border-neon-cyan/20 px-2 py-1 rounded">
                                {project.category}
                            </span>
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'Active' || project.status === 'Deployed' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                                <span className="text-[10px] text-gray-500 font-mono uppercase">{project.status}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="text-[10px] font-mono text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Action */}
                        <button className="w-full py-3 bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan border border-white/10 hover:border-neon-cyan transition-all text-sm font-mono tracking-widest flex items-center justify-center gap-2 rounded">
                            VIEW_CASE_STUDY <ArrowUpRight size={14} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}