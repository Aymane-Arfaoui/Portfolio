import React, { Suspense, lazy, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { EASE, SectionHeader } from './ui/motion';

const SkillSphere = lazy(() => import('./three/SkillSphere'));

const categories = [
  { key: 'ai_ml', title: 'AI / ML' },
  { key: 'backend_systems', title: 'Backend & Systems' },
  { key: 'infra_cloud', title: 'Infrastructure & Cloud' },
  { key: 'languages', title: 'Languages' },
  { key: 'software_engineering', title: 'Engineering Practice' },
];

const sphereWords = [...new Set(categories.flatMap((c) => SKILLS[c.key]))];

const Skills = () => {
  const [active, setActive] = useState(categories[0].key);

  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="05" label="Toolkit" title="The stack" accent="I reach for." />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-[20%] rounded-full border border-white/5" />
            <div className="absolute inset-[5%] rounded-full border border-dashed border-white/[0.04] animate-spin-slow" />
            <Suspense fallback={null}>
              <SkillSphere words={sphereWords} className="absolute inset-0" />
            </Suspense>
            <p className="absolute bottom-0 left-0 right-0 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-slate-600">
              Move your cursor · hover a skill
            </p>
          </div>

          <div>
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active === c.key ? 'text-navy-950' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {active === c.key && (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative font-medium">{c.title}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  className="grid grid-cols-2 gap-3"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                >
                  {SKILLS[active].map((skill) => (
                    <motion.li
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: EASE } },
                        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
                      }}
                      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-slate-200 transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors group-hover:bg-cyan-400" />
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
