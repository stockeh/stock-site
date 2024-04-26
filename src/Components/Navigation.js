import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaGraduationCap, FaXTwitter } from 'react-icons/fa6';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import './Navigation.css';

function Navigation({ColorModeContext}) {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  var isDarkMode = theme.palette.mode === 'dark';

  return (
    <Navbar fixed='top' expand='md' expanded={isExpanded} onToggle={toggleNavbar}>
      <span style={{display: 'flex'}}>
        <Navbar.Brand href='.'>STOCK</Navbar.Brand>
        <Box
          sx={{
            marginLeft: '-10px',
            alignItems: 'center',
            justifyContent: 'left',
            bgcolor: 'background.default',
            color: 'text.secondary',
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {isDarkMode ? <Brightness5OutlinedIcon /> : <Brightness4OutlinedIcon />}
          </IconButton>
        </Box>
      </span>
      <Navbar.Toggle 
        aria-controls='collapse-navbar-nav' 
        className={`
          ${isDarkMode && !isExpanded ? 'dark-navbar-toggler-icon' : ''}
          ${isDarkMode && isExpanded ? 'dark-collapsed-navbar-toggler-icon' : ''}
          ${!isDarkMode && isExpanded ? 'collapsed-navbar-toggler-icon' : ''}
        `}
      />
      <Navbar.Collapse className='justify-content-end' id='collapse-navbar-nav'>
        <Nav className='ml-auto'>
          <hr className='mobile-hr' />
          <Nav.Link href='mailto:stock@colostate.edu'>
            <Typography color='textSecondary' sx={{ '&:hover': { color: 'text.primary' }}}>
              <span className='mobile-navbar-icon'>
                <FiMail className='navbar-icon'/>
              </span>
              Contact
            </Typography>
          </Nav.Link>
          <Nav.Link
            href='https://scholar.google.com/citations?user=WlLkqJUAAAAJ&hl=en'
          >
            <Typography color='textSecondary' sx={{ '&:hover': { color: 'text.primary' }}}>
              <FaGraduationCap className='navbar-icon'/>
              <span className='mobile-navbar-text'>Google Scholar</span>
            </Typography>
          </Nav.Link>
          <Nav.Link href='https://twitter.com/itsstock'>
          <Typography color='textSecondary' sx={{ '&:hover': { color: 'text.primary' }}}>
              <FaXTwitter className='navbar-icon'/>
              <span className='mobile-navbar-text'>Twitter</span>
            </Typography>
          </Nav.Link>
          <Nav.Link href='https://github.com/stockeh'>
          <Typography color='textSecondary' sx={{ '&:hover': { color: 'text.primary' }}}>
              <FaGithub className='navbar-icon'/>
              <span className='mobile-navbar-text'>GitHub</span>
            </Typography>
          </Nav.Link>
          <Nav.Link href='https://www.instagram.com/jdstock/'>
          <Typography color='textSecondary' sx={{ '&:hover': { color: 'text.primary' }}}>
              <FaInstagram className='navbar-icon'/>
              <span className='mobile-navbar-text'>Instagram</span>
            </Typography>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
