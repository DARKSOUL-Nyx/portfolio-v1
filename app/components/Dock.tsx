"use client";
import { motion } from "framer-motion";
import { Home, Cpu, Hammer, FileText, Radio } from "lucide-react"; // Added Hammer for Tools
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { id: "root", icon: Home, label: "ROOT", path: "/" },
  { id: "arsenal", icon: Cpu, label: "ARSENAL", path: "/arsenal" },
  { id: "forge", icon: Hammer, label: "FORGE", path: "/forge" }, // New Tools Page
  { id: "logs", icon: FileText, label: "LOGS", path: "/logs" },
  { id: "uplink", icon: Radio, label: "UPLINK", path: "/uplink" },
];

const Dock = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname(); // Knows which page you are on

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 bg-cyber-gray/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-neon-cyan/5">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.id} href={item.path}>
              <div
                className="relative flex flex-col items-center justify-center"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover Label */}
                {hovered === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -40 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute px-2 py-1 bg-black border border-neon-cyan text-neon-cyan text-[10px] tracking-widest uppercase rounded-md whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}

                {/* Icon Button */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl transition-all duration-300 ${isActive
                      ? "bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.3)]"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  <item.icon size={20} strokeWidth={1.5} />
                </motion.div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-neon-cyan rounded-full" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;