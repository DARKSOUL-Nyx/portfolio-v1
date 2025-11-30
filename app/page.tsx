// app/page.tsx
"use client"; // Needs to be client for the 3D elements
import GlitchText from "./components/GlitchText";
import CyberTitle from "./components/CyberTitle";
import NeuralBackground from "./components/NeuralBackground";
import Dock from "./components/Dock";
import ProjectCard from "./components/ProjectCard";
import DroneViewer from "./components/DroneViewer";
import SkillSphere from "./components/SkillSphere"; // We will build this next

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyber-black p-4 relative overflow-x-hidden">
      
      {/* 1. BACKGROUND LAYERS */}
      <NeuralBackground />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="vignette" />
      <div className="scanlines" />

      {/* 2. THE HERO SECTION (Identity) */}
      <div className="z-50 text-center space-y-6 flicker-effect mt-32">
        <p className="text-neon-cyan text-sm tracking-[0.3em] uppercase opacity-80">
          System Identity Verified
        </p>
        
        <CyberTitle />
        
        <p className="text-gray-400 text-xl max-w-lg mx-auto font-light border-l-2 border-neon-purple pl-4 text-left">
          <span className="text-neon-cyan">function</span> <span className="text-white">Architect</span>() {"{"} <br/>
          &nbsp;&nbsp;return <span className="text-matrix-green">"Scalable Systems"</span>; <br/>
          {"}"}
        </p>
      </div>

      {/* 3. THE HYBRID ARSENAL (Projects) */}
      <div className="relative z-10 max-w-6xl w-full mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-32">
        
        {/* Project 1: Data Pipeline */}
        <ProjectCard 
          title="Self-Healing Pipeline" 
          category="Agentic AI" 
          status="Active"
          description="Autonomous error-correction system for data pipelines using LLM agents."
          tech={["Docker", "LLMs", "Airflow"]} 
        />

        {/* Project 2: THE DRONE (Hero Asset) */}
        <div className="relative group w-full h-[320px] bg-cyber-gray/40 backdrop-blur-md border border-neon-cyan/30 p-2 rounded-xl overflow-hidden hover:border-neon-cyan transition-colors">
          <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <p className="text-neon-cyan text-xs font-mono uppercase tracking-widest">Simulation</p>
              <h3 className="text-xl font-bold text-white">Drone Swarm</h3>
          </div>
          
          {/* 3D Component */}
          <DroneViewer />
          
          <div className="absolute bottom-4 left-4 z-10 flex gap-2 pointer-events-none">
              <span className="text-[10px] bg-black/50 px-2 py-1 rounded text-gray-300 border border-white/10">Unreal</span>
              <span className="text-[10px] bg-black/50 px-2 py-1 rounded text-gray-300 border border-white/10">Simulink</span>
          </div>
        </div>

        {/* Project 3: Satellite Vision */}
        <ProjectCard 
          title="xBD Damage Assessment" 
          category="Computer Vision" 
          status="Deployed"
          description="Satellite imagery analysis for post-disaster building damage classification."
          tech={["PyTorch", "React", "XAI"]} 
        />
      </div>

      {/* 4. THE SKILL SPHERE (New Section) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mb-40 text-center">
         <h2 className="text-2xl font-mono text-neon-cyan mb-8 tracking-widest">/// NEURAL_COMPETENCIES</h2>
         <SkillSphere />
      </div>

      {/* 5. NAVIGATION DOCK */}
      <Dock />
    </main>
  );
}