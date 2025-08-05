import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Experiences = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 section-gradient" id="experience">
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building innovative solutions and driving impact across leading aerospace and technology companies
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-200 to-purple-200 -z-10"></div>
              )}
              
              {/* Experience Card */}
              <div className="enhanced-card p-8 ml-16 relative">
                {/* Timeline Dot */}
                <div className="absolute -left-20 top-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <BriefcaseIcon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <BriefcaseIcon className="w-4 h-4" />
                        {experience.company}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {experience.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    {/* Impact Badge */}
                    <div className="flex flex-col gap-2">
                      {experience.highlight && (
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium text-center">
                          {experience.highlight}
                        </div>
                      )}
                      {experience.impact && (
                        <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold text-center">
                          {experience.impact}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="skill-tag px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 rounded-2xl max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Ready for New Challenges
            </h3>
            <p className="text-slate-600 text-sm">
              Seeking opportunities to apply my expertise in AI, machine learning, and full-stack development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
