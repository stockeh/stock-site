import * as React from 'react';
import { StrictMode, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import blogs from './assets/blogs/blogs.json';
import {
  experimental_extendTheme as extendTheme,
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import Home from './Components/Home';
import Blogpage from './Components/Blogpage';
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

import './App.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const [needBanner, setNeedBanner] = useState(true);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      extendTheme({
      palette: {
        mode: mode,
      },
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
      'card-shadow':
        mode === 'dark'
          ? '0 0 10px rgba(255, 255, 255, .8);'
          : '0 0 10px rgba(0, 0, 0, 0.1);',
      'conic':
          mode === 'dark'
            ? [
              'var(--orange)',
              '#414141',
              '#363636',
              '#494949',
              '#555555',
              '#696969',
              '#979797',
              '#a0a0a0',
              '#c0c0c0',
              '#dbdbdb',
            ]
            : [
              'var(--orange)',
              '#bebebe',
              '#c9c9c9',
              '#b6b6b6',
              '#aaaaaa',
              '#969696',
              '#686868',
              '#5f5f5f',
              '#3f3f3f',
              '#242424',
            ]
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Navigation ColorModeContext={ColorModeContext}/>
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
      </CssVarsProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
