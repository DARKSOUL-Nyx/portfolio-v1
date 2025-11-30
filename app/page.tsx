"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CyberTitle from "./components/CyberTitle";
import BootSequence from "./components/BootSequence";
import DroneViewer from "./components/DroneViewer";
import SkillMatrix from "./components/SkillMatrix";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import { ChevronDown } from "lucide-react";
import { projects } from "./data/projects";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [showBootScreen, setShowBootScreen] = useState(true);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("system_booted");
    if (hasBooted) {
      setBooted(true);
      setShowBootScreen(false);
    } else {
      setShowBootScreen(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    setShowBootScreen(false);
    sessionStorage.setItem("system_booted", "true");
  };

  return (
    <main className="flex flex-col items-center bg-transparent text-gray-200">

      {/* --- VIEW 1: THE HOOK (Full Height, Perfectly Centered) --- */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative snap-start">

        {/* Boot Overlay */}
        {showBootScreen && (
          <div className="absolute inset-0 flex items-center justify-center bg-cyber-black z-50">
            <BootSequence onComplete={handleBootComplete} />
          </div>
        )}

        {/* Identity Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: booted ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8 z-10 scale-110 md:scale-125" // Increased Scale here
        >
          <p className="text-neon-cyan text-xs tracking-[0.4em] uppercase opacity-80 flicker-effect">
            System Identity Verified
          </p>

          <div className="my-6">
            <CyberTitle trigger={booted} />
          </div>

          <div className="text-left font-mono text-sm bg-white/5 border-l-2 border-neon-purple p-4 rounded-r-lg backdrop-blur-sm max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
            <span className="text-neon-purple">const</span> <span className="text-white">Mission</span> = <span className="text-neon-cyan">async</span> () {"=>"} {"{"} <br />
            &nbsp;&nbsp;<span className="text-neon-purple">await</span> <span className="text-yellow-400">Build</span>(<span className="text-matrix-green">"Scalable_Systems"</span>);<br />
            {"}"}
          </div>
        </motion.div>

        {/* Scroll Prompt */}
        {booted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-white transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] tracking-widest uppercase">Initialize Interface</span>
            <ChevronDown size={24} className="text-neon-cyan" />
          </motion.div>
        )}
      </section>

      {/* --- VIEW 2: THE DATA (Scroll down to see this) --- */}
      <section className="min-h-screen w-full max-w-6xl px-6 py-24 space-y-32">

        {/* 2.1 HERO ASSET (The Drone - Now with purpose) */}
        <div className="relative group w-full bg-cyber-gray/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-neon-cyan/50 transition-colors">
          <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="ml-4 text-[10px] font-mono text-gray-500">SIMULATION_VIEWPORT_v1.0</span>
          </div>

          <div className="flex flex-col md:flex-row h-[500px]"> {/* Taller for drama */}
            {/* Controls / Info Side */}
            <div className="w-full md:w-1/3 p-8 border-r border-white/5 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Drone Swarm</h3>
                <p className="text-sm text-gray-400">Autonomous pathfinding simulation using Unreal Engine 5 & AirSim.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>CPU_LOAD</span>
                  <span className="text-neon-cyan">12%</span>
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full"><div className="w-[12%] h-full bg-neon-cyan" /></div>

                <div className="flex justify-between text-xs font-mono text-gray-500">
                  <span>PHYSICS_ENGINE</span>
                  <span className="text-green-500">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* 3D Viewport */}
            <div className="w-full md:w-2/3 relative bg-black/40">
              <DroneViewer />
              {/* Overlay UI inside 3D */}
              <div className="absolute bottom-4 right-4 text-xs font-mono text-neon-cyan pointer-events-none">
                [ INTERACTIVE_MODEL ]
              </div>
            </div>
          </div>
        </div>

        {/* 2.2 SKILLS */}
        <div className="space-y-12">
          <h2 className="text-xl font-mono text-neon-cyan tracking-widest text-center">
             /// SYSTEM_CAPABILITIES
          </h2>
          <SkillMatrix />
        </div>

        {/* 2.3 STORY */}
        <AboutSection />

      </section>
    </main>
  );
}