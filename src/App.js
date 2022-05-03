import './App.css';
import React from 'react';
import HeadBar from './componets/HeadBar';
import AboutNameBio from './componets/AboutNamebio';
import Skills from './componets/Skills';
import AboutMe from './componets/AboutMe';


function App() {
  return (
    <div className="Main-container">
      <HeadBar/>
      <AboutNameBio/>
      <div className='Main-Skill-container'>
        <AboutMe/>
        <Skills/>
      </div>

  </div>
  );
}

export default App;
