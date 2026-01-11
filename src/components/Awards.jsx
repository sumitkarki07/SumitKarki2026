import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaRocket, FaMedal, FaPalette, FaHandshake } from 'react-icons/fa';
import { awards } from '../data/portfolioData';

const iconMap = {
  FaTrophy: FaTrophy,
  FaStar: FaStar,
  FaRocket: FaRocket,
  FaMedal: FaMedal,
  FaPalette: FaPalette,
  FaHandshake: FaHandshake
};

const colorClasses = {
  yellow: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', shadow: 'rgba(234, 179, 8, 0.4)' },
  blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', shadow: 'rgba(14, 165, 233, 0.4)' },
  purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', shadow: 'rgba(139, 92, 246, 0.4)' },
  green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', shadow: 'rgba(34, 197, 94, 0.4)' },
  orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', shadow: 'rgba(249, 115, 22, 0.4)' },
  cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', shadow: 'rgba(6, 182, 212, 0.4)' },
};

const Awards = () => {
  return (
    <section id="awards" className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Honors & Awards</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = iconMap[award.icon];
            const colors = colorClasses[award.color] || colorClasses.yellow;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: `0 20px 40px ${colors.shadow}`,
                }}
                className={`bg-slate-800/80 backdrop-blur p-6 rounded-xl border ${colors.border} transition-all duration-300 text-center`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {Icon && <Icon className={`${colors.text} text-2xl`} />}
                </motion.div>

                {/* Title */}
                <h3 className={`text-lg font-bold ${colors.text} mb-2`}>{award.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm">{award.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
