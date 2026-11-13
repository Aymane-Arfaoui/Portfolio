import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import SceneCanvas from './SceneCanvas';

function WaveField({ cols = 90, rows = 50, spacing = 0.28 }) {
  const ref = useRef();
  const count = cols * rows;

  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const a = new THREE.Color('#22d3ee');
    const b = new THREE.Color('#a78bfa');
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const k = i * rows + j;
        p[k * 3] = (i - cols / 2) * spacing;
        p[k * 3 + 2] = (j - rows / 2) * spacing;
        const col = a.clone().lerp(b, i / cols);
        c[k * 3] = col.r;
        c[k * 3 + 1] = col.g;
        c[k * 3 + 2] = col.b;
      }
    }
    return { positions: p, colors: c };
  }, [cols, rows, spacing, count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const { pointer } = state;
    const arr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const x = arr[i * 3];
      const z = arr[i * 3 + 2];
      arr[i * 3 + 1] =
        Math.sin(x * 0.6 + t * 0.9) * 0.35 +
        Math.cos(z * 0.5 + t * 0.7) * 0.35 +
        Math.sin((x + pointer.x * 6) * 0.3 + (z - pointer.y * 4) * 0.3 + t) * 0.2;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const WaveScene = ({ className }) => (
  <SceneCanvas
    className={className}
    camera={{ position: [0, 3.2, 8], fov: 55 }}
    dpr={[1, 1.5]}
    eventSource={typeof document !== 'undefined' ? document.body : undefined}
  >
    <fog attach="fog" args={['#05070d', 6, 16]} />
    <WaveField />
  </SceneCanvas>
);

export default WaveScene;
