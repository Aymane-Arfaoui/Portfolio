import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const categories = [
  { key: 'languages', title: 'Languages' },
  { key: 'software_engineering', title: 'Software Engineering' },
  { key: 'backend_systems', title: 'Backend & Systems' },
  { key: 'ai_ml', title: 'AI / ML' },
  { key: 'infra_cloud', title: 'Infrastructure & Cloud' },
];

function SkillCategory({ title, skills }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ borderColor: 'rgba(6,182,212,0.15)' }}
      className="glass-dark rounded-2xl p-6 border border-white/5 transition-colors"
    >
      <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.08, borderColor: 'rgba(6,182,212,0.3)' }}
            className="px-3 py-1.5 text-sm text-slate-300 bg-white/[0.04] rounded-lg border border-white/5 hover:text-cyan-400 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase block mb-2">
            Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <SkillCategory
              key={cat.key}
              title={cat.title}
              skills={SKILLS[cat.key]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
