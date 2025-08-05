import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { SiAppstore } from 'react-icons/si';

function Projects() {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const FeaturedProjectCard = ({ project, index }) => (
    <motion.div 
      variants={cardVariants}
      className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover"
    >
      {/* Featured Badge */}
      <div className="absolute top-6 left-6 z-10">
        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          <StarIcon className="w-4 h-4" />
          Featured
        </div>
      </div>

      {/* Project Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-700" />
            </a>
          )}
          {project.appStore && (
            <a 
              href={project.appStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <SiAppstore className="w-5 h-5 text-slate-700" />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 text-slate-700" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
            <p className="text-blue-600 font-medium">{project.type}</p>
          </div>
          {project.metrics && (
            <div className="text-right">
              <div className="text-sm text-slate-500">Impact</div>
              <div className="font-bold text-green-600">{project.metrics}</div>
            </div>
          )}
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Live Site
            </a>
          )}
          {project.appStore && (
            <a 
              href={project.appStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-700 to-black text-white py-3 px-6 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <SiAppstore className="w-5 h-5" />
              App Store
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  const RegularProjectCard = ({ project }) => (
    <motion.div 
      variants={cardVariants}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden smooth-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.award && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            {project.award}
          </div>
        )}
        {project.metrics && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
            {project.metrics}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h4 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h4>
          <p className="text-blue-600 text-sm font-medium">{project.type}</p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Project Links */}
        <div className="flex gap-2">
          {project.appStore && (
            <a 
              href={project.appStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              <SiAppstore className="w-3 h-3" />
              App Store
            </a>
          )}
          {project.website && (
            <a 
              href={project.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
              Live
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1 bg-slate-500 text-white rounded-lg text-xs font-medium hover:bg-slate-600 transition-colors"
            >
              <CodeBracketIcon className="w-3 h-3" />
              Code
            </a>
          )}
        </div>

        {project.duration && (
          <p className="text-xs text-slate-500 mt-3">{project.duration}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 section-gradient" id="projects">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing innovative applications that demonstrate my expertise in AI, full-stack development, and user experience design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Other Notable Projects</h3>
              <p className="text-slate-600">Additional work showcasing diverse technical skills</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherProjects.map((project, index) => (
                <RegularProjectCard key={index} project={project} />
              ))}
            </motion.div>
          </>
        )}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-6">Interested in collaborating or learning more about my work?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
