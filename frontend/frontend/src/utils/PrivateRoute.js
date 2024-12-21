import React from 'react';
import { Navigate } from 'react-router-dom';

// Example authentication check, modify it according to your actual logic
const isAuthenticated = false; // Replace with actual check, e.g., token presence

const PrivateRoute = ({ children }) => {
    console.log('private route');
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected route
  return children;
};

export default PrivateRoute;
