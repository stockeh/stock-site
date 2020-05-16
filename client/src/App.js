import React from 'react';

import { Container, Nav } from 'react-bootstrap';

import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Footer from './Components/Footer';

import './App.css';

function App() {
  const [tab, setTab] = React.useState('pro');

  return (
    <div>
      <Navigation />
      <Container>
        <Banner />
        <Nav
          fill
          variant='tabs'
          defaultActiveKey='pro'
          id='navTabs'
          onSelect={(eventKey) => setTab(eventKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey='pro'>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='exp'>Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='cont'>Cont.</Nav.Link>
          </Nav.Item>
        </Nav>
        <br />
        <br />
        {tab === 'pro' ? <Projects /> : null}
        {tab === 'exp' ? <Experience /> : null}
        {tab === 'cont' ? <Education /> : null}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
