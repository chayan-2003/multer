
import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem('admin');
    setIsAdmin(adminStatus !== null);
  }, []);

  const login = () => {
    localStorage.setItem('admin', 'true');
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem('admin');
    setIsAdmin(false);
  
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;