import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    console.log("Register attempt:", { username, email, password });
    alert("Lógica de registro aún no implementada con el backend.");
  };

  return (
    <div className="auth-form-container">
      {" "}
      <h2 className="auth-form-container__title">Registrarse</h2>{" "}
      <form onSubmit={handleSubmit} className="auth-form">
        {" "}
        <div className="auth-form__group">
          {" "}
          <label htmlFor="username" className="auth-form__label">
            Nombre de Usuario:
          </label>{" "}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-form__input"
            required
          />
        </div>
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
        <div className="auth-form__group">
          {" "}
          <label htmlFor="confirmPassword" className="auth-form__label">
            Confirmar Contraseña:
          </label>{" "}
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-form__input"
            required
          />
        </div>
        <button type="submit" className="auth-form__button">
          {" "}
          Registrarme
        </button>
      </form>
      <p className="auth-form-container__footer-text">
        {" "}
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="auth-form-container__footer-link">
          Inicia Sesión
        </a>{" "}
      </p>
    </div>
  );
}

export default RegisterPage;
