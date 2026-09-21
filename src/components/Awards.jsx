import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaRocket, FaMedal, FaHandshake, FaBookOpen } from 'react-icons/fa';
import { awards } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const iconMap = {
  FaTrophy,
  FaStar,
  FaRocket,
  FaMedal,
  FaHandshake,
  FaBookOpen,
};

const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];

const Awards = () => (
  <section id="awards" className="relative overflow-x-hidden bg-sand/40 py-14 sm:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionTitle eyebrow="Recognition" title="Honors & awards" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => {
          const Icon = iconMap[award.icon];
          return (
            <motion.article
              key={award.title}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
              className={`rounded-3xl border border-ink/8 bg-cream p-5 text-center shadow-[0_16px_32px_rgba(27,61,58,0.08)] max-sm:rotate-0 sm:p-6 ${rotations[index]}`}
            >
              <motion.div
                whileHover={{ rotate: -12, scale: 1.1 }}
                className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold/20 text-xl text-coral"
              >
                {Icon && <Icon />}
              </motion.div>
              <h3 className="font-display text-lg font-bold text-ink">{award.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{award.description}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Awards;
