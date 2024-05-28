import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '@/Pages/ErrorPage';
import Site from '@/Pages/Site';
import Login from '@/Pages/Login';
import Register from '@/Pages/Register';
import Usuarios from '@/Pages/Usuarios';

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/errorpage' element={<ErrorPage />} />
        <Route path='/site' element={<Site />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/site' element={<Site />} />
      </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
