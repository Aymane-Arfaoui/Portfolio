import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger = (gap = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});

export function SplitReveal({ text, className = '', wordClassName = '', delay = 0, as: Tag = 'span' }) {
  const words = text.split(' ');
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="-mb-[0.14em] inline-block overflow-hidden align-bottom pb-[0.14em]" aria-hidden>
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '110%', rotate: 4 }}
            whileInView={{ y: '0%', rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.06 }}
          >
            {word}
            {i < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeader({ index, label, title, accent, align = 'left' }) {
  const centered = align === 'center';
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {index && <span className="font-mono text-xs text-cyan-400">{index}</span>}
        <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">{label}</span>
      </motion.div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
        <SplitReveal text={title} className="text-slate-100" />
        {accent && (
          <>
            {' '}
            <SplitReveal text={accent} wordClassName="gradient-text" delay={0.15} />
          </>
        )}
      </h2>
    </div>
  );
}

export function TiltCard({ children, className = '', intensity = 10, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(springX, [0, 1], [-intensity, intensity]);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    ref.current.style.setProperty('--mx', `${px * 100}%`);
    ref.current.style.setProperty('--my', `${py * 100}%`);
  };

  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`spotlight-card relative h-full ${className}`}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 250, damping: 15 });
  const y = useSpring(0, { stiffness: 250, damping: 15 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({ value, prefix = '', suffix = '', duration = 2200 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);
  const decimals = Number.isInteger(value) ? 0 : 1;

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - p, 4)));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function PrimaryButton({ href, children, external, className = '' }) {
  return (
    <Magnetic>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        data-cursor="hover"
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 font-semibold text-navy-950 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] ${className}`}
      >
        <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 transition-transform duration-500 ease-out group-hover:translate-y-0" />
        <span className="relative">{children}</span>
        <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </Magnetic>
  );
}

export function GhostButton({ href, children, external, className = '' }) {
  return (
    <Magnetic>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        data-cursor="hover"
        className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-slate-200 backdrop-blur transition-colors duration-300 hover:border-cyan-400/60 hover:text-cyan-300 ${className}`}
      >
        {children}
      </a>
    </Magnetic>
  );
}
