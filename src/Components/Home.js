import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import Literature from './Literature';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';

import './Home.css';

function Navv({ to, name }) {
  return (
    <NavLink
      className='w-100 btn'
      id='nav-tab-buttons'
      to={to}
      style={({ isActive }) =>
        isActive
          ? {
              borderTopColor: 'lightgray',
              borderLeftColor: 'lightgray',
              borderRightColor: 'lightgray',
              borderBottomColor: 'transparent',
              color: '#1c5691',
            }
          : {
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: 'lightgray',
              color: '#222831',
            }
      }
    >
      {name}
    </NavLink>
  );
}

function Home({ setNeedBanner, page }) {
  useEffect(() => setNeedBanner(true), [setNeedBanner]);
  return (
    <div>
      <div className='btn-group d-flex' role='group' aria-label='...'>
        <Navv to='/' name='Papers' />
        <Navv to='/experience' name='Experience' />
        <Navv to='/projects' name='Projects' />
        <Navv to='/blogs' name='Blogs' />
      </div>
      <br /> <br />
      {page === 'papers' ? <Literature /> : null}
      {page === 'experience' ? <Experience /> : null}
      {page === 'projects' ? <Projects /> : null}
      {page === 'blogs' ? <Blogs /> : null}
    </div>
  );
}

export default Home;
