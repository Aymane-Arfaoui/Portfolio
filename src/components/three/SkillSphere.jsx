import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import SceneCanvas from './SceneCanvas';

const BASE_SCALE = new THREE.Vector3(1, 1, 1);
const HOVER_SCALE = new THREE.Vector3(1.35, 1.35, 1.35);

function Word({ children, position }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const color = useMemo(() => new THREE.Color(), []);

  useFrame(() => {
    color.set(hovered ? '#22d3ee' : '#cbd5e1');
    ref.current.material.color.lerp(color, 0.15);
    ref.current.scale.lerp(hovered ? HOVER_SCALE : BASE_SCALE, 0.15);
  });

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        fontSize={0.27}
        letterSpacing={-0.02}
        anchorX="center"
        anchorY="middle"
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </Text>
    </Billboard>
  );
}

function Cloud({ words, radius = 3.4 }) {
  const group = useRef();
  const items = useMemo(() => {
    const n = words.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return words.map((word, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return { word, pos: [Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius] };
    });
  }, [words, radius]);

  useFrame((state, delta) => {
    const { pointer } = state;
    group.current.rotation.y += delta * (0.12 + pointer.x * 0.25);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.4, 0.05);
  });

  return (
    <group ref={group}>
      {items.map(({ word, pos }) => (
        <Word key={word} position={pos}>
          {word}
        </Word>
      ))}
    </group>
  );
}

const SkillSphere = ({ words, className }) => (
  <SceneCanvas className={className} camera={{ position: [0, 0, 11], fov: 50 }}>
    <fog attach="fog" args={['#05070d', 9, 15]} />
    <Cloud words={words} />
  </SceneCanvas>
);

export default SkillSphere;
