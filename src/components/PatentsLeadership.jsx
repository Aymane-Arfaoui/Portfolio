import React from 'react';
import { motion } from 'framer-motion';
import { PATENTS, LEADERSHIP } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function PatentCard({ patent }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.2)' }}
      className="glass-dark rounded-2xl p-6 border border-white/5 transition-colors"
    >
      <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full mb-3">
        {patent.status}
      </span>
      <h4 className="text-base font-bold text-slate-100 mb-2">{patent.title}</h4>
      <p className="text-sm text-slate-400 leading-relaxed">{patent.description}</p>
    </motion.div>
  );
}

function LeadershipCard({ item }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.2)' }}
      className="glass-dark rounded-2xl p-6 border border-white/5 transition-colors"
    >
      <h4 className="text-base font-bold text-slate-100 mb-1">{item.role}</h4>
      <p className="text-sm text-cyan-400 font-medium mb-2">{item.organization}</p>
      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

const PatentsLeadership = () => {
  return (
    <section className="relative py-24">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Patents */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase block mb-2">
            Innovation
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Patents & Leadership</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PATENTS.map((patent, i) => (
            <PatentCard key={i} patent={patent} />
          ))}
        </motion.div>

        {/* Leadership */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {LEADERSHIP.map((item, i) => (
            <LeadershipCard key={i} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PatentsLeadership;
