import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // <-- Importa useAuth

function ProfilePage() {
  const { user, logout } = useAuth(); // Obtén el usuario y la función de logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Llama a la función de logout del custom hook
    navigate("/login"); // Redirige a la página de login después de cerrar sesión
  };

  // Si por alguna razón el usuario no está disponible (ej. acceso directo a /profile sin login)
  if (!user) {
    // Esto lo manejaremos mejor con ProtectedRoute, pero es una buena práctica defensiva.
    return (
      <div className="profile-page profile-page--not-logged-in">
        <p>No has iniciado sesión. Redirigiendo al login...</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1 className="profile-page__title">Perfil de Usuario</h1>
      <div className="profile-card">
        <img
          src={user.avatar}
          alt="Avatar del Usuario"
          className="profile-card__avatar"
        />
        <h2 className="profile-card__name">{user.name}</h2>
        <p className="profile-card__info">
          <strong>Usuario:</strong> {user.username}
        </p>
        <p className="profile-card__info">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="profile-card__info">
          <strong>Rol:</strong> {user.role}
        </p>

        <button onClick={handleLogout} className="profile-card__logout-button">
          Cerrar Sesión
        </button>
      </div>

      <section className="profile-orders-section">
        <h2 className="profile-orders-section__title">Mis Pedidos</h2>
        <p className="profile-orders-section__text">
          Aquí se mostrará el historial de pedidos del usuario.
        </p>
        {/* Aquí podrías mapear una lista de pedidos reales si tuvieras datos */}
        <p className="profile-orders-section__text--placeholder">
          (Funcionalidad en desarrollo...)
        </p>
      </section>
    </div>
  );
}

export default ProfilePage;
