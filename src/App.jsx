import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Impact from './components/Impact';
import AeroMLCaseStudy from './components/AeroMLCaseStudy';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import PatentsLeadership from './components/PatentsLeadership';
import Footer from './components/Footer';
import Preloader from './components/effects/Preloader';
import Cursor from './components/effects/Cursor';
import ScrollProgress from './components/effects/ScrollProgress';
import useSmoothScroll from './hooks/useSmoothScroll';

const App = () => {
  const [ready, setReady] = useState(false);
  useSmoothScroll(ready);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-50">
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <Impact />
        <AeroMLCaseStudy />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <PatentsLeadership />
      </main>
      <Footer />
    </div>
  );
};

export default App;
