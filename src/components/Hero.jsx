import React, { useState, useEffect, useRef } from 'react';
import { HERO_CONTENT, ACHIEVEMENTS } from "../constants";
import profilePic from "../assets/aymanepicture.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Software Engineer & AI Innovator";
  const containerRef = useRef(null);

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Particle component
  const Particle = ({ delay = 0, duration = 4, size = 4, color = "bg-blue-500" }) => (
    <motion.div
      className={`absolute ${color} rounded-full opacity-20`}
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-20, -100, -20],
        x: [-10, 10, -10],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  // Geometric shape component
  const GeometricShape = ({ shape, delay = 0, color = "border-blue-500" }) => {
    const shapes = {
      triangle: "w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent",
      circle: "w-8 h-8 rounded-full border-2",
      square: "w-6 h-6 border-2 rotate-45",
      diamond: "w-4 h-4 border-2 rotate-45"
    };

    return (
      <motion.div
        className={`absolute ${shapes[shape]} ${color} opacity-30`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: delay,
          ease: "linear"
        }}
      />
    );
  };

  // Interactive floating element
  const InteractiveElement = ({ children, index }) => {
    const x = useTransform(springX, [0, 1000], [0, index % 2 === 0 ? 20 : -20]);
    const y = useTransform(springY, [0, 800], [0, index % 2 === 0 ? -15 : 15]);

    return (
      <motion.div
        style={{ x, y }}
        className="absolute"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-gradient" 
      id="about"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particle System */}
        {[...Array(25)].map((_, i) => (
          <Particle 
            key={`particle-${i}`}
            delay={i * 0.2}
            duration={4 + Math.random() * 3}
            size={2 + Math.random() * 6}
            color={['bg-blue-500', 'bg-purple-500', 'bg-cyan-500', 'bg-pink-500'][Math.floor(Math.random() * 4)]}
          />
        ))}

        {/* Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <GeometricShape
            key={`shape-${i}`}
            shape={['triangle', 'circle', 'square', 'diamond'][Math.floor(Math.random() * 4)]}
            delay={i * 0.5}
            color={['border-blue-500', 'border-purple-500', 'border-cyan-500'][Math.floor(Math.random() * 3)]}
          />
        ))}

        {/* Large Animated Blobs */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
          animate={{ 
            x: [0, 60, 0], 
            y: [0, -40, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Interactive Floating Code Elements */}
        <InteractiveElement index={0}>
          <div className="top-32 left-20 text-blue-500/30 font-mono text-sm">
            &lt;AI&gt;
          </div>
        </InteractiveElement>

                          <InteractiveElement index={1}>
           <div className="top-48 right-32 text-purple-500/30 font-mono text-sm">
             {"ML"}
           </div>
         </InteractiveElement>

        <InteractiveElement index={2}>
          <div className="bottom-40 left-32 text-cyan-500/30 font-mono text-sm">
            console.log("innovation");
          </div>
        </InteractiveElement>

        <InteractiveElement index={3}>
          <div className="bottom-32 right-40 text-pink-500/30 font-mono text-sm">
            {"function() { build(); }"}
          </div>
        </InteractiveElement>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-slate-600">Available for opportunities</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SparklesIcon className="w-4 h-4 text-yellow-500" />
                </motion.div>
              </div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-slate-900 mb-4 leading-tight"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="gradient-text"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Aymane
                </motion.span>
              </motion.h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <motion.h2 
                  className="text-2xl lg:text-3xl text-slate-700 font-medium"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {typedText}
                  <motion.span 
                    className="text-blue-600"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.h2>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Achievement Stats with enhanced animations */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    y: { duration: 2 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="text-2xl lg:text-3xl font-bold gradient-text"
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-sm text-slate-600 font-medium">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <motion.button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.6)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="flex items-center gap-2 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 0.3 }}
                    className="group-hover:rotate-12"
                  >
                    <RocketLaunchIcon className="w-5 h-5" />
                  </motion.div>
                  View My Work
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Tech Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <span className="text-sm text-slate-500">Built with:</span>
              <div className="flex gap-3">
                {[
                  { icon: CodeBracketIcon, color: "text-blue-600" },
                  { icon: CpuChipIcon, color: "text-purple-600" },
                  { icon: RocketLaunchIcon, color: "text-cyan-600" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={floatVariants} 
                    animate="animate" 
                    className="p-2 glass rounded-lg cursor-pointer"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-2/5 flex justify-center relative"
          >
            <div className="relative">
              {/* Enhanced Glowing background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image container with enhanced effects */}
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass p-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
                animate={{
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.1)",
                    "0 20px 40px rgba(59, 130, 246, 0.2)",
                    "0 10px 30px rgba(0,0,0,0.1)"
                  ]
                }}
              >
                <img 
                  src={profilePic} 
                  alt="Aymane Arfaoui" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* Enhanced Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 10px 20px rgba(59, 130, 246, 0.3)",
                    "0 15px 30px rgba(59, 130, 246, 0.5)",
                    "0 10px 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                ML
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xl"
                animate={{ 
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 10px 20px rgba(139, 92, 246, 0.3)",
                    "0 15px 30px rgba(139, 92, 246, 0.5)",
                    "0 10px 20px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  scale: { duration: 1.5, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                AI
              </motion.div>

              {/* Additional floating tech badges */}
              <motion.div 
                className="absolute top-16 -left-8 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
                animate={{ 
                  rotate: [0, -10, 10, 0],
                  x: [-5, 5, -5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                JS
              </motion.div>

              <motion.div 
                className="absolute bottom-16 -right-8 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  x: [5, -5, 5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                PY
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;