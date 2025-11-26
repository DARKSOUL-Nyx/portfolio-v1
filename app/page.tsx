// app/page.tsx
import GlitchText from "./components/GlitchText";
import CyberTitle from "./components/CyberTitle";
import NeuralBackground from "./components/NeuralBackground";
import Dock from "./components/Dock";
import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";
import DroneViewer from "./components/DroneViewer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyber-black p-24 relative overflow-hidden">
      {/* --- 3D LAYER (NEW) --- */}
      <NeuralBackground />

      {/* --- ATMOSPHERE LAYERS START --- */}
      
      {/* 1. The Grid (Keep this, it's the base) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* 2. The Vignette (Darkens the corners deeply) */}
      <div className="vignette" />

      {/* 3. The Scanlines (Adds the monitor texture) */}
      <div className="scanlines" />

      {/* --- ATMOSPHERE LAYERS END --- */}


      <div className="z-50 text-center space-y-6 flicker-effect">
        <p className="text-neon-cyan text-sm tracking-[0.3em] uppercase opacity-80">
          System Identity Verified
        </p>
        
        {/* The New Active Component */}
        <CyberTitle />
        
        <p className="text-gray-400 text-xl max-w-lg mx-auto font-light border-l-2 border-neon-purple pl-4 text-left">
          <span className="text-neon-cyan">function</span> <span className="text-white">Architect</span>() {"{"} <br/>
          &nbsp;&nbsp;return <span className="text-matrix-green">"Scalable Systems"</span>; <br/>
          {"}"}
        </p>
      </div>
      {/* THE ARSENAL SECTION */}
      <div className="relative z-10 max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-32">
        {/* Map through your data here */}
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>


      {/* THE ARSENAL GRID */}
      <div className="relative z-10 max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-32">
        
        {/* 1. PIPELINE (Standard Card) */}
        <ProjectCard 
          title="Self-Healing Pipeline" 
          category="Agentic AI" 
          status="Active"
          description="Autonomous error-correction system..."
          tech={["Docker", "LLMs"]} 
        />

        {/* 2. DRONE (The HERO Card) */}
        <div className="relative group w-full bg-cyber-gray/40 backdrop-blur-md border border-neon-cyan/30 p-2 rounded-xl overflow-hidden hover:border-neon-cyan transition-colors">
          <div className="absolute top-4 left-4 z-10">
              <p className="text-neon-cyan text-xs font-mono uppercase">Simulation</p>
              <h3 className="text-xl font-bold text-white">Drone Swarm</h3>
          </div>
          
          {/* The 3D Component */}
          <DroneViewer />
          
          <div className="absolute bottom-4 left-4 z-10 flex gap-2">
              <span className="text-[10px] bg-black/50 px-2 py-1 rounded text-gray-300 border border-white/10">Unreal</span>
              <span className="text-[10px] bg-black/50 px-2 py-1 rounded text-gray-300 border border-white/10">Simulink</span>
          </div>
        </div>

        {/* 3. xBD (Standard Card) */}
        <ProjectCard 
          title="xBD Damage Assessment" 
          category="Computer Vision" 
          status="Deployed"
          description="Satellite imagery analysis..."
          tech={["PyTorch", "React"]} 
        />

      </div>
      <Dock />
    </main>
  );
}