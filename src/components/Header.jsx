import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/products");
    }
    setSearchTerm("");
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo-link">
          <img
            src="/src/assets/images/logos/logoquetuani.png"
            alt="Tu Tienda Online"
            className="header__logo"
          />
          Que Tuani!
        </Link>
      </div>

      <div className="header__search-container">
        <form onSubmit={handleSearchSubmit} className="header__search-form">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="header__search-input"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit" className="header__search-button">
            Buscar
          </button>
        </form>
      </div>

      <nav className="header__nav">
        <Link to="/cart" className="header__nav-link">
          🛒 Carrito
        </Link>
        <Link to="/login" className="header__nav-link">
          👤 Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}

export default Header;
