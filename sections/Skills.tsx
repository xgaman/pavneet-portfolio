
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Programming', 'Tools'];

  return (
    <section className="py-12">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-orbitron font-bold text-white">
          Technical <span className="text-purple-500">Arsenal</span>
        </h2>
        <p className="text-gray-400">A comprehensive map of my technical proficiencies and creative tools.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-orbitron font-bold text-cyan-400 border-b border-cyan-500/20 pb-2 mb-8">
              {category}
            </h3>
            <div className="space-y-8">
              {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${category === 'Programming' ? 'bg-purple-500' : 'bg-cyan-500'} shadow-[0_0_8px_rgba(0,251,255,0.4)]`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Badges */}
      <div className="mt-24 flex flex-wrap justify-center gap-4">
        {['Problem Solving', 'Team Player', 'Quick Learner', 'Critical Thinking', 'UI/UX Design'].map((soft) => (
          <span key={soft} className="px-6 py-3 glass rounded-full text-sm font-orbitron text-gray-300 hover:text-cyan-400 transition-colors border-gray-700 hover:border-cyan-500/50">
            {soft}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
