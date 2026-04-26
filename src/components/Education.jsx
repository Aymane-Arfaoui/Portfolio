import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

function EducationCard({ edu }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.2)' }}
      className={`glass-dark rounded-2xl p-8 border border-white/5 transition-colors relative overflow-hidden ${
        edu.highlight ? 'gradient-border' : ''
      }`}
    >
      {edu.highlight && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
      )}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{edu.institution}</h3>
          <p className="text-cyan-400 font-medium">{edu.degree}</p>
        </div>
        <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
          {edu.period}
        </span>
      </div>

      {edu.exchange && (
        <div className="mt-4 pl-4 border-l-2 border-slate-700">
          <p className="text-sm text-slate-300 font-medium">
            {edu.exchange.label} — {edu.exchange.institution}
          </p>
          <p className="text-sm text-slate-500">GPA: {edu.exchange.gpa}</p>
        </div>
      )}
    </motion.div>
  );
}

const Education = () => {
  return (
    <section id="education" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase block mb-2">
            Academic Background
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EDUCATION.map((edu, i) => (
            <EducationCard key={i} edu={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
