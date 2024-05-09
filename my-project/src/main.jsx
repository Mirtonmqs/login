import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from '@/Pages/ErrorPage';
import Site from '@/Pages/Site';
import Login from '@/Pages/Login';
import Register from '@/Pages/Register';
import Usuarios from '@/Pages/Usuarios';
import Site2 from '@/Pages/Site2';
import { UserStorage } from '@/contexts/UserContexts';

const App = () => (
  <BrowserRouter>
    <UserStorage>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/errorpage' element={<ErrorPage />} />
        <Route path='/site' element={<Site />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/site2' element={<Site2 />} />
      </Routes>
    </UserStorage>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
