import React from 'react';
import { CONTACT } from "../constants";
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 section-gradient" id="contact">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or innovative projects
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="enhanced-card p-8 text-center">
            {/* Location */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPinIcon className="w-5 h-5 text-blue-600" />
                <span className="text-slate-600 font-medium">Currently in</span>
              </div>
              <p className="text-xl text-slate-900 font-semibold">{CONTACT.currentCity}</p>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center justify-center gap-3">
                <PhoneIcon className="w-5 h-5 text-green-600" />
                <a 
                  href={`tel:${CONTACT.phoneNo}`}
                  className="text-slate-700 hover:text-green-600 transition-colors font-medium"
                >
                  {CONTACT.phoneNo}
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-blue-600" />
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <motion.a 
                href={CONTACT.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">LinkedIn</span>
              </motion.a>
              
              <motion.a 
                href={CONTACT.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub className="w-5 h-5 text-slate-700" />
                <span className="text-slate-700 font-medium">GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-slate-600">
            Available for internships, full-time opportunities, and exciting projects
          </p>
          <p className="text-sm text-slate-500 mt-4">
            © 2025 Aymane Arfaoui. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
