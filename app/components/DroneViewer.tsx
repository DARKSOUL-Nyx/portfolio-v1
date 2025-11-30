"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Float, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

// 1. Move Loader OUTSIDE the Canvas
// This acts as a standard HTML overlay that listens to the 3D loading manager
function LoadingOverlay() {
  const { progress, active } = useProgress();
  const [show, setShow] = useState(true);

  // Fade out logic
  useEffect(() => {
    if (!active && progress === 100) {
      const t = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(t);
    } else {
      setShow(true);
    }
  }, [active, progress]);

  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 transition-opacity duration-500">
      <div className="text-neon-cyan font-mono text-xs tracking-widest animate-pulse">
        LOADING_SIMULATION :: {progress.toFixed(0)}%
      </div>
    </div>
  );
}

const DroneModel = ({ color = "#ff0000" }: { color?: string }) => {
  const { scene } = useGLTF("/drone.glb");

  // Clone logic to ensure unique instances
  const clonedScene = scene.clone();

  // Apply materials
  clonedScene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      if (mesh.material) {
        mesh.material = (mesh.material as THREE.Material).clone();
        if ('color' in mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).color.set(color);
          (mesh.material as THREE.MeshStandardMaterial).emissive.set(color);
          (mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
        }
      }
    }
  });

  return <primitive object={clonedScene} />;
};

const DroneViewer = () => {
  return (
    <div className="relative w-full h-full cursor-grab active:cursor-grabbing">
      {/* HTML Overlay sits on top of Canvas */}
      <LoadingOverlay />

      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
        {/* Suspense is now silent because the Overlay handles the visual feedback */}
        <Suspense fallback={null}>
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

useGLTF.preload("/drone.glb");

export default DroneViewer;