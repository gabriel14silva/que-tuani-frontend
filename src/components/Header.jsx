import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logoquetuani.png";

function Header() {
  return (
    <header className="header">
      {" "}
      {/* Bloque principal */}
      <div className="header__left">
        {" "}
        {/* Elemento: Contenedor de la izquierda */}
        <img
          src={logoImage}
          className="header__logo-image"
          alt="Logo Que Tuani"
        />{" "}
        {/* Elemento: Imagen del logo */}
        <Link to="/" className="header__logo-link">
          {" "}
          {/* Elemento: Enlace del logo de texto */}
          Que Tuani!
        </Link>
      </div>
      <div className="header__center">
        {" "}
        {/* Elemento: Contenedor del centro (búsqueda) */}
        <input
          type="text"
          placeholder="Buscar productos..."
          className="header__search-input" // Elemento: Input de búsqueda
        />
        <button className="header__search-button">Buscar</button>{" "}
        {/* Elemento: Botón de búsqueda */}
      </div>
      <div className="header__right">
        {" "}
        {/* Elemento: Contenedor de la derecha (íconos) */}
        <Link to="/cart" className="header__icon-link">
          {" "}
          {/* Elemento: Enlace de ícono */}
          🛒 Carrito
        </Link>
        <Link to="/login" className="header__icon-link">
          {" "}
          {/* Elemento: Enlace de ícono */}
          👤 Iniciar Sesión
        </Link>
      </div>
    </header>
  );
}

export default Header;
