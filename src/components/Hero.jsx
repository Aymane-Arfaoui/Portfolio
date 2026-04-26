import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const terminalLines = [
  { prompt: '~', cmd: 'python train.py --model automl --data bronze/', delay: 0 },
  { output: '▸ Loading 2.4M rows from parquet...', delay: 1800 },
  { output: '▸ Schema validated · 47 features detected', delay: 2800 },
  { output: '▸ Cleaning pipeline: nulls, outliers, type-cast ✓', delay: 3800 },
  { output: '▸ Training 12 models · CASH search space', delay: 5000 },
  { output: '▸ Best model: XGBoost (MAE: 0.0412) — 38.2% improvement', delay: 6500 },
  { prompt: '~', cmd: 'deploy --target production --local-first', delay: 8200 },
  { output: '✓ Model deployed · Electron desktop ready', delay: 9500 },
];

function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines((prev) => [...prev, line]), line.delay)
    );
    const resetTimer = setTimeout(() => {
      setVisibleLines([]);
      timers.forEach(clearTimeout);
      terminalLines.forEach((line, i) =>
        setTimeout(() => setVisibleLines((prev) => [...prev, line]), line.delay)
      );
    }, 13000);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-lg"
    >
      <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border-b border-white/[0.04]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 ml-2">aymane@dev — aeroml</span>
        </div>
        {/* Terminal body */}
        <div className="bg-[#0c1222] p-4 font-mono text-[13px] leading-relaxed min-h-[240px]">
          {visibleLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-1"
            >
              {line.prompt ? (
                <span>
                  <span className="text-cyan-400">{line.prompt}</span>
                  <span className="text-slate-500"> $ </span>
                  <span className="text-slate-200">{line.cmd}</span>
                </span>
              ) : (
                <span className="text-slate-400">{line.output}</span>
              )}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 align-middle"
          />
        </div>
      </div>
    </motion.div>
  );
}

const highlights = [
  { label: 'Georgia Tech MSCS', accent: false },
  { label: '3 Patents Pending', accent: false },
  { label: 'Founder @ Cogentic', accent: true },
];

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full bg-blue-600/[0.07] blur-[100px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full bg-violet-600/[0.05] blur-[80px]"
          animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div variants={item} className="mb-6">
              <span className="inline-block text-sm font-mono text-cyan-400 tracking-wider">
                {HERO_CONTENT.label}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="gradient-text">{HERO_CONTENT.headline}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* Highlight badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border ${
                    h.accent
                      ? 'border-cyan-500/30 text-cyan-400 bg-cyan-500/[0.08]'
                      : 'border-white/[0.08] text-slate-400 bg-white/[0.03]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${h.accent ? 'bg-cyan-400' : 'bg-slate-500'}`} />
                  {h.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={HERO_CONTENT.cta.primary.href}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {HERO_CONTENT.cta.primary.text}
              </a>
              <a
                href={HERO_CONTENT.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {HERO_CONTENT.cta.secondary.text}
              </a>
              <a
                href={HERO_CONTENT.cta.tertiary.href}
                className="px-7 py-3.5 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {HERO_CONTENT.cta.tertiary.text}
              </a>
            </motion.div>
          </div>

          {/* Right: animated terminal */}
          <div className="lg:w-2/5 flex justify-center">
            <AnimatedTerminal />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
