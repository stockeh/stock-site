import React from 'react';

import Container from 'react-bootstrap/Container';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer-bg text-muted'>
      <Container>
        <p>Last Updated: {new Date().toLocaleString()}</p>
      </Container>
    </footer>
  );
}

export default Footer;
