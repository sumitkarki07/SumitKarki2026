import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Projects />
        <Skills />
        <Blog />
        <FAQ />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
