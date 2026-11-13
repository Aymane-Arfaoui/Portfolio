import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT_STATS } from '../constants';
import { CountUp, SectionHeader, TiltCard, fadeUp, stagger } from './ui/motion';

const spans = [
  'md:col-span-3 md:row-span-2',
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
];

const Impact = () => (
  <section id="impact" className="relative py-32">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeader index="01" label="Impact" title="Numbers that shipped" accent="to production." />

      <motion.div
        className="grid auto-rows-[minmax(180px,auto)] gap-4 md:grid-cols-6"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {IMPACT_STATS.map((stat, i) => {
          const hero = i === 0;
          return (
            <motion.div key={stat.label} variants={fadeUp} className={spans[i]}>
              <TiltCard
                intensity={hero ? 6 : 10}
                className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8"
              >
                {hero && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px] transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
                )}
                <div className="relative flex h-full flex-col justify-between gap-6" style={{ transform: 'translateZ(40px)' }}>
                  <span className="font-mono text-xs text-slate-500">/{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div
                      className={`font-display font-bold leading-none tracking-tighter gradient-text ${
                        hero ? 'text-7xl sm:text-8xl lg:text-9xl' : 'text-5xl lg:text-6xl'
                      }`}
                    >
                      <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div className={`mt-3 font-semibold text-slate-100 ${hero ? 'text-2xl' : 'text-lg'}`}>{stat.label}</div>
                    <div className="mt-1 text-sm text-slate-400">{stat.detail}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Impact;
