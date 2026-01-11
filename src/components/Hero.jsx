import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaChevronDown, FaGlobe } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="pt-32 pb-20 relative overflow-hidden min-h-screen flex items-center justify-center"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <header className="text-center">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name - Primary H1 for SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            itemProp="name"
          >
            Sumit <br className="hidden sm:block" />Karki
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
            itemProp="jobTitle"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            itemProp="description"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-neon transition-all duration-300"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-glow transition-all duration-300"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, title: 'Email' },
              { icon: FaLinkedin, href: personalInfo.linkedin, title: 'LinkedIn' },
              { icon: FaGithub, href: personalInfo.github, title: 'GitHub' },
              { icon: FaPhone, href: `tel:${personalInfo.phone}`, title: 'Phone' },
              { icon: FaGlobe, href: personalInfo.website, title: 'Personal Website' },
            ].map(({ icon: Icon, href, title }) => (
              <motion.a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.25, color: '#22d3ee' }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                title={title}
              >
                <Icon size={30} />
              </motion.a>
            ))}
          </motion.div>
        </header>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaChevronDown className="text-cyan-400" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
