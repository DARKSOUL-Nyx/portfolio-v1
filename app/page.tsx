"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CyberTitle from "./components/CyberTitle";
import BootSequence from "./components/BootSequence";
import ProjectCard from "./components/ProjectCard";
import DroneViewer from "./components/DroneViewer";
import SkillMatrix from "./components/SkillMatrix"; // We will add this next
import AboutSection from "./components/AboutSection"; // And this
import { ChevronDown } from "lucide-react";
import { projects } from "./data/projects";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [showBootScreen, setShowBootScreen] = useState(true);

  useEffect(() => {
    // Check if we have already booted in this session
    const hasBooted = sessionStorage.getItem("system_booted");

    if (hasBooted) {
      setBooted(true);
      setShowBootScreen(false); // Skip animation immediately
    } else {
      setShowBootScreen(true); // Show animation first time
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    setShowBootScreen(false);
    sessionStorage.setItem("system_booted", "true"); // Save for next time
  };

  return (
    <main className="flex flex-col items-center bg-transparent text-gray-200">

      {/* --- SECTION 1: HERO --- */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative">

        {/* Boot Sequence Overlay (Only shows if showBootScreen is true) */}
        {showBootScreen && (
          <div className="absolute inset-0 flex items-center justify-center bg-cyber-black z-50">
            <BootSequence onComplete={handleBootComplete} />
          </div>
        )}

        {/* Main Identity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: booted ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8 z-10"
        >
          <p className="text-neon-cyan text-xs tracking-[0.4em] uppercase opacity-70 flicker-effect">
            System Identity Verified
          </p>

          {/* SIZED UP: scale-150 for Desktop */}
          <div className="my-8 transform scale-125 md:scale-150">
            <CyberTitle trigger={booted} />
          </div>

          <div className="text-left font-mono text-sm md:text-lg bg-white/5 border-l-2 border-neon-purple p-4 rounded-r-lg backdrop-blur-sm max-w-md mx-auto">
            <span className="text-neon-purple">const</span> <span className="text-white">Mission</span> = <span className="text-neon-cyan">async</span> () {"=>"} {"{"} <br />
            &nbsp;&nbsp;<span className="text-neon-purple">await</span> <span className="text-yellow-400">Build</span>(<span className="text-matrix-green">"Scalable_Systems"</span>);<br />
            {"}"}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        {booted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-white transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] tracking-widest uppercase">Initialize</span>
            <ChevronDown size={24} className="text-neon-cyan" />
          </motion.div>
        )}
      </section>

      {/* --- SECTION 2: THE ARSENAL (The Next Part) --- */}
      <section className="min-h-screen w-full max-w-6xl px-6 py-20 space-y-32">

        {/* 2.1 Featured Drone Project */}
        <div className="flex flex-col md:flex-row items-center gap-12 border border-white/10 bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs">
              <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              ACTIVE_SIMULATION
            </div>
            <h2 className="text-3xl font-bold text-white">Autonomous Drone Swarm</h2>
            <p className="text-gray-400 leading-relaxed">
              A high-fidelity simulation environment built in Unreal Engine 5...
            </p>
            <div className="flex gap-2 text-xs font-mono text-gray-500">
              <span>[ UNREAL ]</span><span>[ SIMULINK ]</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[300px] border border-white/5 rounded-xl bg-black/20 relative overflow-hidden">
            <DroneViewer />
          </div>
        </div>

        {/* 2.2 Skill Matrix */}
        <div className="space-y-12">
          <h2 className="text-xl font-mono text-neon-cyan tracking-widest text-center">
             /// SYSTEM_CAPABILITIES
          </h2>
          <SkillMatrix />
        </div>

        {/* 2.3 About Section */}
        <AboutSection />

      </section>
    </main>
  );
}