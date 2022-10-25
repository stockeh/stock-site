import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import './Navigation.css';

function Navigation() {
  return (
    <Navbar fixed='top' expand='md' className='nav-bg'>
      <Navbar.Brand href='.'>STOCK</Navbar.Brand>
      <Navbar.Toggle aria-controls='collapse-navbar-nav' />
      <Navbar.Collapse className='justify-content-end' id='collapse-navbar-nav'>
        <Nav className='ml-auto'>
          <hr className='mobile-navbar-icon mobile-hr' />
          <Nav.Link href='mailto:stock@colostate.edu'>
            <span className='mobile-navbar-icon'>
              <FiMail />
            </span>
            Contact
          </Nav.Link>
          <Nav.Link className='icon-adjustment' href='https://github.com/stockeh'>
            <FaGithub />
            <span className='mobile-navbar-text'>GitHub</span>
          </Nav.Link>
          <Nav.Link className='icon-adjustment' href='https://www.instagram.com/jdstock/'>
            <FaInstagram />
            <span className='mobile-navbar-text'>Instagram</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
