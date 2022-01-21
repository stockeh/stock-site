import React from 'react';

import Container from 'react-bootstrap/Container';
import preval from 'preval.macro';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer-bg text-muted'>
      <Container>
        <p>Last Updated: {preval`module.exports = new Date().toLocaleString();`}</p>
      </Container>
    </footer>
  );
}

export default Footer;
