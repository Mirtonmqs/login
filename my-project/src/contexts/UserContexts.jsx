import React, { useState } from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Mirton',
    loginTime: new Date(),
    photo: 'url_para_a_foto_do_usuario' 
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
