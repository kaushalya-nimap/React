import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if authToken exists

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component
}

export default ProtectedRoute;
