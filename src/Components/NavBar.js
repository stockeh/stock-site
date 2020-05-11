import React from 'react';
import './NavBar.css';

import { FaInstagram, FaGithub } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-md sticky-top navbar-light nav-bg'>
      <a className='navbar-brand' href='#'>
        STOCK
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='mailto:stock@colostate.edu'>
              Contact
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://github.com/stockeh'>
              <FaGithub />
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='https://www.instagram.com/jdstock/'>
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
