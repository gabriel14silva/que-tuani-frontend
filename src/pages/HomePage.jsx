import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">¡Bienvenido a Que Tuani!</h1>
      <p className="home-page__message">
        Explora nuestra increíble selección de productos electrónicos, ropa,
        hogar y más.
      </p>
      <div className="home-page__cta-buttons">
        <Link to="/products" className="home-page__link-button">
          Ver todos los productos
        </Link>
        <Link
          to="/about"
          className="home-page__link-button home-page__link-button--secondary"
        >
          Conócenos
        </Link>
      </div>
      {/* Puedes añadir secciones para productos destacados o nuevas llegadas aquí */}
    </div>
  );
}

export default HomePage;
