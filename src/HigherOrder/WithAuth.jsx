// withAuth.js
import React from "react";
import { Navigate } from "react-router-dom"; // or use your router logic

function withAuth(WrappedComponent) {
  return function ProtectedComponent(props) {
    const isAuthenticated = localStorage.getItem("token"); // mock auth

    if (!isAuthenticated) {
      return <Navigate to="/UseEffectPage" />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
