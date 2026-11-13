import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { HERO_CONTENT, CONTACT } from '../constants';
import { EASE, PrimaryButton, GhostButton } from './ui/motion';

const HeroScene = lazy(() => import('./three/HeroScene'));

function Letters({ text, start, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span key={i} className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            animate={start ? { y: '0%' } : {}}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 + i * 0.045 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function RotatingRole({ roles }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  const longest = roles.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className="relative inline-block overflow-hidden pb-[0.1em] align-bottom">
      <span className="invisible whitespace-nowrap">{longest}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-110%' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="gradient-text-cyan absolute left-0 top-0 whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const Hero = ({ ready }) => {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 800], [0, 180]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const appear = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <section id="about" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(34,211,238,0.12),transparent_55%)]" />

      <motion.div
        className="absolute inset-0 lg:left-[30%]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 2, ease: EASE, delay: 0.3 }}
      >
        <Suspense fallback={null}>
          <HeroScene className="h-full w-full" />
        </Suspense>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent lg:via-navy-950/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32"
      >
        <motion.div {...appear(0)} className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-mono text-xs tracking-wider text-slate-300">{HERO_CONTENT.label}</span>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter">
          <Letters text="Aymane" start={ready} className="block text-[17vw] sm:text-[13vw] lg:text-[9.5rem] text-slate-50" />
          <Letters text="Arfaoui" start={ready} className="block text-[17vw] sm:text-[13vw] lg:text-[9.5rem] text-outline" />
        </h1>

        <motion.p {...appear(0.7)} className="mt-8 font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-200">
          {HERO_CONTENT.headline.replace(/\.$/, '')} — <br />
          building <RotatingRole roles={HERO_CONTENT.rotatingRoles} />
        </motion.p>

        <motion.p {...appear(0.85)} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
          {HERO_CONTENT.subheadline}
        </motion.p>

        <motion.div {...appear(1)} className="mt-10 flex flex-wrap gap-4">
          <PrimaryButton href={HERO_CONTENT.cta.primary.href}>{HERO_CONTENT.cta.primary.text}</PrimaryButton>
          <GhostButton href={HERO_CONTENT.cta.secondary.href} external>
            {HERO_CONTENT.cta.secondary.text} ↗
          </GhostButton>
        </motion.div>

        <motion.div {...appear(1.15)} className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {HERO_CONTENT.highlights.map((h, i) => (
            <div key={h} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
              <span className="text-cyan-400">0{i + 1}</span>
              {h}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-6 right-6 z-10 mx-auto flex max-w-7xl items-end justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              className="absolute left-0 top-0 h-4 w-full bg-cyan-400"
              animate={{ y: [-16, 40] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          Scroll to explore
        </div>
        <div className="hidden sm:flex gap-6">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
