import React from 'react';

import { Container, Nav } from 'react-bootstrap';

import Navigation from './Components/Navigation';
import Banner from './Components/Banner';

import Publications from './Components/Publications';
import Projects from './Components/Projects';
import Miscellaneous from './Components/Miscellaneous';

import Footer from './Components/Footer';

import './App.css';

function App() {
  const [tab, setTab] = React.useState('pub');

  return (
    <div>
      <Navigation />
      <Container className='app'>
        <Banner />
        <Nav
          fill
          variant='tabs'
          defaultActiveKey='pub'
          id='navTabs'
          onSelect={(eventKey) => setTab(eventKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey='pub'>Publications</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='pro'>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='misc'>Misc.</Nav.Link>
          </Nav.Item>
        </Nav>
        <br /> <br />
        {tab === 'pub' ? <Publications /> : null}
        {tab === 'pro' ? <Projects /> : null}
        {tab === 'misc' ? <Miscellaneous /> : null}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
