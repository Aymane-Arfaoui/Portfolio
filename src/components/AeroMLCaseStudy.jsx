import React, { Suspense, lazy, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AEROML } from '../constants';
import capstoneTeam from '../assets/CapstoneTeam-web.jpg';
import {
  CountUp,
  EASE,
  GhostButton,
  PrimaryButton,
  SectionHeader,
  SplitReveal,
  TiltCard,
  fadeUp,
  stagger,
} from './ui/motion';

const MedallionScene = lazy(() => import('./three/MedallionScene'));

function SubHeading({ label, title }) {
  return (
    <div className="mb-10">
      <span className="mb-3 block font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">{label}</span>
      <h3 className="font-display text-3xl lg:text-5xl font-bold tracking-tight">
        <SplitReveal text={title} />
      </h3>
    </div>
  );
}

function MetricCard({ metric }) {
  const match = metric.value.match(/^([\d.]+)(.*)$/);
  return (
    <motion.div variants={fadeUp}>
      <TiltCard className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
        <div style={{ transform: 'translateZ(30px)' }}>
          <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight gradient-text-cyan">
            {match ? <CountUp value={parseFloat(match[1])} suffix={match[2]} /> : metric.value}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-100">{metric.label}</div>
          <div className="text-xs text-slate-500">{metric.detail}</div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function Intro() {
  return (
    <div className="mb-32 grid items-center gap-14 lg:grid-cols-2">
      <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} className="mb-6 font-display text-2xl text-slate-200">
          {AEROML.subtitle}
        </motion.p>
        <motion.p variants={fadeUp} className="mb-10 leading-relaxed text-slate-400">
          {AEROML.summary}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <PrimaryButton href={AEROML.links.presentation} external>Watch presentation</PrimaryButton>
          <GhostButton href={AEROML.links.github} external>GitHub ↗</GhostButton>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.metrics.map((m) => (
          <MetricCard key={m.label} metric={m} />
        ))}
      </motion.div>
    </div>
  );
}

function VideoReveal() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <div ref={ref} className="mb-32" style={{ perspective: 1400 }}>
      <motion.div
        style={{ rotateX, scale, opacity }}
        className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-[0_40px_120px_-20px_rgba(34,211,238,0.25)]"
      >
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.04] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-4 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
            aeroml — demo & architecture walkthrough
          </span>
        </div>
        <div className="aspect-video">
          <iframe
            src="https://drive.google.com/file/d/1AyQwt_PZ091EtPpPlzbzziFQuU69pJsA/preview"
            title="AeroML presentation"
            className="h-full w-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ProblemSolution() {
  const cards = [
    { title: 'The problem', body: AEROML.problem, accent: 'from-orange-500 to-rose-500', tag: '01' },
    { title: 'The solution', body: AEROML.solution, accent: 'from-cyan-400 to-violet-500', tag: '02' },
  ];
  return (
    <motion.div
      className="mb-32 grid gap-6 md:grid-cols-2"
      variants={stagger(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {cards.map((c) => (
        <motion.div key={c.title} variants={fadeUp}>
          <TiltCard intensity={6} className="overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-10">
            <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${c.accent}`} />
            <span className="font-mono text-xs text-slate-500">{c.tag}</span>
            <h4 className="mb-4 mt-2 font-display text-3xl font-bold text-slate-100">{c.title}</h4>
            <p className="leading-relaxed text-slate-400">{c.body}</p>
          </TiltCard>
        </motion.div>
      ))}
    </motion.div>
  );
}

const stageColors = ['text-amber-500', 'text-slate-300', 'text-yellow-400'];

function Architecture() {
  return (
    <div className="mb-32 grid items-center gap-12 lg:grid-cols-2">
      <div className="relative order-2 aspect-square w-full lg:order-1">
        <div className="absolute inset-[15%] rounded-full bg-cyan-500/10 blur-[80px]" />
        <Suspense fallback={null}>
          <MedallionScene className="absolute inset-0" />
        </Suspense>
      </div>
      <div className="order-1 lg:order-2">
        <SubHeading label="Data pipeline" title="Medallion architecture" />
        <div className="space-y-4">
          {[...AEROML.architecture].reverse().map((stage, i) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-white/20"
            >
              <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${stage.color}`} />
              <div className="flex items-baseline gap-3">
                <span className={`font-display text-xl font-bold ${stageColors[2 - i]}`}>{stage.stage}</span>
                <span className="text-sm text-slate-400">· {stage.title}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="mb-32">
      <SubHeading label="Platform capabilities" title="What I built" />
      <motion.div
        className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {AEROML.features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-800"
          >
            <span className="font-mono text-xs text-slate-600 transition-colors group-hover:text-cyan-400">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h5 className="mb-2 mt-4 font-display text-lg font-semibold text-slate-100">{f.title}</h5>
            <p className="text-sm leading-relaxed text-slate-500">{f.description}</p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function Role() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="mb-32 grid items-center gap-12 lg:grid-cols-2">
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: EASE }}
        className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
      >
        <motion.img
          src={capstoneTeam}
          alt="The AeroML team at the Concordia Capstone Showcase"
          style={{ y: imgY }}
          className="absolute inset-0 h-[120%] w-full -top-[10%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        <p className="absolute bottom-5 left-6 font-mono text-xs uppercase tracking-wider text-slate-300">
          AeroML team · Concordia Capstone Showcase
        </p>
      </motion.div>
      <div>
        <SubHeading label="Leadership" title="My role" />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-slate-400"
        >
          {AEROML.role}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          variants={stagger(0.03)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {AEROML.techStack.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ImpactBanner() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="gradient-border relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-violet-500/[0.08] p-10 lg:p-16"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">Results</span>
      <h3 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl">
        <SplitReveal text={AEROML.impact.headline} wordClassName="gradient-text" />
      </h3>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {AEROML.impact.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

const AeroMLCaseStudy = () => (
  <section id="aeroml" className="relative py-32">
    <div className="pointer-events-none absolute left-1/2 top-40 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-600/[0.06] blur-[140px]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <SectionHeader index="02" label="Featured case study" title="AeroML." accent="Weeks to minutes." />
      <Intro />
      <VideoReveal />
      <ProblemSolution />
      <Architecture />
      <Features />
      <Role />
      <ImpactBanner />
    </div>
  </section>
);

export default AeroMLCaseStudy;
