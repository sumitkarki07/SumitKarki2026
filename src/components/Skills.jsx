import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaTools, FaDatabase, FaBrain } from 'react-icons/fa';
import { skills } from '../data/portfolioData';

const iconMap = {
  FaCode: FaCode,
  FaLayerGroup: FaLayerGroup,
  FaTools: FaTools,
  FaDatabase: FaDatabase,
  FaBrain: FaBrain
};

const colorClasses = {
  cyan: { border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10', hover: 'hover:border-cyan-500/60' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10', hover: 'hover:border-purple-500/60' },
  pink: { border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/10', hover: 'hover:border-pink-500/60' },
  orange: { border: 'border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-500/10', hover: 'hover:border-orange-500/60' },
  green: { border: 'border-green-500/30', text: 'text-green-400', bg: 'bg-green-500/10', hover: 'hover:border-green-500/60' },
};

const tagColors = {
  blue: 'bg-blue-500/20 text-blue-400',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  gray: 'bg-gray-500/20 text-gray-400',
  orange: 'bg-orange-500/20 text-orange-400',
  cyan: 'bg-cyan-500/20 text-cyan-400',
  green: 'bg-green-500/20 text-green-400',
  indigo: 'bg-indigo-500/20 text-indigo-400',
  red: 'bg-red-500/20 text-red-400',
  purple: 'bg-purple-500/20 text-purple-400',
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = iconMap[category.icon];
            const colors = colorClasses[category.color] || colorClasses.cyan;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className={`bg-slate-800/80 backdrop-blur p-6 rounded-xl border ${colors.border} ${colors.hover} transition-all duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {Icon && <Icon className={`${colors.text} text-2xl`} />}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 text-sm rounded-full ${tagColors[skill.color] || tagColors.cyan} cursor-default transition-transform`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
