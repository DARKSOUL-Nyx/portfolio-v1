"use client";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Hash } from "lucide-react";
import Link from "next/link";

export default function LogList({ logs }: { logs: any[] }) {
  return (
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
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-cyber-black border border-white/30 rounded-full group-hover:bg-neon-purple group-hover:border-neon-purple group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_#050505]" />
            
            <Link href={`/logs/${log.id}`}>
                <div className="relative bg-cyber-gray/20 border border-white/5 hover:border-neon-purple/50 p-6 md:p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.03] group-hover:translate-x-2 cursor-pointer">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                        <span className="text-neon-purple">LOG_ID::{log.id}</span>
                        <div className="flex items-center gap-2">
                            <Calendar size={12} />
                            <span>{log.date}</span>
                        </div>
                        <span className="hidden md:inline text-white/10">|</span>
                        <span>{log.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                        {log.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-body leading-relaxed mb-6 max-w-2xl">
                        {log.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                        <div className="flex gap-2">
                            {log.tags.map((tag: string) => (
                                <span key={tag} className="flex items-center gap-1 text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400 group-hover:border-neon-purple/30 transition-colors">
                                    <Tag size={10} /> {tag}
                                </span>
                            ))}
                        </div>
                        <span className="text-xs font-mono text-neon-purple flex items-center gap-2 hover:text-white transition-colors">
                            READ_ENTRY <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
      ))}
    </div>
  );
}