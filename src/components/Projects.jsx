import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaChevronDown } from 'react-icons/fa';
import { projects } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const linkIcon = (label) => {
  const lower = label.toLowerCase();
  if (lower.includes('code')) return FaGithub;
  if (lower.includes('paper') || lower.includes('pdf')) return FaFileAlt;
  return FaExternalLinkAlt;
};

const Projects = () => {
  const [openId, setOpenId] = useState(projects[0].title);

  return (
    <section id="projects" className="relative bg-sand/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Selected work"
          title="Research & projects"
          subtitle="Published computer-vision research, production web work, and selected open-source repositories. Open a card for methods, results, and links."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const featured = Boolean(project.featured);
            const open = openId === project.title;
            return (
              <motion.article
                key={project.title}
                id={featured ? 'research' : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`flex flex-col rounded-3xl border bg-cream shadow-[0_18px_40px_rgba(27,61,58,0.07)] ${
                  featured ? 'border-coral/25 lg:col-span-12' : 'border-ink/8 lg:col-span-6'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : project.title)}
                  className="flex w-full flex-col p-5 text-left sm:p-7"
                >
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{project.title}</h3>
                    <span className="inline-flex items-center gap-2">
                      <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
                        {project.badge}
                      </span>
                      <FaChevronDown
                        className={`text-ink-soft transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </span>
                  </div>
                  <p className="text-ink-soft">{project.description}</p>
                  {project.images?.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {project.images.map((image, imageIndex) => (
                        <img
                          key={image.src}
                          src={image.src}
                          alt={image.alt}
                          className={`h-36 w-full rounded-2xl object-cover sm:h-44 ${
                            imageIndex === 0 ? 'object-[78%_center]' : 'object-[center_40%]'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-coral">
                    {open ? 'Hide details' : 'Show details'}
                  </p>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-7 sm:pb-7">
                        {project.method && (
                          <p className="mb-4 text-sm leading-relaxed text-ink">
                            <span className="font-semibold">Method.</span> {project.method}
                          </p>
                        )}
                        <ul className={`mb-5 space-y-2 ${featured ? 'md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0 md:gap-y-2' : ''}`}>
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-sm text-ink">
                              <span className="mt-1 text-teal">▹</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        {project.metrics && (
                          <div className="mb-5 space-y-3">
                            {project.metrics.map((metric) => (
                              <div key={metric.label}>
                                <div className="mb-1 flex justify-between text-xs font-semibold">
                                  <span>{metric.label}</span>
                                  <span className="text-teal">{metric.value}%</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-sand">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${metric.value}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.85 }}
                                    className="h-full rounded-full bg-gradient-to-r from-coral to-teal"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-teal"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 border-t border-ink/8 pt-4">
                          {project.links.map((link) => {
                            const Icon = linkIcon(link.label);
                            return (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-coral"
                              >
                                <Icon size={14} /> {link.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
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

export default Projects;
