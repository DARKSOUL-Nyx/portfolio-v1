"use client";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "CORE_INTELLIGENCE",
        skills: [
            { name: "Python", level: 95 },
            { name: "C++", level: 80 },
            { name: "TypeScript", level: 85 },
            { name: "SQL", level: 90 },
        ],
    },
    {
        title: "NEURAL_FRAMEWORKS",
        skills: [
            { name: "PyTorch", level: 90 },
            { name: "TensorFlow", level: 75 },
            { name: "LangChain", level: 85 },
            { name: "OpenCV", level: 80 },
        ],
    },
    {
        title: "SYSTEM_INFRASTRUCTURE",
        skills: [
            { name: "Docker", level: 90 },
            { name: "Kubernetes", level: 70 },
            { name: "AWS", level: 75 },
            { name: "Airflow", level: 85 },
        ],
    },
];

const SkillMatrix = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, catIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.1 }}
                        className="border border-white/10 bg-cyber-gray/20 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden group hover:border-neon-cyan/50 transition-colors"
                    >
                        {/* Header */}
                        <h3 className="text-neon-cyan font-mono text-xs tracking-widest mb-6 border-b border-white/5 pb-2">
              /// {category.title}
                        </h3>

                        {/* Skills List */}
                        <div className="space-y-4">
                            {category.skills.map((skill, i) => (
                                <div key={skill.name} className="group/skill">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-300 font-mono group-hover/skill:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                        <span className="text-neon-cyan/50 text-xs font-mono">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-1 w-full bg-black/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                            className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-neon-cyan/20 rounded-tr-xl" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillMatrix;