import { motion } from 'framer-motion';
import { leadership } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Leadership = () => (
  <section id="leadership" className="relative py-14 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle
        eyebrow="Campus & community"
        title="Leadership"
        subtitle="UW–Green Bay student government, GDG on Campus, and technical events in Green Bay."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-coral via-gold to-teal md:left-1/2" />

        <div className="space-y-6 sm:space-y-10">
          {leadership.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30, x: isLeft ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className={`relative md:w-[calc(50%-28px)] ${
                  isLeft ? 'md:mr-auto md:pr-2' : 'md:ml-auto md:pl-2'
                }`}
              >
                <span className="absolute left-4 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-cream bg-coral shadow-[0_0_0_6px_rgba(228,90,60,0.16)] md:left-auto md:right-[-35px] md:translate-x-1/2" />
                <div className="ml-10 rounded-3xl border border-ink/8 bg-cream p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6 md:ml-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink sm:text-2xl">{item.title}</h3>
                  <p className="font-semibold text-teal">{item.organization}</p>
                  <ul className="mt-4 space-y-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm leading-relaxed text-ink-soft">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Leadership;
