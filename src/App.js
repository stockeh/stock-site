import React from 'react';
import './App.css';

import NavBar from './Components/NavBar';
import Banner from './Components/Banner';

import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';

import Footer from './Components/Footer';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='container'>
        <Banner />
        <ul class='nav nav-tabs' role='tablist' id='navTabs'>
          <li class='nav-item'>
            <a
              class='nav-link active'
              id='projects-tab'
              data-toggle='tab'
              href='#projects'
              role='tab'
              aria-controls='projects'
              aria-selected='true'
            >
              Projects
            </a>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              id='experience-tab'
              data-toggle='tab'
              href='#experience'
              role='tab'
              aria-controls='experience'
              aria-selected='false'
            >
              Experience
            </a>
          </li>
          <li class='nav-item'>
            <a
              class='nav-link'
              id='cont-tab'
              data-toggle='tab'
              href='#cont'
              role='tab'
              aria-controls='cont'
              aria-selected='false'
            >
              Cont.
            </a>
          </li>
        </ul>
        <br />
        <br />
        <div class='tab-content' id='myTabContent'>
          <div
            class='tab-pane fade show active'
            id='projects'
            role='tabpanel'
            aria-labelledby='projects-tab'
          >
            <Projects />
          </div>
          <div
            class='tab-pane fade'
            id='experience'
            role='tabpanel'
            aria-labelledby='experience-tab'
          >
            <Experience />
          </div>
          <div
            class='tab-pane fade'
            id='cont'
            role='tabpanel'
            aria-labelledby='cont-tab'
          >
            <Education />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
