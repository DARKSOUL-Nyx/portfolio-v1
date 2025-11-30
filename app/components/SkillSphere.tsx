"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const skills = [
  "Python", "PyTorch", "Docker", "React", "Next.js", 
  "FastAPI", "TensorFlow", "Kubernetes", "AWS", 
  "OpenCV", "LangChain", "Simulink", "Unreal"
];

function Word({ children, ...props }: { children: string; position: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null!);
  
  // Make text always face the camera
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text
      ref={ref}
      fontSize={1.2}
      color="#00f3ff" // Neon Cyan
      {...props}
    >
      {children}
    </Text>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a spherical distribution of words
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        // Distribute points on a sphere
        const position = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        );
        // Pick a random skill
        const skill = skills[(i * count + j) % skills.length];
        temp.push({ position, word: skill });
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <group>
      {words.map((w, i) => (
        <Word key={i} position={w.position as THREE.Vector3}>{w.word}</Word>
      ))}
    </group>
  );
}

const SkillSphere = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#020204", 0, 80]} />
        <Cloud count={4} radius={20} />
        {/* Allows the user to spin the sphere with mouse */}
        <TrackballControls noZoom /> 
      </Canvas>
    </div>
  );
};

export default SkillSphere;