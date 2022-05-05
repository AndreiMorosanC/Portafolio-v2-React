import './App.css';
import React from 'react';
import HeadBar from './componets/HeadBar';
import AboutNameBio from './componets/AboutNamebio';
import Skills from './componets/Skills';
import AboutMe from './componets/AboutMe';
import Projects from './componets/Projects';
import Contact from './componets/Contact';


function App() {
  return (
    <div className="Main-container">
      <HeadBar/>
      <AboutNameBio/>
      <div className='Main-Skill-container'>
        <AboutMe/>
        <Skills/>
      </div>
      <Contact/>
  </div>
  );
}

export default App;
