import React from 'react';
import { motion } from 'framer-motion';
import { PATENTS, LEADERSHIP } from '../constants';
import { EASE, SectionHeader, fadeUp, stagger } from './ui/motion';

function PatentRow({ patent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
      className="group relative grid gap-4 overflow-hidden border-t border-white/10 py-10 md:grid-cols-[80px_1fr_1fr] md:items-center"
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-cyan-500/[0.07] to-violet-500/[0.07] transition-transform duration-500 ease-out group-hover:scale-y-100" />
      <span className="relative font-mono text-sm text-slate-500 transition-colors group-hover:text-cyan-400">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="relative font-display text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 transition-transform duration-500 group-hover:translate-x-3">
        {patent.title}
      </h3>
      <div className="relative">
        <span className="mb-2 inline-block rounded-full bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-300">
          {patent.status}
        </span>
        <p className="text-sm leading-relaxed text-slate-400">{patent.description}</p>
      </div>
    </motion.div>
  );
}

const PatentsLeadership = () => (
  <section id="patents" className="relative py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeader index="07" label="Innovation" title="Patents &" accent="leadership." />

      <div className="border-b border-white/10">
        {PATENTS.map((p, i) => (
          <PatentRow key={p.title} patent={p} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-16 grid gap-6 md:grid-cols-2"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {LEADERSHIP.map((item) => (
          <motion.div
            key={item.role}
            variants={fadeUp}
            className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors hover:border-white/20"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">{item.organization}</span>
            <h4 className="mt-3 font-display text-2xl font-bold text-slate-100">{item.role}</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default PatentsLeadership;
