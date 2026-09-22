import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
    );
    const subject = encodeURIComponent(formData.subject);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const details = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let’s work together"
          subtitle="Reach Sumit Karki in Green Bay, Wisconsin — open to internships, research collaborations, and software engineering opportunities."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {details.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-cream p-3.5 transition hover:-translate-y-0.5 hover:border-coral/40 sm:gap-4 sm:p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-mist text-teal sm:h-12 sm:w-12">
                      <Icon />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-ink-soft">{item.label}</p>
                      <p className="break-words font-semibold text-ink">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition hover:bg-coral"
                aria-label="Sumit Karki on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="me noopener noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full bg-ink text-cream transition hover:bg-teal"
                aria-label="Sumit Karki on GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-3xl border border-ink/8 bg-cream p-4 shadow-[0_20px_50px_rgba(27,61,58,0.08)] sm:p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-ink-soft">Name</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-ink/10 bg-parchment px-4 py-3 text-base text-ink outline-none transition focus:border-coral"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-ink-soft">Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-ink/10 bg-parchment px-4 py-3 text-base text-ink outline-none transition focus:border-coral"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-ink-soft">Subject</span>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-ink/10 bg-parchment px-4 py-3 text-base text-ink outline-none transition focus:border-coral"
                placeholder="Internship inquiry or collaboration"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-ink-soft">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full resize-none rounded-xl border border-ink/10 bg-parchment px-4 py-3 text-base text-ink outline-none transition focus:border-coral"
                placeholder="A short note about the role or project"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3.5 font-semibold text-cream shadow-[0_12px_28px_rgba(228,90,60,0.32)] transition hover:bg-coral-deep"
            >
              <FaPaperPlane />
              {submitted ? 'Opening your email…' : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
