import React from 'react';
import { EXTRACURRICULARS } from '../constants';
import { motion } from 'framer-motion';
import { UserGroupIcon, BuildingOfficeIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Extracurriculars = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 section-gradient" id="leadership">
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
            Leadership & <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building communities, fostering innovation, and creating opportunities for fellow students
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {EXTRACURRICULARS.map((activity, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="enhanced-card p-8 mb-8 last:mb-0 relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <UserGroupIcon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {activity.role}
                      </h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                        Leadership
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-purple-600 font-semibold">
                      <SparklesIcon className="w-5 h-5" />
                      {activity.organization}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">
                  {activity.description}
                </p>

                {/* Impact Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 glass rounded-xl">
                    <BuildingOfficeIcon className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Corporate Partnerships</div>
                      <div className="text-xs text-slate-600">Strategic Alliances</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 glass rounded-xl">
                    <TrophyIcon className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Event Sponsorship</div>
                      <div className="text-xs text-slate-600">Hackathons & Initiatives</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div 
          className="mt-16 glass p-8 rounded-3xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Leadership Philosophy</h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              I believe in creating opportunities for others to succeed. Through my role in the Engineering & Computer Science Association, 
              I work to bridge the gap between industry and academia, ensuring students have access to the resources and networks they need 
              to launch successful careers in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Community Building</h4>
              <p className="text-sm text-slate-600">Fostering connections between students and industry professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BuildingOfficeIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Strategic Partnerships</h4>
              <p className="text-sm text-slate-600">Securing resources and opportunities for student success</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrophyIcon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Innovation Support</h4>
              <p className="text-sm text-slate-600">Enabling hackathons and tech initiatives that drive creativity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurriculars; 