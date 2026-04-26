import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function ProjectCard({ project }) {
  const isExternal = project.href.startsWith('http');
  const linkProps = isExternal
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: project.href };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.25)' }}
      className={`glass-dark glow-hover rounded-2xl p-8 border border-white/5 transition-colors flex flex-col ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      {project.featured && (
        <span className="inline-block w-fit text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full mb-4">
          Featured
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-100 mb-1">{project.title}</h3>
      <p className="text-sm text-cyan-400 font-medium mb-3">{project.type}</p>
      <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/[0.04] rounded-md border border-white/5"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Metric */}
      {project.metric && (
        <div className="text-sm font-semibold text-cyan-400 mb-5">
          {project.metric}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        <a
          {...linkProps}
          className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
        >
          {project.href.startsWith('#') ? 'View Case Study' : 'View Project'}
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-slate-700 text-slate-300 text-sm font-semibold rounded-lg hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-300"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
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
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
