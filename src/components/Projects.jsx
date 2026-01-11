import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const badgeColorMap = {
    yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  const accentColorMap = {
    cyan: {
      border: 'border-cyan-500/50',
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      shadow: 'rgba(6, 182, 212, 0.4)'
    },
    blue: {
      border: 'border-blue-500/50',
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      shadow: 'rgba(14, 165, 233, 0.4)'
    },
    purple: {
      border: 'border-purple-500/50',
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      shadow: 'rgba(139, 92, 246, 0.4)'
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const accent = accentColorMap[project.accentColor] || accentColorMap.cyan;
            const badgeColor = badgeColorMap[project.badgeColor] || badgeColorMap.yellow;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: `0 20px 40px ${accent.shadow}`,
                }}
                className={`bg-slate-800/80 backdrop-blur p-6 rounded-xl border ${accent.border} hover:border-opacity-100 transition-all duration-300 flex flex-col h-full`}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <span className={`${accent.text} mr-2`}>✦</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs ${accent.bg} ${accent.text} rounded-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center gap-2 ${accent.text} hover:opacity-80 transition-opacity`}
                  >
                    <FaGithub size={20} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center gap-2 ${accent.text} hover:opacity-80 transition-opacity`}
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
