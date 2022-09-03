import { Container } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';

import Literature from './Components/Literature';
import Projects from './Components/Projects';
import Blogs from './Components/Blogs';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

import './App.css';

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

function App({ page }) {
  console.log(page);
  return (
    <div>
      <Navigation />
      <Container className='app'>
        <Banner desc={true} />
        <div className='btn-group d-flex' role='group' aria-label='...'>
          <Navv to='/' name='Papers' />
          <Navv to='/projects' name='Projects' />
          <Navv to='/blogs' name='Blogs' />
        </div>
        <br /> <br />
        {page === 'papers' ? <Literature /> : null}
        {page === 'projects' ? <Projects /> : null}
        {page === 'blogs' ? <Blogs /> : null}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
