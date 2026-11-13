import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { CONTACT } from '../constants';
import { EASE } from './ui/motion';

const navLinks = [
  { label: 'Home', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'AeroML', href: '#aeroml' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('#about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 300 && !mobileOpen);
  });

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <nav className="glass-dark-strong flex w-full max-w-5xl items-center justify-between rounded-full py-2 pl-5 pr-2 shadow-2xl shadow-black/40">
          <a href="#about" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-xs text-navy-950">
              AA
            </span>
            <span className="hidden sm:inline text-slate-100">Aymane</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative z-10 block rounded-full px-4 py-2 text-[13px] transition-colors duration-200 ${
                    active === link.href ? 'text-white' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </a>
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-navy-950 transition-shadow hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Hire me
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/5"
              aria-label="Toggle navigation"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-slate-200" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="block h-0.5 w-5 bg-slate-200" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-navy-950 px-8"
          >
            {navLinks.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <motion.a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: EASE }}
                  className="block py-1 font-display text-5xl font-bold text-slate-100 hover:text-cyan-300"
                >
                  {link.label}
                </motion.a>
              </div>
            ))}
            <div className="mt-10 flex gap-6 font-mono text-sm text-slate-400">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={`mailto:${CONTACT.email}`}>Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
