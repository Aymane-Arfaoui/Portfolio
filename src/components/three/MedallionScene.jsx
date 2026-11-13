import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import SceneCanvas from './SceneCanvas';

const LAYERS = [
  { y: -1.4, color: '#b45309', emissive: '#92400e' },
  { y: 0, color: '#cbd5e1', emissive: '#475569' },
  { y: 1.4, color: '#facc15', emissive: '#ca8a04' },
];

function Layer({ y, color, emissive, index }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * (0.2 + index * 0.08);
  });
  return (
    <group position={[0, y, 0]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[1.5, 1.5, 0.14, 6, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.35}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.75, 0.008, 8, 120]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function DataFlow({ count = 500 }) {
  const ref = useRef();
  const { positions, speeds } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 1.3;
      p[i * 3] = Math.cos(a) * r;
      p[i * 3 + 1] = -2.4 + Math.random() * 4.8;
      p[i * 3 + 2] = Math.sin(a) * r;
      s[i] = 0.4 + Math.random() * 0.8;
    }
    return { positions: p, speeds: s };
  }, [count]);

  useFrame((_, delta) => {
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += delta * speeds[i];
      if (arr[i * 3 + 1] > 2.4) arr[i * 3 + 1] = -2.4;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#67e8f9"
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

const MedallionScene = ({ className }) => (
  <SceneCanvas className={className} camera={{ position: [4.2, 2.6, 4.2], fov: 42 }}>
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 6, 3]} intensity={2.5} />
    <pointLight position={[-4, 0, -2]} intensity={30} color="#22d3ee" />
    <group rotation={[0, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        {LAYERS.map((l, i) => (
          <Layer key={i} index={i} {...l} />
        ))}
        <DataFlow />
      </Float>
    </group>
  </SceneCanvas>
);

export default MedallionScene;
