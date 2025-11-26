// app/components/Dock.tsx
"use client";
import { motion } from "framer-motion";
import { Home, Cpu, FileText, Radio } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "home", icon: Home, label: "ROOT" },
  { id: "projects", icon: Cpu, label: "ARSENAL" },
  { id: "blog", icon: FileText, label: "LOGS" },
  { id: "contact", icon: Radio, label: "UPLINK" },
];

const Dock = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* The Glass Container */}
      <div className="flex items-center gap-4 px-4 py-3 bg-cyber-gray/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-neon-cyan/10">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center justify-center"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* The Hover Label (Floating Tooltip) */}
            {hovered === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -40 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute px-3 py-1 bg-black border border-neon-cyan text-neon-cyan text-[10px] tracking-widest uppercase rounded-md whitespace-nowrap"
              >
                {item.label}
              </motion.div>
            )}

            {/* The Icon Button */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-xl transition-colors duration-300 ${
                hovered === item.id ? "bg-neon-cyan/20 text-neon-cyan" : "text-gray-400 hover:text-white"
              }`}
            >
              <item.icon size={20} strokeWidth={1.5} />
            </motion.button>
            
            {/* Active Dot Indicator (Optional logic later) */}
            {item.id === "home" && (
               <div className="absolute -bottom-1 w-1 h-1 bg-neon-cyan rounded-full shadow-[0_0_5px_#00f3ff]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;