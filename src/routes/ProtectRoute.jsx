import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectRoute({ children }) {
  let user = null; // useAuth()
  // Protected
  if (!user) return <Navigate to='/login' />;
  return children;
}

export default ProtectRoute;
