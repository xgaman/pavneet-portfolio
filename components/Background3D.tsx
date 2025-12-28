
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = t * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00fbff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingObject: React.FC = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[4, 2, -5]}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#b026ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#b026ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      <mesh position={[-5, -2, -3]}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshWobbleMaterial
          color="#ff00f7"
          speed={2}
          factor={0.6}
          emissive="#ff00f7"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} color="#00fbff" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#b026ff" intensity={1} />
        <ParticleField />
        <FloatingObject />
      </Canvas>
    </div>
  );
};

export default Background3D;
