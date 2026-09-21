import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className="mb-8 text-center sm:mb-14"
  >
    {eyebrow && (
      <p className="mb-2 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-coral sm:mb-3 sm:text-[11px] sm:tracking-[0.28em]">
        {eyebrow}
      </p>
    )}
    <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
      {title}
    </h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mt-3 h-[3px] w-14 origin-center rounded-full bg-gradient-to-r from-coral via-gold to-teal sm:mt-4 sm:w-16"
    />
    {subtitle && (
      <p className="mx-auto mt-4 max-w-xl px-1 text-sm leading-relaxed text-ink-soft sm:mt-5 sm:text-base">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
