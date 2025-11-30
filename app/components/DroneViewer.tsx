// app/components/DroneViewer.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Float, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

// A simple loading bar component
function Loader() {
  const { progress } = useProgress();
  return <Html center className="text-neon-cyan font-mono text-xs">{progress.toFixed(0)}% LOADING...</Html>;
}

const DroneModel = () => {
  const { scene } = useGLTF("/drone.glb"); 
  return <primitive object={scene} />; // Removed manual scale, Stage will fix it
};

const DroneViewer = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.5} adjustCamera={1.2}> 
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                  <DroneModel />
              </Float>
          </Stage>
        </Suspense>
        
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
           <mesh />
        </PresentationControls>
      </Canvas>
    </div>
  );
};

// Preload the model so it shows up instantly
useGLTF.preload("/drone.glb");

export default DroneViewer;