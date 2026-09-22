import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const questions = [
  {
    q: 'Who is Sumit Karki?',
    a: 'Sumit Karki is a software engineering student at the University of Wisconsin–Green Bay in Green Bay, Wisconsin. He is a student web developer for uwgb.edu, co-author of ICMLA 2026 pavement-distress research, Vice President of GDG on Campus UW–Green Bay, and Equity & Diversity Chair for the Student Government Association.',
  },
  {
    q: 'Who is Sumit Karki SK?',
    a: 'Sumit Karki SK is Sumit Karki. SK is the name used on LinkedIn (linkedin.com/in/sumit-karki-sk). He studies at UWGB in Green Bay, Wisconsin.',
  },
  {
    q: 'Is Sumit Karki a UWGB student?',
    a: 'Yes. Sumit Karki is a University of Wisconsin–Green Bay software engineering student, expected to graduate in May 2028. He works in UWGB’s Division of Information Technology on the university website, uwgb.edu.',
  },
  {
    q: 'Where is Sumit Karki based?',
    a: 'Sumit Karki is based in Green Bay, Wisconsin, where he attends UW–Green Bay.',
  },
];

const Faq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative bg-sand/40 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Search & identity"
          title="About this profile"
          subtitle="Straight answers for people and search tools looking up Sumit Karki, UWGB, or Green Bay."
        />

        <div className="space-y-3">
          {questions.map((item, index) => {
            const expanded = open === index;
            return (
              <article key={item.q} className="overflow-hidden rounded-2xl border border-ink/8 bg-cream">
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                  >
                    <span className="font-display text-base font-bold text-ink sm:text-lg">{item.q}</span>
                    <FaChevronDown
                      className={`shrink-0 text-coral transition-transform ${expanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-ink-soft sm:px-5 sm:pb-5 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!expanded && <p className="sr-only">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
