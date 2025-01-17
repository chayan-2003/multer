
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; 
import {useContext} from 'react';

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useContext(AuthContext);


  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;