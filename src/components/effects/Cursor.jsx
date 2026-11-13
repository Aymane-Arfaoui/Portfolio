import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(!!e.target.closest('a, button, [data-cursor="hover"]'));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-cyan-300"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-cyan-300/60 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 64 : 34,
          height: hovering ? 64 : 34,
          backgroundColor: hovering ? 'rgba(34,211,238,0.15)' : 'rgba(34,211,238,0)',
          scale: pressed ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
    </>
  );
};

export default Cursor;
