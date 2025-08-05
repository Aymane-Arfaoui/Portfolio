import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCategory = ({ title, skills, colorClass }) => (
    <motion.div variants={itemVariants} className="enhanced-card p-6">
      <h3 className={`text-xl font-semibold mb-4 ${colorClass}`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index} 
            className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 section-gradient" id="skills">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning programming languages, frameworks, and cutting-edge technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillCategory 
            title="Programming Languages" 
            skills={SKILLS.programming_languages}
            colorClass="text-blue-600"
          />
          
          <SkillCategory 
            title="Mobile Development" 
            skills={SKILLS.mobile}
            colorClass="text-green-600"
          />
          
          <div className="md:col-span-2">
            <SkillCategory 
              title="Tools & Technologies" 
              skills={SKILLS.tools_and_technologies}
              colorClass="text-purple-600"
            />
          </div>
          
          <div className="md:col-span-2">
            <SkillCategory 
              title="Computer Science Foundations" 
              skills={SKILLS.foundations}
              colorClass="text-orange-600"
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">
            Always learning and expanding my technical expertise
          </p>
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Currently exploring: AI/ML, Cloud Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 