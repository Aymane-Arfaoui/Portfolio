import React, { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { EASE, GhostButton, PrimaryButton, SplitReveal } from './ui/motion';

const WaveScene = lazy(() => import('./three/WaveScene'));

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };
  return (
    <button
      onClick={copy}
      className="group inline-flex items-center gap-3 font-mono text-sm text-slate-400 transition-colors hover:text-cyan-300"
    >
      {CONTACT.email}
      <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wider">
        {copied ? 'Copied ✓' : 'Copy'}
      </span>
    </button>
  );
}

const Footer = () => (
  <footer id="contact" className="relative overflow-hidden">
    <section className="relative flex min-h-[100svh] flex-col justify-center py-32">
      <Suspense fallback={null}>
        <WaveScene className="absolute inset-x-0 bottom-0 h-[65%] opacity-70" />
      </Suspense>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-navy-950 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="font-mono text-xs text-cyan-400">08</span>
          <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">Contact</span>
        </motion.div>

        <h2 className="font-display text-[13vw] font-bold leading-[0.9] tracking-tighter lg:text-[10rem]">
          <SplitReveal text="Let's build" className="block text-slate-50" />
          <SplitReveal text="something real." className="block" wordClassName="gradient-text" delay={0.15} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-slate-400"
        >
          I'm looking for roles where I can build high-impact systems at scale — data platforms, ML infrastructure,
          distributed systems, or anything that ships real software to real users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <PrimaryButton href={`mailto:${CONTACT.email}`}>Get in touch</PrimaryButton>
          <GhostButton href={CONTACT.linkedin} external>LinkedIn ↗</GhostButton>
          <GhostButton href={CONTACT.aeromlPresentation} external>AeroML demo ↗</GhostButton>
        </motion.div>

        <div className="mt-10">
          <CopyEmail />
        </div>
      </div>
    </section>

    <div className="relative z-10 border-t border-white/5 bg-navy-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} {CONTACT.name} · Designed & built with React, Three.js and Framer Motion</span>
        <div className="flex gap-6">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
          <a href={CONTACT.cogentic} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">Cogentic</a>
          <a href={`tel:${CONTACT.phone}`} className="hover:text-cyan-300 transition-colors">{CONTACT.phone}</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
