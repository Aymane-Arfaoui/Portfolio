import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Patents from './components/Patents';
import Projects from './components/Projects';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
      <div className='relative'>
        <Navbar />
        <Hero />
        <Skills />
        <Technologies />
        <Education />
        <Experiences />
        <Patents />
        <Projects />
        <Extracurriculars />
        <Contact />
      </div>
    </div>
  );
};

export default App;
