"use client";
import { motion } from "framer-motion";
import HoloID from "../components/HoloID";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";


export default function Uplink() {
    return (
        <div className="min-h-screen pt-32 px-6 pb-40 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">

            {/* Left Column: The Identity Card */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/3 flex justify-center"
            >
                <div className="w-full max-w-xs md:max-w-sm">
                    <HoloID />
                </div>
            </motion.div>

            {/* Right Column: The Transmission Interface */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-8"
            >
                <div>
                    <h1 className="text-5xl font-display font-bold text-white mb-2">
                        OPEN <span className="text-neon-cyan">CHANNEL</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm">
            /// INITIATE_COMMUNICATION_PROTOCOL
                    </p>
                </div>

                <p className="text-gray-300 font-body text-lg leading-relaxed">
                    Ready to deploy? I am currently open for <strong className="text-white">AI Engineering</strong> roles and collaborations on high-scale systems.
                </p>

                {/* The "Command Line" Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { name: "EMAIL", icon: Mail, val: "Send Transmission", link: "mailto:vssnishwan@gmail.com" },
                        { name: "GITHUB", icon: Github, val: "View Repositories", link: "https://github.com/DARKSOUL-Nyx" },
                        { name: "LINKEDIN", icon: Linkedin, val: "Connect Network", link: "https://www.linkedin.com/in/vss-nishwan-895222319/" },
                        { name: "TWITTER", icon: Twitter, val: "Follow Stream", link: "https://x.com/vssnishwan" },
                    ].map((item, i) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            className="group flex flex-col p-4 bg-cyber-gray/30 border border-white/10 rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-2 text-gray-400 group-hover:text-neon-cyan">
                                <item.icon size={20} />
                                <span className="font-mono text-xs tracking-widest">{item.name}</span>
                            </div>
                            <span className="text-sm text-white font-body">{item.val}</span>
                        </a>
                    ))}
                </div>

                {/* Decorative Status Line */}
                <div className="pt-8 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>ENCRYPTION: AES-256</span>
                    <span className="flex items-center gap-2">
                        STATUS: <span className="text-green-500 animate-pulse">LISTENING</span>
                    </span>
                </div>

            </motion.div>
        </div>
    );
}