import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Aquí iría la lógica para conectar con el backend
    alert("Lógica de login aún no implementada con el backend.");
  };

  return (
    <div className="auth-form-container">
      {" "}
      {/* Bloque principal del contenedor */}
      <h2 className="auth-form-container__title">Iniciar Sesión</h2>{" "}
      {/* Elemento: Título */}
      <form onSubmit={handleSubmit} className="auth-form">
        {" "}
        {/* Bloque del formulario */}
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
        <button type="submit" className="auth-form__button">
          {" "}
          {/* Elemento: Botón */}
          Ingresar
        </button>
      </form>
      <p className="auth-form-container__footer-text">
        {" "}
        {/* Elemento: Texto al pie */}
        ¿No tienes cuenta?{" "}
        <a href="/register" className="auth-form-container__footer-link">
          Regístrate aquí
        </a>{" "}
        {/* Elemento: Enlace al pie */}
      </p>
    </div>
  );
}

export default LoginPage;
