import React from 'react';

import { BsArrow90DegUp } from 'react-icons/bs';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer-bg text-muted'>
      <div className='container'>
        <p className='float-right'>
          <a href='#'>
            <BsArrow90DegUp size={24} className='top' />
          </a>
        </p>
        <p>Footer Something</p>
      </div>
    </footer>
  );
}

export default Footer;
