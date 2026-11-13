import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { SectionHeader } from './ui/motion';
import capstoneTeam from '../assets/CapstoneTeam-web.jpg';
import defendly from '../assets/defendly-web.jpg';
import almentor from '../assets/almentor-web.jpg';

const images = {
  AeroML: capstoneTeam,
  Defendly: defendly,
  Almentor: almentor,
};

const accents = [
  'from-cyan-500/30 via-sky-500/10 to-transparent',
  'from-violet-500/30 via-fuchsia-500/10 to-transparent',
  'from-emerald-500/25 via-teal-500/10 to-transparent',
  'from-amber-500/25 via-orange-500/10 to-transparent',
];

function CogenticVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-navy-950">
      <div className="absolute inset-0 grid-bg opacity-80" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/30"
          style={{ width: 120 + i * 110, height: 120 + i * 110, x: '-50%', y: '-50%' }}
          animate={{ rotate: i % 2 ? -360 : 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 20 + i * 8, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }}
        >
          <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
        </motion.div>
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-display text-3xl font-bold text-navy-950 shadow-[0_0_60px_rgba(34,211,238,0.5)]">
        C
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const isExternal = project.href.startsWith('http');
  const img = images[project.title];

  return (
    <div className="sticky top-0 flex h-screen items-center justify-center">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="group relative grid h-[78vh] max-h-[640px] w-full origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900 shadow-2xl shadow-black/60 md:grid-cols-2"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accents[index % accents.length]} opacity-60`} />

        <div className="relative flex flex-col justify-between p-8 lg:p-12">
          <div>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-slate-400">
              <span className="text-cyan-400">{String(index + 1).padStart(2, '0')}</span>
              <span className="h-px w-8 bg-white/20" />
              {project.type}
            </div>
            <h3 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter text-slate-50">{project.title}</h3>
            <p className="mt-6 max-w-md leading-relaxed text-slate-400">{project.description}</p>
          </div>

          <div>
            {project.metric && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-300">
                ▲ {project.metric}
              </div>
            )}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                {project.href.startsWith('#') ? 'Read case study' : 'Visit project'} →
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden md:block">
          {img ? (
            <>
              <img
                src={img}
                alt={`${project.title} screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-left-top transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/20 to-transparent" />
            </>
          ) : (
            <CogenticVisual />
          )}
        </div>
      </motion.article>
    </div>
  );
}

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section id="projects" className="relative pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="03" label="Selected work" title="Things I've" accent="built." />
      </div>
      <div ref={container} className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
