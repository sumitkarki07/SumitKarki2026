import { motion } from 'framer-motion';
import { leadership } from '../data/portfolioData';
import { useAdmin } from '../data/AdminContext';

const Leadership = () => {
  // Use admin context data if available, otherwise use default
  const { portfolioData } = useAdmin();
  const leadershipData = portfolioData?.leadership || leadership;
  const colorMap = {
    cyan: {
      text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      dot: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      glow: 'shadow-cyan-500/50'
    },
    purple: {
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
      dot: 'bg-gradient-to-br from-purple-500 to-pink-500',
      border: 'border-purple-500/20 hover:border-purple-500/50',
      glow: 'shadow-purple-500/50'
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
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leading tech communities and driving innovation through collaboration
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-cyan-500/50 transform -translate-x-1/2" />

            {leadershipData.map((item, index) => {
              const colors = colorMap[item.color] || colorMap.cyan;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start mb-16"
                >
                  {isLeft ? (
                    <>
                      {/* Left Content */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-[calc(50%-40px)] pr-8 text-right"
                      >
                        <div className={`bg-slate-800/80 backdrop-blur rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:${colors.glow}`}>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className={`${colors.text} font-semibold mb-3`}>{item.organization}</p>
                          <div className="text-gray-400 text-sm mb-4">{item.duration}</div>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-start justify-end gap-2 text-gray-300 text-sm"
                              >
                                <span>{achievement}</span>
                                <span className={`${colors.text} flex-shrink-0`}>←</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Center Dot */}
                      <div className="w-20 flex justify-center flex-shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          className={`w-16 h-16 ${colors.dot} rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg ${colors.glow} cursor-pointer z-10 relative`}
                        >
                          <span className="text-white text-xl font-bold">{index + 1}</span>
                        </motion.div>
                      </div>

                      {/* Empty Right Space */}
                      <div className="w-[calc(50%-40px)]" />
                    </>
                  ) : (
                    <>
                      {/* Empty Left Space */}
                      <div className="w-[calc(50%-40px)]" />

                      {/* Center Dot */}
                      <div className="w-20 flex justify-center flex-shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          className={`w-16 h-16 ${colors.dot} rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg ${colors.glow} cursor-pointer z-10 relative`}
                        >
                          <span className="text-white text-xl font-bold">{index + 1}</span>
                        </motion.div>
                      </div>

                      {/* Right Content */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-[calc(50%-40px)] pl-8"
                      >
                        <div className={`bg-slate-800/80 backdrop-blur rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:${colors.glow}`}>
                          <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                          <p className={`${colors.text} font-semibold mb-3`}>{item.organization}</p>
                          <div className="text-gray-400 text-sm mb-4">{item.duration}</div>
                          <div className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-start gap-2 text-gray-300 text-sm"
                              >
                                <span className={`${colors.text} flex-shrink-0`}>→</span>
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {leadershipData.map((item, index) => {
              const colors = colorMap[item.color] || colorMap.cyan;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-slate-800/80 backdrop-blur rounded-xl border ${colors.border} p-6`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.dot} rounded-full flex items-center justify-center shadow-lg border-2 border-slate-900`}>
                      <span className="text-white text-lg font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className={`${colors.text} font-semibold text-sm mb-2`}>{item.organization}</p>
                      <div className="text-gray-400 text-xs">{item.duration}</div>
                    </div>
                  </div>
                  <div className="space-y-2 pl-16">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className={`${colors.text} flex-shrink-0`}>▸</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
