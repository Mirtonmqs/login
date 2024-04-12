import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Site from './Pages/Site';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/home" element={<Home />} />
      <Route path="/errorpage" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
