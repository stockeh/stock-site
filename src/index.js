import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import blogs from './assets/blogs/blogs.json';
import Blogpage from './Components/Blogpage';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        {blogs.map((item, idx) => (
          <Route key={idx} path={item.dir} element={<Blogpage dir={item.dir} />} />
        ))}
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
