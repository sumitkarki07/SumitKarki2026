import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { personalInfo, projects } from '../data/portfolioData';
import { scrollToSection } from '../utils/scroll';

const featured = projects[0];

const highlights = [
  {
    id: 'role',
    label: 'Current role',
    value: 'Web Developer, uwgb.edu',
    detail: 'Student Web Developer at UWGB DoIT since April 2026. Production work on uwgb.edu, accessibility, and structured debugging across authentication and APIs.',
  },
  {
    id: 'research',
    label: 'Research',
    value: 'IEEE EPS · HVAC digital twin',
    detail: 'Built a data-driven digital twin for Brown County HVAC systems using Honeywell telemetry and Random Forest models.',
  },
  {
    id: 'gpa',
    label: 'GPA',
    value: '3.82 / 4.00',
    detail: 'B.S. Software Engineering, expected May 2028. Dean’s List for three semesters, Phoenix Scholar, and AITP award.',
  },
  {
    id: 'community',
    label: 'Community',
    value: 'VP, GDG on Campus',
    detail: 'Co-founded the campus Google Developer Groups chapter, grew membership past 100, and leads technical planning for HackGB.',
  },
];

const Hero = () => {
  const [openFeatured, setOpenFeatured] = useState(false);
  const [openHighlight, setOpenHighlight] = useState(null);

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-12 sm:min-h-[90vh] sm:pt-28 sm:pb-24">
      <div className="absolute -left-24 top-32 hidden h-72 w-72 rounded-full bg-peach/70 blur-3xl sm:block" />
      <div className="absolute -right-16 bottom-20 hidden h-80 w-80 rounded-full bg-mist/80 blur-3xl sm:block" />
      <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-gold/20 blur-3xl sm:h-56 sm:w-56" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 px-4 pt-6 sm:gap-12 sm:px-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <header>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-coral/30 bg-cream/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-coral sm:mb-6 sm:text-xs sm:tracking-[0.18em]"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-coral" />
            Open to internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.65rem] font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            <span className="sr-only">Sumit Karki, also known as Sumit Karki SK, UW–Green Bay student in Green Bay, Wisconsin. </span>
            Sumit
            <br />
            <span className="scribble-underline text-coral">Karki</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-4 text-base text-ink-soft sm:mt-6 sm:text-xl"
          >
            {personalInfo.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:mt-5 sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full rounded-full bg-coral px-6 py-3.5 font-semibold text-cream shadow-[0_14px_30px_rgba(228,90,60,0.35)] transition hover:-translate-y-0.5 hover:bg-coral-deep sm:w-auto sm:px-7"
            >
              Get in touch
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('#projects')}
              className="w-full rounded-full border-2 border-ink/15 bg-cream px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-teal hover:text-teal sm:w-auto sm:px-7"
            >
              View selected work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.88 }}
            className="mt-6 flex gap-3 sm:mt-10 sm:gap-4"
          >
            {[
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
              { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FaPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'me noopener noreferrer' : undefined}
                aria-label={`${label} — Sumit Karki`}
                className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-cream text-ink-soft transition hover:-translate-y-1 hover:border-coral hover:text-coral"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </header>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid gap-4"
        >
          <article className="overflow-hidden rounded-3xl border border-ink/8 bg-cream shadow-[0_18px_40px_rgba(27,61,58,0.08)]">
            <button
              type="button"
              onClick={() => setOpenFeatured((open) => !open)}
              aria-expanded={openFeatured}
              className="w-full p-5 text-left sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral">
                  Featured research
                </p>
                <FaChevronDown
                  className={`mt-0.5 shrink-0 text-coral transition-transform duration-300 ${
                    openFeatured ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <h2 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {featured.venue} · Mask R-CNN instance segmentation on field roadway imagery.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-teal">
                  87.04% F1
                </span>
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-teal">
                  90.04% recall
                </span>
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-teal">
                  1,540 images
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                {openFeatured ? 'Hide findings' : 'Open findings'}
              </p>
            </button>

            <AnimatePresence initial={false}>
              {openFeatured && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-ink/8 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-ink-soft">{featured.method}</p>
                    <p className="mt-3 text-sm text-ink">
                      <span className="font-semibold">Dataset.</span> {featured.dataset}
                    </p>
                    <p className="mt-1.5 text-sm text-ink">
                      <span className="font-semibold">Authors.</span> {featured.authors}
                    </p>

                    <div className="mt-5 space-y-3">
                      {featured.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="mb-1 flex justify-between text-xs font-semibold">
                            <span>{metric.label}</span>
                            <span className="text-teal">{metric.value}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-sand">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-coral to-teal"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {featured.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream transition hover:bg-coral"
                        >
                          {link.label} <FaArrowRight size={11} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>

          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item) => {
              const expanded = openHighlight === item.id;
              return (
                <div
                  key={item.id}
                  className={`col-span-2 rounded-2xl border border-ink/8 bg-cream/90 sm:col-span-1 ${
                    expanded ? 'sm:col-span-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenHighlight(expanded ? null : item.id)}
                    className="w-full p-3.5 text-left sm:p-4"
                  >
                    <p className="flex items-center justify-between gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                      {item.label}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                      />
                    </p>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">{item.value}</p>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-3.5 pb-3.5 text-sm leading-relaxed text-ink-soft sm:px-4 sm:pb-4"
                      >
                        {item.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
