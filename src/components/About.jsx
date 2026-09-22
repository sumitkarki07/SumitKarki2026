import { motion } from 'framer-motion';
import { about, personalInfo, education } from '../data/portfolioData';
import SectionTitle from './SectionTitle';
import CountUp from './CountUp';

const About = () => (
  <section id="about" className="relative py-14 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="Overview"
        title="About Sumit Karki"
        subtitle="UW–Green Bay software engineering student in Green Bay, Wisconsin — also known as Sumit Karki SK."
      />

      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-md"
        >
          <div className="absolute -inset-2 rotate-2 rounded-[2rem] bg-gradient-to-br from-coral/40 to-teal/40 sm:-inset-3 sm:rotate-3" />
          <figure className="relative overflow-hidden rounded-[1.7rem] bg-ink shadow-[0_22px_50px_rgba(27,61,58,0.18)]">
            <img
              src={personalInfo.aboutImage}
              alt="Sumit Karki (SK), University of Wisconsin–Green Bay student, at the Google Developer Groups North America Summit on May 21, 2026"
              title="Sumit Karki at the GDG North America Summit, May 2026"
              width="768"
              height="1024"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover object-[52%_86%]"
            />
            <figcaption className="sr-only">
              Photo of Sumit Karki, a UWGB student from Green Bay, Wisconsin, standing at the GDG North America Summit sign on May 21, 2026.
            </figcaption>
          </figure>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-[15px] leading-relaxed text-ink-soft sm:mb-5 sm:text-lg"
              dangerouslySetInnerHTML={{
                __html: paragraph.replace(/<strong>/g, '<strong class="text-ink font-semibold">'),
              }}
            />
          ))}

          <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
            {about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-ink/8 bg-cream p-2.5 text-center shadow-sm sm:p-4"
              >
                <div className="font-display text-xl font-extrabold text-coral sm:text-3xl">
                  {typeof stat.value === 'number' ? (
                    <CountUp
                      end={stat.value}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ''}
                    />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-wider text-ink-soft sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-teal/20 bg-mist/40 p-4 sm:mt-8 sm:p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">Education</p>
            <p className="mt-2 font-display text-lg font-bold text-ink sm:text-xl">{education.degree}</p>
            <p className="text-ink-soft">
              {education.school} · {education.graduation}
            </p>
            <p className="mt-1 text-sm font-semibold text-coral">GPA {education.gpa}</p>
            <p className="mt-2 text-sm text-ink-soft">{education.achievements.join(' · ')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
