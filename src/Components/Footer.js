import React from 'react';
import { Typography } from '@mui/material';

import Container from 'react-bootstrap/Container';
import preval from 'preval.macro';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer-bg'>
      <Container>
        <Typography color='text.disabled'>Last Updated: {preval`module.exports = new Date().toLocaleString();`}</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
