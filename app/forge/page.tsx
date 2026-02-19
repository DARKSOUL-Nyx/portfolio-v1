// app/forge/page.tsx
import { getSortedContent } from "@/lib/content";
import ForgeGrid from "./ForgeGrid"; // We will create this next

export default function Forge() {
    // This runs securely on the server, so 'fs' works perfectly here!
    const projects = getSortedContent("forge");

    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-7xl mx-auto relative">
            {/* CLEANER BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
            </div>

            {/* Header */}
            <div className="relative z-10 mb-16 border-b border-white/5 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">
                        THE <span className="text-neon-cyan">FORGE</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-xs">
                        /// ENGINEERING_UTILITIES_&_PROTOTYPES
                    </p>
                </div>
                {/* Decorative Status */}
                <div className="hidden md:flex gap-4 text-[10px] font-mono text-neon-cyan/50">
                    <span>SYS_LOAD: 34%</span>
                    <span>MODULES: {projects.length}</span>
                </div>
            </div>

            {/* Pass the server-fetched data to our Client Component */}
            <ForgeGrid projects={projects} />
        </div>
    );
}