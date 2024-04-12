import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './routes/Register';
import ErrorPage from './routes/ErrorPage';
import Site from './routes/Site';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Site />} />
      <Route path="/register" element={<Register />} />
      <Route path="/errorpage" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
