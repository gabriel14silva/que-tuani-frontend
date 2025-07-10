import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <ul className="navbar__list">
        {" "}
        <li className="navbar__item">
          {" "}
          <Link to="/" className="navbar__link">
            Inicio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/products" className="navbar__link">
            Todos los Productos
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/electronics" className="navbar__link">
            Electrónica
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/clothing" className="navbar__link">
            Ropa
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/category/home" className="navbar__link">
            Hogar
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">
            Acerca de
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
