import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';

import Literature from './Components/Literature';
import Projects from './Components/Projects';
import Miscellaneous from './Components/Miscellaneous';

import Footer from './Components/Footer';

import './App.css';

function App() {
  const [tab, setTab] = React.useState('pub');

  return (
    <div>
      <Navigation />
      <Container fluid='sm'>
        <Banner />
        <Nav
          fill
          variant='tabs'
          defaultActiveKey='pub'
          id='navTabs'
          onSelect={(eventKey) => setTab(eventKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey='pub'>Papers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='pro'>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='misc'>Blogs</Nav.Link>
          </Nav.Item>
        </Nav>
        <br /> <br />
        {tab === 'pub' ? <Literature /> : null}
        {tab === 'pro' ? <Projects /> : null}
        {tab === 'misc' ? <Miscellaneous /> : null}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
