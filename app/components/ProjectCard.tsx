"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  status: string;
  description: string;
  tech: string[];
}

const ProjectCard = ({ title, category, status, description, tech }: ProjectProps) => {
  // Status Color Logic
  const statusColor = status === "Active" || status === "Deployed" ? "bg-matrix-green" : "bg-yellow-500";

  // Avoid SSR hydration mismatch by setting a client-only generated ID after mount
  const [projectId, setProjectId] = useState<number | null>(null);
  useEffect(() => {
    setProjectId(Math.floor(Math.random() * 9999));
  }, []);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group w-full bg-cyber-gray/40 backdrop-blur-md border border-white/10 p-6 rounded-xl overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-neon-cyan text-xs font-mono mb-1 uppercase tracking-wider">{category}</p>
          <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{title}</h3>
        </div>
        <div className="flex items-center gap-2 border border-white/10 px-2 py-1 rounded-full bg-black/30">
          <div className={`w-1.5 h-1.5 rounded-full ${statusColor} animate-pulse`} />
          <span className="text-[10px] text-gray-400 font-mono uppercase">{status}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Tech Stack (Chips) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="text-[10px] text-gray-300 bg-white/5 border border-white/5 px-2 py-1 rounded-md font-mono">
            {t}
          </span>
        ))}
      </div>

      {/* Action Line */}
      <div className="flex justify-between items-center pt-4 border-t border-white/5">
        <span className="text-xs text-gray-500 font-mono">/// PROJECT_ID: {projectId ?? "----"}</span>
        <button className="text-white hover:text-neon-cyan transition-colors">
          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;