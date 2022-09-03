import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import blogs from './assets/blogs/blogs.json';
import Blogpage from './Components/Blogpage';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<App page='papers' />} />
        <Route exact path='/projects' element={<App page='projects' />} />
        <Route exact path='/blogs' element={<App page='blogs' />} />
        {blogs.map((item, idx) => (
          <Route key={idx} path={'/blogs/' + item.dir} element={<Blogpage dir={item.dir} />} />
        ))}
      </Routes>
    </HashRouter>
  </StrictMode>
);
