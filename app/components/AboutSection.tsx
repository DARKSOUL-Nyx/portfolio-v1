"use client";
import { motion } from "framer-motion";
import HoloID from "./HoloID"; // Ensure you created this in the previous step

const AboutSection = () => {
    return (
        <section className="relative w-full max-w-6xl mx-auto mt-40 mb-32 px-6">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-16">
                <div className="h-[1px] bg-neon-purple w-12" />
                <h2 className="text-2xl font-mono text-white tracking-widest">
                    <span className="text-neon-purple">03.</span> SOURCE_CODE
                </h2>
                <div className="h-[1px] bg-white/10 flex-grow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-gray-400 font-light leading-relaxed text-lg"
                >
                    <p>
                        <span className="text-neon-cyan font-mono">System Initiated:</span> I am <strong className="text-white">Nishwan</strong>.
                    </p>
                    <p>
                        While others see AI as magic, I see it as <strong className="text-white">engineering</strong>.
                        My mission is to deconstruct complex neural patterns and rebuild them into scalable,
                        resilient systems that function in the real world.
                    </p>
                    <p>
                        Currently, I am focused on the intersection of <span className="text-neon-purple">Agentic Workflows</span> and
                        <span className="text-neon-purple"> Autonomous Drone Swarms</span>.
                        I don't just train models in notebooks; I build the DevOps infrastructure that allows them to survive in production.
                    </p>

                    <div className="pt-8 flex flex-wrap gap-4 font-mono text-xs text-neon-cyan">
                        <span className="border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/5">
                            [ STATUS: LEARNING ]
                        </span>
                        <span className="border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/5">
                            [ FOCUS: SYSTEM_DESIGN ]
                        </span>
                    </div>
                </motion.div>

                {/* Right Column: Visual Identity */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Your Profile Picture Component */}
                    <div className="w-full max-w-sm">
                        <HoloID />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;