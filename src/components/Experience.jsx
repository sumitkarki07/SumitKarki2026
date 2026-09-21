import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { experience } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const [openTitle, setOpenTitle] = useState(experience[0].title);

  return (
    <section id="experience" className="relative bg-sand/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Professional experience"
          title="Experience"
          subtitle="Open a role for the full scope of work."
        />

        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {experience.map((exp, index) => {
            const open = openTitle === exp.title;
            return (
              <motion.article
                key={exp.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative overflow-hidden rounded-3xl border border-ink/8 bg-cream shadow-[0_20px_50px_rgba(27,61,58,0.08)]"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-coral to-teal" />
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenTitle(open ? null : exp.title)}
                  className="flex w-full flex-col gap-2 p-5 text-left sm:p-7 md:flex-row md:items-start md:justify-between"
                >
                  <div className="pr-8">
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{exp.title}</h3>
                    <p className="font-semibold text-teal">{exp.company}</p>
                    <p className="mt-1 text-sm text-ink-soft">{exp.summary}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-peach px-3 py-1 text-sm font-medium text-ink">
                    <time>{exp.duration}</time>
                    <FaChevronDown className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="space-y-3 overflow-hidden px-5 pb-5 sm:px-7 sm:pb-7"
                    >
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-ink-soft">
                          <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-coral" />
                          <span
                            dangerouslySetInnerHTML={{
                              __html: achievement.replace(
                                /(\d+%)/g,
                                '<strong class="text-ink">$1</strong>'
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
