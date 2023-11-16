import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, usersRole }) {
  if (usersRole === 'Admin') {
    return element;
  } else if (usersRole === 'Editor') {
    return <Navigate to="/products" />;
  } else {
    return <Navigate to="/unauthorized" />;
  }
}

export default ProtectedRoute;
