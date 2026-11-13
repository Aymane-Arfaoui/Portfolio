import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MARQUEE_TECH } from '../constants';

function Row({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.02] px-6 py-3 font-display text-lg text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const Marquee = () => {
  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0, 0.15], [-2, 0]);
  const half = Math.ceil(MARQUEE_TECH.length / 2);

  return (
    <motion.section style={{ skewY: skew }} className="relative space-y-4 py-16" aria-label="Technologies">
      <Row items={MARQUEE_TECH.slice(0, half)} />
      <Row items={MARQUEE_TECH.slice(half)} reverse />
    </motion.section>
  );
};

export default Marquee;
