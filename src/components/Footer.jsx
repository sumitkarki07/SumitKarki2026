import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import AgentMark from './AgentMark';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'About this profile', href: '#faq' },
  ];

  return (
    <footer className="border-t border-ink/8 bg-sand/50 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection('#top');
            }}
            className="inline-flex items-center gap-3"
          >
            <AgentMark className="h-12 w-12" />
            <span className="font-display text-xl font-extrabold text-ink">Sumit Karki</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Sumit Karki (SK) is a software engineering student at the University of Wisconsin–Green Bay in Green Bay, Wisconsin. Web development on uwgb.edu, applied machine learning, and published research.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-ink">Explore</p>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-ink-soft hover:text-coral"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-ink">Connect</p>
          <div className="flex gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink hover:text-coral"
              aria-label="Sumit Karki on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="me noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink hover:text-coral"
              aria-label="Sumit Karki on GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-cream text-ink hover:text-coral"
              aria-label="Email Sumit Karki"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-ink-soft">
        © {year} Sumit Karki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
