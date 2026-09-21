import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WebSwinger from './components/WebSwinger';
import AmbientCursor from './components/AmbientCursor';
import ScrollProgress from './components/ScrollProgress';

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-parchment text-ink">
      <div className="grain" />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(rgba(27,61,58,0.08) 1.1px, transparent 1.1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <AmbientCursor />
      <ScrollProgress />
      <WebSwinger />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-coral focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" role="main" className="relative z-10 xl:pr-24">
        <Hero />
        <SkillsMarquee />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
