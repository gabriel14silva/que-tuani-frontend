import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"; // Asegúrate de que la ruta sea correcta

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación

  if (!isAuthenticated) {
    // Si el usuario NO está autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderiza los componentes hijos (ProfilePage)
  return children;
};

export default ProtectedRoute;
