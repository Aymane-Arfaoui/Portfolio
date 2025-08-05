import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { AcademicCapIcon, MapPinIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/outline';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';

const Education = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" id="education">
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic foundation in software engineering with international experience
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Degree */}
          <motion.div 
            className="enhanced-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <AcademicCapIcon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {EDUCATION.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3">
                    <BuildingLibraryIcon className="w-5 h-5" />
                    {EDUCATION.institution}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {EDUCATION.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      {EDUCATION.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">B.Eng</div>
                  <div className="text-sm text-slate-600">Software Engineering</div>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">4 Years</div>
                  <div className="text-sm text-slate-600">Program Duration</div>
                </div>
                <div className="text-center p-4 glass rounded-xl">
                  <div className="text-2xl font-bold gradient-text">2026</div>
                  <div className="text-sm text-slate-600">Expected Graduation</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Exchange Program */}
          {EDUCATION.exchange && (
            <motion.div 
              className="enhanced-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900">Exchange Program</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      International Experience
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-600 font-semibold mb-3">
                    <BuildingLibraryIcon className="w-4 h-4" />
                    {EDUCATION.exchange.institution}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">GPA:</span>
                      <span className="font-bold text-green-600">{EDUCATION.exchange.gpa}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <MapPinIcon className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 rounded-2xl max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Academic Focus
            </h3>
            <p className="text-slate-600 text-sm">
              Specializing in AI/ML, full-stack development, and software architecture with hands-on industry experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 