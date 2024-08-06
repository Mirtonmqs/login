import React from 'react';
import Site2 from './Site2';
import { UserProvider } from '@/Pages/Context';
import '@/styles/Site.css';

const App = () => (
  <UserProvider>
    <Site2 />
  </UserProvider>
);

export default App;
