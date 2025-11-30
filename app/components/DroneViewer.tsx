// app/components/DroneViewer.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Float, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three"; // Import Three.js

// A simple loading bar component
function Loader() {
  const { progress } = useProgress();
  return <Html center className="text-neon-cyan font-mono text-xs">{progress.toFixed(0)}% LOADING...</Html>;
}

const DroneModel = ({ color = "#ff0000" }: { color?: string }) => {
  const { scene } = useGLTF("/drone.glb");

  // TRAVERSE AND RE-PAINT
  // This looks at every part of the 3D model and changes the material color
  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      // Clone material so we don't mess up the original cache
      mesh.material = (mesh.material as THREE.Material).clone();

      // Force change the color
      if ('color' in mesh.material) {
        (mesh.material as THREE.MeshStandardMaterial).color.set(color);
        // Optional: Make it glow
        (mesh.material as THREE.MeshStandardMaterial).emissive.set(color);
        (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
      }
    }
  });

  return <primitive object={scene} />;
};
const DroneViewer = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={10} adjustCamera={1.2} >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
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