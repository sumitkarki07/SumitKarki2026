import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaTools, FaDatabase, FaBrain } from 'react-icons/fa';
import { skills } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const iconMap = {
  FaCode,
  FaLayerGroup,
  FaTools,
  FaDatabase,
  FaBrain,
};

const Skills = () => (
  <section id="skills" className="relative py-14 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle eyebrow="Technical skills" title="Skills & technologies" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([key, category], index) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
              className="rounded-3xl border border-ink/8 bg-cream p-4 shadow-sm sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mist text-teal">
                  {Icon && <Icon />}
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.86 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + skillIndex * 0.03 }}
                    className="rounded-full bg-sand px-3 py-1 text-sm font-medium text-ink transition hover:bg-coral hover:text-cream"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
