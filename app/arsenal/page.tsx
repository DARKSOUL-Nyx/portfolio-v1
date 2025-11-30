"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ArrowUpRight, Database, Folder } from "lucide-react";

// Animation Variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Each child loads 0.1s after the previous
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function Arsenal() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/50">
                    <Database className="text-neon-cyan" size={24} />
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">PROJECT_ARSENAL</h1>
                    <p className="text-gray-400 font-mono text-sm">/// DEPLOYED_SYSTEMS_DATABASE</p>
                </div>
            </div>

            {/* Staggered Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project) => (
                    <motion.div
                        variants={item}
                        key={project.id}
                        className="group relative h-96 perspective-1000" // Perspective for 3D feel
                    >
                        <div className="absolute inset-0 bg-cyber-gray/30 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col transition-all duration-500 group-hover:border-neon-cyan/50 group-hover:translate-z-10 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.1)]">

                            {/* "Folder" Tab Visual */}
                            <div className="absolute -top-3 left-6 px-3 py-1 bg-black border border-white/10 rounded-t-lg text-[10px] font-mono text-gray-500 group-hover:text-neon-cyan group-hover:border-neon-cyan/50 transition-colors">
                                DIR_0{project.id}
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-gray-600 group-hover:text-neon-purple transition-colors" />
                                <div className={`w-2 h-2 rounded-full ${project.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed flex-grow">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map(t => (
                                    <span key={t} className="text-[10px] font-mono border border-white/5 px-2 py-1 rounded text-gray-400 group-hover:border-neon-cyan/30 group-hover:text-white transition-all">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}