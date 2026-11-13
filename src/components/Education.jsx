import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { SectionHeader, TiltCard, fadeUp, stagger } from './ui/motion';

const Education = () => (
  <section id="education" className="relative py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeader index="06" label="Education" title="Always" accent="learning." />
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {EDUCATION.map((edu) => (
          <motion.div key={edu.institution} variants={fadeUp}>
            <TiltCard
              intensity={7}
              className={`overflow-hidden rounded-3xl border p-10 ${
                edu.highlight
                  ? 'gradient-border border-transparent bg-gradient-to-br from-cyan-500/[0.08] to-violet-500/[0.06]'
                  : 'border-white/[0.07] bg-white/[0.02]'
              }`}
            >
              <div style={{ transform: 'translateZ(30px)' }} className="flex h-full flex-col">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">{edu.period}</span>
                  {edu.highlight && (
                    <span className="rounded-full bg-white px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-navy-950">
                      Incoming
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl font-bold leading-tight text-slate-50">{edu.institution}</h3>
                <p className="mt-3 text-lg text-slate-300">{edu.degree}</p>
                {edu.exchange && (
                  <div className="mt-8 border-l-2 border-cyan-400/40 pl-4">
                    <p className="text-sm font-medium text-slate-300">
                      {edu.exchange.label} · {edu.exchange.institution}
                    </p>
                    <p className="text-sm text-slate-500">GPA {edu.exchange.gpa}</p>
                  </div>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
