import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ borderColor: 'rgba(6, 182, 212, 0.5)', boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' }}
              className="bg-slate-800/80 backdrop-blur border border-cyan-500/20 p-8 rounded-xl transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 font-medium text-sm md:text-base mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="text-gray-300 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0 text-lg">✦</span>
                    <span dangerouslySetInnerHTML={{ __html: achievement.replace(/(\d+%)/g, '<strong>$1</strong>') }} />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
