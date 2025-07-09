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
    // Aquí iría la lógica para conectar con el backend
    alert("Lógica de registro aún no implementada con el backend.");
  };

  return (
    <div className="auth-form-container">
      {" "}
      {/* Bloque principal del contenedor */}
      <h2 className="auth-form-container__title">Registrarse</h2>{" "}
      {/* Elemento: Título */}
      <form onSubmit={handleSubmit} className="auth-form">
        {" "}
        {/* Bloque del formulario */}
        <div className="auth-form__group">
          {" "}
          {/* Elemento: Grupo de formulario */}
          <label htmlFor="username" className="auth-form__label">
            Nombre de Usuario:
          </label>{" "}
          {/* Elemento: Etiqueta */}
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-form__input" // Elemento: Input
            required
          />
        </div>
        <div className="auth-form__group">
          {" "}
          {/* Elemento: Grupo de formulario */}
          <label htmlFor="email" className="auth-form__label">
            Email:
          </label>{" "}
          {/* Elemento: Etiqueta */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-form__input" // Elemento: Input
            required
          />
        </div>
        <div className="auth-form__group">
          {" "}
          {/* Elemento: Grupo de formulario */}
          <label htmlFor="password" className="auth-form__label">
            Contraseña:
          </label>{" "}
          {/* Elemento: Etiqueta */}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-form__input" // Elemento: Input
            required
          />
        </div>
        <div className="auth-form__group">
          {" "}
          {/* Elemento: Grupo de formulario */}
          <label htmlFor="confirmPassword" className="auth-form__label">
            Confirmar Contraseña:
          </label>{" "}
          {/* Elemento: Etiqueta */}
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-form__input" // Elemento: Input
            required
          />
        </div>
        <button type="submit" className="auth-form__button">
          {" "}
          {/* Elemento: Botón */}
          Registrarme
        </button>
      </form>
      <p className="auth-form-container__footer-text">
        {" "}
        {/* Elemento: Texto al pie */}
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="auth-form-container__footer-link">
          Inicia Sesión
        </a>{" "}
        {/* Elemento: Enlace al pie */}
      </p>
    </div>
  );
}

export default RegisterPage;
