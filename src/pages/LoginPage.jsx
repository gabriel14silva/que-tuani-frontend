import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ¡Importa Link!
import { useAuth } from "../hooks/useAuth.jsx";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error: authError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = login(username, password);
    if (loginSuccess) {
      navigate("/profile");
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-page__title">Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__group">
          <label htmlFor="username" className="login-form__label">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            className="login-form__input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-form__group">
          <label htmlFor="password" className="login-form__label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="login-form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {authError && <p className="login-form__error">{authError}</p>}
        <button type="submit" className="login-form__submit-button">
          Entrar
        </button>

        {/* ¡NUEVO ELEMENTO AQUÍ! */}
        <p className="login-page__register-text">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="login-page__register-link">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
