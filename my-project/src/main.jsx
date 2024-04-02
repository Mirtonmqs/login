import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Site from './routes/Site.jsx'

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Register',
    element: <Register/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/Site',
    element: <Site/>,
    errorElement: <ErrorPage />,
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
