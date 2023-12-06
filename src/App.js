import { StrictMode, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import blogs from './assets/blogs/blogs.json';
import { createTheme } from '@mui/material/styles';

import Home from './Components/Home';
import Blogpage from './Components/Blogpage';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

import './App.css';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [needBanner, setNeedBanner] = useState(true);
  const theme = createTheme({
    typography: {
      fontFamily: [
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Container fluid='sm'>
        <Banner desc={needBanner} />
        <StrictMode>
          <HashRouter>
            <Routes>
              <Route
                exact
                path='/'
                element={<Home setNeedBanner={setNeedBanner} page='papers' />}
              />
              <Route
                exact
                path='/experience'
                element={<Home setNeedBanner={setNeedBanner} page='experience' />}
              />
              <Route
                exact
                path='/projects'
                element={<Home setNeedBanner={setNeedBanner} page='projects' />}
              />
              <Route
                exact
                path='/blogs'
                element={<Home setNeedBanner={setNeedBanner} page='blogs' />}
              />
              {blogs.map((item, idx) => (
                <Route
                  key={idx}
                  path={'/blogs/' + item.dir}
                  element={<Blogpage setNeedBanner={setNeedBanner} dir={item.dir} />}
                />
              ))}
            </Routes>
          </HashRouter>
        </StrictMode>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
