import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaGithub } from 'react-icons/fa';

import './Navigation.css';

function Navigation() {
  return (
    <Navbar fixed='top' expand='md' className='nav-bg'>
      <Navbar.Brand href='#'>STOCK</Navbar.Brand>
      <Navbar.Toggle aria-controls='collapse-navbar-nav' />
      <Navbar.Collapse id='collapse-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='mailto:stock@colostate.edu'>Contact</Nav.Link>
          <Nav.Link className='icon-adjustment' href='https://github.com/stockeh'>
            <FaGithub />
          </Nav.Link>
          <Nav.Link className='icon-adjustment' href='https://www.instagram.com/jdstock/'>
            <FaInstagram />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
