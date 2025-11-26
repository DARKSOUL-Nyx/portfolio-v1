// app/components/NeuralBackground.tsx
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollControls, useScroll } from "@react-three/drei"; // Import these
const ParticleNetwork = () => {
  const count = 50; // Increased count slightly
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 35 - 17.5; 
      const y = Math.random() * 35 - 17.5; 
      const z = Math.random() * 35 - 17.5;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const points = useRef<THREE.Points>(null!);
  const lines = useRef<THREE.LineSegments>(null!);
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!points.current || !lines.current || !group.current) return;

    const { mouse } = state;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.1, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.1, 0.1);

    const positionAttribute = points.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    const linePositions = lines.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    
    particles.forEach((particle, i) => {
        const t = state.clock.getElapsedTime() * 0.2 + particle.time;
        // Increased movement range slightly so you can see them moving
        const movementRange = 0.8; 
        const x = particle.x + Math.sin(t * particle.speed) * movementRange;
        const y = particle.y + Math.cos(t * particle.speed) * movementRange;
        const z = particle.z + Math.sin(t * particle.speed * 0.5) * movementRange;

        positionAttribute.setXYZ(i, x, y, z);
    });

    positionAttribute.needsUpdate = true;

    let lineIndex = 0;
    const particleCount = particles.length;
    
    for (let i = 0; i < particleCount; i++) {
      const x1 = positionAttribute.getX(i);
      const y1 = positionAttribute.getY(i);
      const z1 = positionAttribute.getZ(i);

      for (let j = i + 1; j < particleCount; j++) {
        const x2 = positionAttribute.getX(j);
        const y2 = positionAttribute.getY(j);
        const z2 = positionAttribute.getZ(j);
        const dist = Math.sqrt((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2);

        if (dist < 12) {
            linePositions.setXYZ(lineIndex++, x1, y1, z1);
            linePositions.setXYZ(lineIndex++, x2, y2, z2);
        }
      }
    }
    
    lines.current.geometry.setDrawRange(0, lineIndex);
    linePositions.needsUpdate = true;
  });

  return (
    <group ref={group} dispose={null}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            args={[new Float32Array(count * 3), 3]} 
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.5} // Bigger dots (Easier to see)
          color="#e2e8f0" // Bright Slate (Almost White)
          transparent
          opacity={0.7} // Full Opacity (No fading)
          sizeAttenuation
        />
      </points>

      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count * count}
            args={[new Float32Array(count * count * 3), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#94a3b8" // Visible Gray lines
          transparent
          opacity={0.2} 
        />
      </lineSegments>
    </group>
  );
};

// const NeuralBackground = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
//       <Canvas 
//         camera={{ position: [0, 0, 25], fov: 50 }} // Moved camera closer (25 instead of 30)
//         style={{ width: '100vw', height: '100vh' }} 
//       >
//         {/* REMOVED FOG COMPLETELY FOR TESTING */}
//         <ParticleNetwork />
//       </Canvas>
//     </div>
//   );
// };


const CameraController = () => {
  const scroll = useScroll(); // Gives us scroll progress (0 to 1)
  
  useFrame((state) => {
    // Move camera Z position based on scroll
    // Starts at 25, moves to 10 as you scroll down
    const targetZ = 25 - (scroll.offset * 15); 
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
  });
  return null;
};

// Update the main export
const NeuralBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 25], fov: 50 }}>
        {/* We need ScrollControls to track the page scroll */}
        <ScrollControls pages={2} damping={0.3}>
           <CameraController />
           <ParticleNetwork />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default NeuralBackground;