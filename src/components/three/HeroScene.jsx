import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Environment, Float, Icosahedron, Lightformer, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import SceneCanvas from './SceneCanvas';

function ParticleShell({ count = 2600, radius = 4.2 }) {
  const ref = useRef();
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color('#22d3ee');
    const violet = new THREE.Color('#a78bfa');
    for (let i = 0; i < count; i++) {
      const r = radius * (0.55 + Math.random() * 0.9);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = cyan.clone().lerp(violet, Math.random());
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count, radius]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Ring({ radius, tilt, speed, color }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * speed;
  });
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.006, 16, 200]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Core() {
  const group = useRef();
  const wire = useRef();

  useFrame((state, delta) => {
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.5);
    group.current.rotation.y += delta * 0.15;
    group.current.position.y = -scroll * 1.2;
    const s = 1 - scroll * 0.25;
    group.current.scale.setScalar(s);
    wire.current.rotation.x -= delta * 0.1;
    wire.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.9}>
        <Icosahedron args={[1.25, 32]}>
          <MeshDistortMaterial
            color="#06122b"
            emissive="#0e7490"
            emissiveIntensity={0.25}
            roughness={0.12}
            metalness={1}
            envMapIntensity={1.4}
            distort={0.42}
            speed={1.8}
          />
        </Icosahedron>
        <Icosahedron ref={wire} args={[1.75, 1]}>
          <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={0.22} toneMapped={false} />
        </Icosahedron>
      </Float>
      <Ring radius={2.3} tilt={[Math.PI / 2.4, 0, 0]} speed={0.25} color="#22d3ee" />
      <Ring radius={2.65} tilt={[Math.PI / 1.8, 0.4, 0]} speed={-0.18} color="#a78bfa" />
      <Ring radius={3.0} tilt={[Math.PI / 2.1, -0.5, 0.3]} speed={0.12} color="#60a5fa" />
    </group>
  );
}

function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.9, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.6, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

const HeroScene = ({ className }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <SceneCanvas
      className={className}
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={isMobile ? [1, 1.25] : [1, 1.75]}
      eventSource={typeof document !== 'undefined' ? document.body : undefined}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 4, 5]} intensity={60} color="#22d3ee" />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#a78bfa" />
      <pointLight position={[0, 0, -5]} intensity={30} color="#3b82f6" />
      <Environment resolution={256}>
        <Lightformer intensity={3} color="#22d3ee" position={[0, 0, 5]} rotation={[0, 0, Math.PI / 4]} scale={[12, 0.25, 1]} />
        <Lightformer intensity={2.5} color="#a78bfa" position={[-5, 1, 1]} rotation={[0, Math.PI / 2, 0]} scale={[12, 0.4, 1]} />
        <Lightformer intensity={2} color="#60a5fa" position={[5, -1, 1]} rotation={[0, -Math.PI / 2, 0]} scale={[12, 0.4, 1]} />
        <Lightformer intensity={1} color="#ffffff" position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[8, 8, 1]} />
      </Environment>
      <Core />
      <ParticleShell count={isMobile ? 1200 : 2600} />
      <Sparkles count={60} scale={8} size={2.5} speed={0.3} color="#a5f3fc" />
      <CameraRig />
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={1.1} mipmapBlur />
        <Vignette offset={0.3} darkness={0.7} />
      </EffectComposer>
    </SceneCanvas>
  );
};

export default HeroScene;
