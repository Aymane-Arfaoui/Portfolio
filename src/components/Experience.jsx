import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

function TimelineEntry({ exp, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-blue-500/20 to-transparent" />

      {/* Dot */}
      <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-navy-900 group-hover:ring-cyan-500/20 transition-all" />

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.2)' }}
        className="glass-dark glow-hover rounded-2xl p-6 lg:p-8 border border-white/5 transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100">{exp.role}</h3>
            <div className="flex items-center gap-2">
              {exp.href ? (
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium hover:underline"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="text-cyan-400 font-medium">{exp.company}</span>
              )}
              <span className="text-slate-600">·</span>
              <span className="text-sm text-slate-500">{exp.location}</span>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/[0.04] rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact */}
        {exp.impact && (
          <div className="text-sm font-semibold text-cyan-400">{exp.impact}</div>
        )}
      </motion.div>
    </motion.div>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="relative py-24">
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
            Career
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {EXPERIENCES.map((exp, i) => (
            <TimelineEntry key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
