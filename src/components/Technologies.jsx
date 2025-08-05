import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTensorflow, SiPython, SiC, SiAmazonaws, SiMicrosoftazure, SiDocker, SiKubernetes, SiJenkins, SiJira, SiPostgresql, SiMysql, SiGit, SiDjango, SiFlask } from 'react-icons/si';
import { FaReact, FaJava } from 'react-icons/fa';
import {motion} from 'framer-motion';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
    transition: {
        duration: duration, ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
    }
    },
});

const Technologies = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Key <span className="gradient-text">Technologies</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to build innovative solutions
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6">

          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <RiReactjsLine className="text-6xl text-cyan-400 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">React</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <FaReact className="text-6xl text-blue-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">React Native</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiTensorflow className="text-6xl text-orange-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">TensorFlow</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiPython className="text-6xl text-blue-400 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Python</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiC className="text-6xl text-slate-600 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">C</p>
          </motion.div>

          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <FaJava className="text-6xl text-red-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Java</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiAmazonaws className="text-6xl text-orange-400 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">AWS</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiMicrosoftazure className="text-6xl text-blue-600 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Azure</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiDocker className="text-6xl text-blue-400 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Docker</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiKubernetes className="text-6xl text-blue-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Kubernetes</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiPostgresql className="text-6xl text-blue-600 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">PostgreSQL</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiMysql className="text-6xl text-blue-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">MySQL</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiMongodb className="text-6xl text-green-600 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">MongoDB</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(1.6)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiGit className="text-6xl text-orange-500 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Git</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiDjango className="text-6xl text-green-700 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Django</p>
          </motion.div>

          <motion.div 
          variants={iconVariants(1.3)}
          initial="initial"
          animate="animate"
          className="tech-item rounded-2xl p-6 enhanced-card">
            <SiFlask className="text-6xl text-slate-600 mx-auto" />
            <p className="text-sm text-slate-600 mt-2 text-center font-medium">Flask</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;
