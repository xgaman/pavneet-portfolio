
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Code, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-8"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-cyan-500 shadow-[0_0_8px_rgba(0,251,255,0.8)]" />
          <span className="text-cyan-400 font-orbitron tracking-[0.3em] text-sm font-bold uppercase">
            Computer Engineer Fresher
          </span>
          <span className="h-px w-8 bg-cyan-500 shadow-[0_0_8px_rgba(0,251,255,0.8)]" />
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl font-orbitron font-black tracking-tight"
        >
          <span className="text-white">PAVNEET</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 neon-text-purple">
            KOUR
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable software and futuristic interfaces. Diploma in Computer Engineering graduate with a passion for high-performance computing and immersive web experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-6 pt-4">
          <Link to="/projects">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,251,255,0.4)] flex items-center gap-2 group">
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-8 py-4 glass text-white font-bold rounded-lg transition-all duration-300 border-gray-700 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-8 text-gray-500 pt-12"
        >
          <div className="flex items-center gap-2">
            <Code size={18} className="text-cyan-500" />
            <span className="text-xs font-orbitron">FULL-STACK</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-purple-500" />
            <span className="text-xs font-orbitron">COMP ENG</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-orbitron">AVAILABLE FOR HIRE</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
