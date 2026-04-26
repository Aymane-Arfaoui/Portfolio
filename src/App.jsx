import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AeroMLCaseStudy from './components/AeroMLCaseStudy';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import PatentsLeadership from './components/PatentsLeadership';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-50">
      <Navbar />
      <Hero />
      <AeroMLCaseStudy />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <PatentsLeadership />
      <Footer />
    </div>
  );
};

export default App;
