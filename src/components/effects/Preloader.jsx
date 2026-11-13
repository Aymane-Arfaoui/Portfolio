import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../ui/motion';

const words = ['Data', 'Models', 'Systems', 'Impact'];

const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let frame;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 250);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const wordIndex = Math.min(Math.floor(count / 26), words.length - 1);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-navy-950 p-8 sm:p-12"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Aymane Arfaoui</span>
            <span>Portfolio © 2026</span>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.4, ease: EASE }}
                className="font-display text-5xl sm:text-7xl font-bold text-slate-100"
              >
                {words[wordIndex]}
                <span className="text-cyan-400">.</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div className="mb-4 flex items-end justify-between">
              <span className="font-mono text-xs text-slate-500">Loading experience</span>
              <span className="font-display text-7xl sm:text-9xl font-bold leading-none gradient-text tabular-nums">
                {count}
              </span>
            </div>
            <div className="h-px w-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
