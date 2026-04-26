import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AEROML } from '../constants';
import capstoneTeam from '../assets/CapstoneTeam.jpg';

/* ─── Helpers ─── */

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function CountUp({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    if (isNaN(num)) {
      setValue(target);
      return;
    }
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setValue(Number.isInteger(num) ? Math.round(current).toString() : current.toFixed(1));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

/* ─── Sub-sections ─── */

function SectionHeading({ label, title }) {
  return (
    <motion.div
      className="text-center mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {label && (
        <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
          {label}
        </span>
      )}
      <h3 className="text-3xl lg:text-4xl font-bold">{title}</h3>
    </motion.div>
  );
}

function MetricCard({ metric }) {
  const isNumeric = /^[\d.]+/.test(metric.value);
  const numericPart = isNumeric ? parseFloat(metric.value) : null;
  const suffixPart = isNumeric ? metric.value.replace(/[\d.]+/, '') : '';

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.04, borderColor: 'rgba(6,182,212,0.3)' }}
      className="glass-dark rounded-2xl p-6 text-center border border-white/5 transition-colors group"
    >
      <div className="text-3xl lg:text-4xl font-bold gradient-text-cyan mb-1">
        {numericPart !== null ? (
          <CountUp target={numericPart.toString()} suffix={suffixPart} />
        ) : (
          metric.value
        )}
      </div>
      <div className="text-sm font-semibold text-slate-200 mb-1">{metric.label}</div>
      <div className="text-xs text-slate-500">{metric.detail}</div>
    </motion.div>
  );
}

function HeroBanner() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
      {/* Left */}
      <motion.div
        className="lg:w-1/2"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-block text-sm font-mono text-cyan-400 tracking-wider mb-4"
        >
          Featured Case Study
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-5xl lg:text-6xl font-bold mb-3"
        >
          <span className="gradient-text">AeroML</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-xl text-slate-400 mb-6"
        >
          {AEROML.subtitle}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-slate-400 leading-relaxed mb-8"
        >
          {AEROML.summary}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <a
            href={AEROML.links.presentation}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Watch Presentation
          </a>
          <a
            href={AEROML.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-700 text-slate-300 rounded-xl font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
          >
            View GitHub
          </a>
          <a
            href={AEROML.links.contact}
            className="px-6 py-3 border border-slate-700 text-slate-300 rounded-xl font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right — Metric cards */}
      <motion.div
        className="lg:w-1/2 grid grid-cols-2 gap-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.metrics.map((m, i) => (
          <MetricCard key={i} metric={m} />
        ))}
      </motion.div>
    </div>
  );
}

function VideoSection() {
  const videoId = '1AyQwt_PZ091EtPpPlzbzziFQuU69pJsA';
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div className="mb-24">
      <SectionHeading label="Demo" title="Watch the Presentation" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30">
          <div className="aspect-video">
            <iframe
              src={embedUrl}
              title="AeroML Presentation"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4">
          Full AeroML platform demo and architecture walkthrough
        </p>
      </motion.div>
    </div>
  );
}

function ProblemSolution() {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6 mb-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeUp}
        className="glass-dark rounded-2xl p-8 border-l-4 border-orange-500/60"
      >
        <h4 className="text-lg font-bold text-orange-400 mb-3">The Problem</h4>
        <p className="text-slate-400 leading-relaxed">{AEROML.problem}</p>
      </motion.div>
      <motion.div
        variants={fadeUp}
        className="glass-dark rounded-2xl p-8 border-l-4 border-cyan-500/60"
      >
        <h4 className="text-lg font-bold text-cyan-400 mb-3">The Solution</h4>
        <p className="text-slate-400 leading-relaxed">{AEROML.solution}</p>
      </motion.div>
    </motion.div>
  );
}

function Architecture() {
  return (
    <div className="mb-24">
      <SectionHeading label="Data Pipeline" title="Medallion Architecture" />
      <motion.div
        className="grid md:grid-cols-3 gap-6 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.architecture.map((stage, i) => (
          <motion.div
            key={stage.stage}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            className="relative glass-dark rounded-2xl p-8 border border-white/5 overflow-hidden"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stage.color}`}
            />
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              Stage {i + 1}
            </div>
            <h4 className="text-xl font-bold mb-1">{stage.stage}</h4>
            <p className="text-sm text-cyan-400 font-medium mb-3">{stage.title}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{stage.description}</p>
            {i < 2 && (
              <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 text-slate-600 text-xl z-10">
                →
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const featureIcons = [
  '↑', '◉', '✦', '◎', '▤', '⚡', '◆', '▸', '⬡',
];

function Features() {
  return (
    <div className="mb-24">
      <SectionHeading label="Platform Capabilities" title="What I Built" />
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.features.map((f, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.03, borderColor: 'rgba(6,182,212,0.2)' }}
            className="glass-dark rounded-xl p-6 border border-white/5 transition-colors group"
          >
            <span className="text-cyan-400 text-lg mb-3 block opacity-60 group-hover:opacity-100 transition-opacity">
              {featureIcons[i]}
            </span>
            <h5 className="font-semibold text-slate-200 mb-1">{f.title}</h5>
            <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function RoleSection() {
  return (
    <motion.div
      className="mb-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeading label="Leadership" title="My Role" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Team photo */}
        <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/30 group">
          <img
            src={capstoneTeam}
            alt="AeroML capstone team at the project showcase"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm text-slate-300 font-medium">The AeroML team at the Concordia Capstone Showcase</p>
          </div>
        </motion.div>
        {/* Role description */}
        <motion.div variants={fadeUp} className="glass-dark rounded-2xl p-8 border border-white/5">
          <p className="text-slate-400 leading-relaxed">{AEROML.role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TechStack() {
  return (
    <div className="mb-24">
      <SectionHeading label="Built With" title="Tech Stack" />
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.techStack.map((tech) => (
          <motion.span
            key={tech}
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            className="px-4 py-2 glass-dark rounded-lg text-sm font-mono text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

function ImpactSection() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeading label="Results" title="Impact" />
      <div className="glass-dark rounded-2xl p-8 lg:p-12 border border-white/5 gradient-border max-w-4xl mx-auto text-center">
        <div className="text-4xl lg:text-5xl font-bold gradient-text-cyan mb-6">
          {AEROML.impact.headline}
        </div>
        <ul className="space-y-3">
          {AEROML.impact.points.map((point, i) => (
            <li
              key={i}
              className="text-slate-400 flex items-start justify-center gap-2"
            >
              <span className="text-cyan-500 mt-1">&#9656;</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ─── Main ─── */

const AeroMLCaseStudy = () => {
  return (
    <section id="aeroml" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <motion.div
          className="absolute top-40 -right-60 w-[600px] h-[600px] rounded-full bg-cyan-600/[0.04] blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-600/[0.04] blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <HeroBanner />
        <VideoSection />
        <ProblemSolution />
        <Architecture />
        <Features />
        <RoleSection />
        <TechStack />
        <ImpactSection />
      </div>
    </section>
  );
};

export default AeroMLCaseStudy;
