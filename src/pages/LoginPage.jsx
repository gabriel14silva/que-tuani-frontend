import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    alert("Lógica de login aún no implementada con el backend.");
  };

  return (
    <div className="auth-form-container">
      {" "}
      <h2 className="auth-form-container__title">Iniciar Sesión</h2>{" "}
      <form onSubmit={handleSubmit} className="auth-form">
        {" "}
        <div className="auth-form__group">
          {" "}
          <label htmlFor="email" className="auth-form__label">
            Email:
          </label>{" "}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-form__input"
            required
          />
        </div>
        <div className="auth-form__group">
          {" "}
          <label htmlFor="password" className="auth-form__label">
            Contraseña:
          </label>{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-form__input"
            required
          />
        </div>
        <button type="submit" className="auth-form__button">
          {" "}
          Ingresar
        </button>
      </form>
      <p className="auth-form-container__footer-text">
        {" "}
        ¿No tienes cuenta?{" "}
        <a href="/register" className="auth-form-container__footer-link">
          Regístrate aquí
        </a>{" "}
      </p>
    </div>
  );
}

export default LoginPage;
