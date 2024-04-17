import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Site from './Pages/Site';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/home" element={<Home />} />
      <Route path="/errorpage" element={<ErrorPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
