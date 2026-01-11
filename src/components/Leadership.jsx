import { motion } from 'framer-motion';
import { leadership } from '../data/portfolioData';

const Leadership = () => {
  const colorMap = {
    cyan: {
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      line: 'from-cyan-500/50 to-transparent'
    },
    purple: {
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      line: 'from-purple-500/50 to-transparent'
    }
  };

  return (
    <section id="leadership" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership & Activities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {leadership.map((item, index) => {
            const colors = colorMap[item.color] || colorMap.cyan;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="timeline-item mb-12 relative"
              >
                <div className="grid md:grid-cols-[1fr_100px_1fr] gap-8 items-start">
                  {/* Left Content (Desktop) */}
                  <div className={`${isEven ? 'md:text-right' : 'hidden md:block'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className={`${colors.text} font-semibold mb-3`}>{item.organization}</p>
                        <div className="text-gray-400 text-sm mb-4">{item.duration}</div>
                        <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              className="flex items-start md:flex-row-reverse gap-2"
                            >
                              <span className={`${colors.text} flex-shrink-0 text-lg`}>→</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline Dot & Line (Desktop only) */}
                  <div className="flex flex-col items-center hidden md:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className={`w-5 h-5 bg-gradient-to-r ${colors.gradient} rounded-full shadow-glow mb-4 border-4 border-slate-800 timeline-dot cursor-pointer`}
                    />
                    {index < leadership.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={`w-1 h-32 bg-gradient-to-b ${colors.line} origin-top`}
                      />
                    )}
                  </div>

                  {/* Right Content (Desktop) */}
                  <div className={`${!isEven ? '' : 'hidden md:block'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className={`${colors.text} font-semibold mb-3`}>{item.organization}</p>
                        <div className="text-gray-400 text-sm mb-4">{item.duration}</div>
                        <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className={`${colors.text} flex-shrink-0 text-lg`}>→</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/50 p-6 rounded-xl border border-cyan-500/20"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className={`${colors.text} font-semibold mb-3`}>{item.organization}</p>
                    <div className="text-gray-400 text-sm mb-4">{item.duration}</div>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`${colors.text} text-lg`}>→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
