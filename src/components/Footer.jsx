import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <footer id="contact" className="relative">
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-600/[0.04] blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-cyan-400 tracking-wider uppercase block mb-4">
              Let's Talk
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Looking for my next challenge.</span>
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              I'm interested in roles where I can build high-impact systems at scale — data platforms, ML infrastructure, distributed systems, or anything that ships real software to real users. Let's connect.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href={CONTACT.cogentic}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
            >
              Visit Cogentic
            </a>
            <a
              href={CONTACT.aeromlPresentation}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
            >
              Watch AeroML Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {CONTACT.name}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
