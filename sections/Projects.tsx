
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-2xl overflow-hidden border-gray-800 hover:border-cyan-500/50 transition-all duration-500"
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3">
            <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-orbitron text-cyan-500 border border-cyan-500/20 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-orbitron font-bold text-white">
            Selected <span className="text-cyan-400">Creations</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A gallery of digital experiments, engineering projects, and experimental UI designs.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 font-orbitron">
          <Layers size={16} />
          <span>{PROJECTS.length} PROJECTS COMPLETED</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-500 italic mb-6">More technical experiments are arriving soon...</p>
        <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      </div>
    </section>
  );
};

export default Projects;
