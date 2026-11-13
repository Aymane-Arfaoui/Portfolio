import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { EASE, SectionHeader, TiltCard } from './ui/motion';

function ExperienceItem({ exp, index }) {
  return (
    <div className="relative grid gap-6 pb-20 pl-10 md:grid-cols-[220px_1fr] md:gap-12 md:pl-0">
      <motion.div
        className="absolute left-0 top-2 md:left-[220px]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <span className="relative flex h-4 w-4 -translate-x-1/2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-cyan-300 bg-navy-950" />
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: EASE }}
        className="md:pr-12 md:text-right"
      >
        <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">{exp.period}</div>
        <div className="mt-2 text-sm text-slate-500">{exp.location}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        className="md:pl-12"
      >
        <TiltCard intensity={5} className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 lg:p-10">
          <span className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[9rem] font-bold leading-none text-white/[0.03]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="relative">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
                {exp.href ? (
                  <a href={exp.href} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                    {exp.company} ↗
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              {exp.impact && (
                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                  {exp.impact}
                </span>
              )}
            </div>
            <p className="mt-1 text-lg font-medium text-slate-300">{exp.role}</p>
            <p className="mt-5 leading-relaxed text-slate-400">{exp.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {exp.technologies.map((t) => (
                <span key={t} className="rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-slate-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="04" label="Experience" title="Where I've" accent="shipped." />
        <div ref={ref} className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-white/10 md:left-[220px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.8)] md:left-[220px]"
          />
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
