"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, Float, ContactShadows } from "@react-three/drei";

const DroneModel = () => {
  // 1. Load the file from the public folder
  const { scene } = useGLTF("/drone.glb"); 
  
  return (
    // 2. Scale it! Downloaded models are often HUGE or tiny. 
    // Adjust scale={0.5} up or down until it fits.
    <primitive 
      object={scene} 
      scale={0.1} // <--- START HERE. Change to 1.0 or 0.01 depending on the model size
      rotation={[0, Math.PI / 4, 0]} // Initial rotation angle
    />
  );
};

const DroneViewer = () => {
  return (
    <div className="w-full h-64 cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }} shadows>
        <Stage environment="city" intensity={0.5}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <DroneModel />
            </Float>
            <ContactShadows position={[0, -1, 0]} opacity={0.6} blur={2} />
        </Stage>
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
           <mesh /> {/* Invisible mesh to capture controls if needed */}
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default DroneViewer;