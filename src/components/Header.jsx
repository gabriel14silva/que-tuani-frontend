import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Crea este archivo CSS
import logoImage from "../assets/logoquetuani.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoImage} className="logo-image" alt="Logo Que Tuani" />
        <Link to="/" className="header-logo">
          Que Tuani!
        </Link>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="header-right">
        <Link to="/cart" className="header-icon">
          🛒 Carrito
        </Link>
        <Link to="/login" className="header-icon">
          👤 Iniciar Sesión
        </Link>
      </div>
    </header>
  );
}

export default Header;
