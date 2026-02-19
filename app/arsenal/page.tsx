import { Database, Server, Cpu } from "lucide-react";
import { getSortedContent } from "@/lib/content";
import SkillMatrix from "../components/SkillMatrix";
import SkillSphere from "../components/SkillSphere";
import ArsenalGrid from "./ArsenalGrid"; // We will create this client component

export default function Arsenal() {
    // Fetch infrastructure/hardware write-ups from content/arsenal
    const arsenalData = getSortedContent("arsenal");

    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-7xl mx-auto space-y-32">
            
            {/* Header Area */}
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-neon-cyan/10 rounded-lg border border-neon-cyan/50">
                        <Database className="text-neon-cyan" size={24} />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                            PROJECT_<span className="text-neon-cyan">ARSENAL</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-sm">/// TECH_STACK_&_INFRASTRUCTURE</p>
                    </div>
                </div>
            </div>

            {/* Top Section: 3D Sphere & Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 3D Sphere takes up one side */}
                <div className="relative border border-white/10 rounded-xl bg-cyber-black/40 overflow-hidden hidden lg:block">
                    <div className="absolute top-4 left-4 flex items-center gap-2 text-neon-cyan font-mono text-xs z-10">
                        <Cpu size={14} /> TACTICAL_OVERVIEW
                    </div>
                    <SkillSphere />
                </div>

                {/* Matrix takes up the other */}
                <div>
                    <SkillMatrix />
                </div>
            </div>

            {/* Bottom Section: Infrastructure Deep Dives (MDX files) */}
            <div>
                <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                    <Server className="text-neon-purple" size={20} />
                    <h2 className="text-2xl font-display font-bold text-white">SYSTEM_ARCHITECTURE</h2>
                </div>
                
                {/* Client component for the animated grid */}
                <ArsenalGrid items={arsenalData} />
            </div>
        </div>
    );
}