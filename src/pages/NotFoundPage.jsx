import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      {" "}
      {/* Bloque principal */}
      <h1 className="not-found-page__title">404</h1> {/* Elemento: Título */}
      <p className="not-found-page__message">
        Lo sentimos, la página que buscas no existe.
      </p>{" "}
      {/* Elemento: Mensaje */}
      <Link to="/" className="not-found-page__link">
        Volver a la página de inicio
      </Link>{" "}
      {/* Elemento: Enlace */}
    </div>
  );
}

export default NotFoundPage;
