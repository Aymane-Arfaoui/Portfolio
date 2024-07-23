import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTensorflow, SiPython, SiC, SiAmazonaws, SiMicrosoftazure, SiLinear } from 'react-icons/si';
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
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>


        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>

        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiC className="text-7xl text-gray-700" />
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAmazonaws className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftazure className="text-7xl text-blue-600" />
        </motion.div>

      </div>
    </div>
  );
}

export default Technologies;
