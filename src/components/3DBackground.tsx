"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Create random points inside a sphere
const sphereCount = 2000;
const particlePositions = new Float32Array(sphereCount * 3);
for (let i = 0; i < sphereCount * 3; i++) {
  particlePositions[i] = (Math.random() - 0.5) * 10;
}

function DustParticles() {
  const ref = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#C9A962"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <DustParticles />
      </Canvas>
    </div>
  );
}
