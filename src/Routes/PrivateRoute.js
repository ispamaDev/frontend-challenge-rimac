import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

const PrivateRoute = ({ children }) => {
  const { user } = useUser();  
  if (!user?.responsable) {
    return <Navigate to="/home" />;
  }
 return children;
};

export default PrivateRoute;
