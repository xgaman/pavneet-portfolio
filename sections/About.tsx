
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-orbitron font-bold text-white">
              The <span className="text-cyan-400">Persona</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full shadow-[0_0_10px_rgba(0,251,255,0.5)]" />
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am Pavneet Kour, a dedicated Computer Engineering diploma holder. As a fresher, I bring a fresh perspective and an insatiable curiosity for how technology can bridge the gap between imagination and reality. My journey in tech started with curious dismantling of gadgets and evolved into building sophisticated digital ecosystems.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-4 rounded-xl border-cyan-500/10">
              <MapPin className="text-cyan-400 mb-2" size={24} />
              <h4 className="text-white font-semibold">Location</h4>
              <p className="text-gray-400 text-sm">Available for Remote / Relocation</p>
            </div>
            <div className="glass p-4 rounded-xl border-purple-500/10">
              <Calendar className="text-purple-400 mb-2" size={24} />
              <h4 className="text-white font-semibold">Status</h4>
              <p className="text-gray-400 text-sm">Seeking Entry-level Roles</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-orbitron font-bold text-white flex items-center gap-3">
            <GraduationCap className="text-cyan-400" />
            Education Timeline
          </h3>

          <div className="space-y-6">
            <div className="relative pl-8 border-l border-gray-800">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,251,255,0.8)]" />
              <div className="space-y-1">
                <span className="text-cyan-400 text-sm font-orbitron">2021 - 2024</span>
                <h4 className="text-xl font-bold text-white">Diploma in Computer Engineering</h4>
                <p className="text-gray-400">Polytechnic Institute</p>
                <p className="text-gray-500 text-sm mt-2">Focused on Data Structures, Web Technologies, Operating Systems, and Embedded Systems. Graduated with honors.</p>
              </div>
            </div>

            <div className="relative pl-8 border-l border-gray-800">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-500" />
              <div className="space-y-1">
                <span className="text-purple-400 text-sm font-orbitron">Ongoing</span>
                <h4 className="text-xl font-bold text-white">Continuous Learning</h4>
                <p className="text-gray-400">Self-driven Certifications</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 glass rounded text-[10px] text-cyan-300 border-cyan-500/20">THREE.JS JOURNEY</span>
                  <span className="px-2 py-1 glass rounded text-[10px] text-purple-300 border-purple-500/20">AWS CLOUD PRACTITIONER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
