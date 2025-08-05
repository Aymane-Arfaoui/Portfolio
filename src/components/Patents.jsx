import React from 'react';
import { PATENTS_AND_RESEARCH } from '../constants';
import { motion } from 'framer-motion';
import { LightBulbIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Patents = () => {
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

  const getIcon = (index) => {
    const icons = [LightBulbIcon, DocumentTextIcon, ChartBarIcon, SparklesIcon];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6" />;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="patents">
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
            Patents & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cutting-edge innovations in machine learning, aerospace engineering, and computer vision
          </p>
        </motion.div>

        {/* Patents Grid */}
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PATENTS_AND_RESEARCH.map((patent, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="enhanced-card p-8 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    {getIcon(index)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-semibold">
                        {patent.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Impact Badge */}
                {patent.impact && (
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                    {patent.impact}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {patent.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {patent.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <DocumentTextIcon className="w-4 h-4" />
                  Patent Application
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <SparklesIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">Innovation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 glass p-8 rounded-3xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-slate-600">Patents Pending</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">$3M+</div>
              <div className="text-slate-600">Annual Savings Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">20%</div>
              <div className="text-slate-600">Accuracy Improvement</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-slate-600 text-sm">
              Advancing the fields of aerospace engineering, machine learning, and computer vision through innovative research
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Patents; 