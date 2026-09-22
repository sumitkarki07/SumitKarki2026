import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import AgentMark from './AgentMark';
import { scrollToSection } from '../utils/scroll';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Research', href: '#research' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Awards', href: '#awards' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const handleNav = (event, href) => {
    event.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = '';
    requestAnimationFrame(() => scrollToSection(href));
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed top-0 z-50 w-full border-b border-ink/8 bg-parchment/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <a
          href="#top"
          onClick={(event) => handleNav(event, '#top')}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Sumit Karki — UW–Green Bay student portfolio home"
        >
          <AgentMark className="h-9 w-9 shrink-0 sm:h-11 sm:w-11" />
          <span className="truncate font-display text-base font-extrabold tracking-tight text-ink sm:text-lg">
            Sumit <span className="text-coral">Karki</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleNav(event, link.href)}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-coral"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(event) => handleNav(event, '#contact')}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream shadow-[0_10px_24px_rgba(27,61,58,0.18)] transition hover:bg-coral"
          >
            Let’s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full text-ink lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
          <div className="border-t border-ink/8 bg-cream lg:hidden">
            <div className="max-h-[calc(100dvh-3.5rem)] space-y-1 overflow-y-auto px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => handleNav(event, link.href)}
                  className="block rounded-xl px-3 py-3.5 text-base text-ink hover:bg-sand"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => handleNav(event, '#contact')}
                className="mt-2 mb-2 block rounded-full bg-coral px-3 py-3.5 text-center font-semibold text-cream"
              >
                Let’s talk
              </a>
            </div>
          </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
