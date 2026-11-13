import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';

const SceneCanvas = ({ children, camera, className = '', dpr = [1, 1.75], eventSource }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setMounted(true);
      },
      { rootMargin: '200px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {mounted && (
        <Canvas
          camera={camera}
          dpr={dpr}
          frameloop={visible ? 'always' : 'never'}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          eventSource={eventSource}
          eventPrefix="client"
        >
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default SceneCanvas;
