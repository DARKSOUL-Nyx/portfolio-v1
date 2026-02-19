"use client";
import { motion } from "framer-motion";
import HoloID from "./HoloID";

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
                        <span className="text-neon-cyan font-mono">System Initiated:</span> I am <strong className="text-white">Nishwan</strong>, known in the digital ether as <strong className="text-neon-purple">DARKSOUL</strong>.
                    </p>
                    <p>
                        Currently completing my Computer Science Engineering degree at VIT Chennai, my primary objective is securing a role as an <strong className="text-white">AI Engineer</strong>. I specialize in building scalable systems and designing data-intensive applications. While others treat AI as magic, I treat it as rigorous engineering.
                    </p>
                    <p>
                        My work operates at the intersection of <span className="text-neon-cyan">Agentic Workflows</span>, <span className="text-neon-cyan">MLOps pipelines</span>, and <span className="text-neon-cyan">autonomous drone simulations</span>. I don't just train models in isolated notebooks; I build the DevOps infrastructure required for them to survive and perform in production environments.
                    </p>
                    <p className="text-sm border-l-2 border-white/10 pl-4 mt-6">
                        When I'm not architecting data systems or solving DSA problems, I'm analyzing the striking art styles of <em>Arcane</em>, exploring the cinematography of <em>Cyberpunk 2077</em>, or tracking my strength training in the gym to balance the hours spent in the terminal.
                    </p>

                    <div className="pt-8 flex flex-wrap gap-4 font-mono text-xs text-neon-cyan">
                        <span className="border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/5">
                            [ STATUS: FINAL_YEAR ]
                        </span>
                        <span className="border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/5">
                            [ FOCUS: AI_INFRASTRUCTURE ]
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
                    <div className="w-full max-w-sm flex justify-center">
                        <HoloID />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;