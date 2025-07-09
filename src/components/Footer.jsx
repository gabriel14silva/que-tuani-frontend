import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {" "}
      {/* Bloque principal */}
      <p className="footer__text">
        {" "}
        {/* Elemento: Texto del footer */}
        &copy; {new Date().getFullYear()} Que Tuani!. Todos los derechos
        reservados.
      </p>
      <nav className="footer__nav">
        {" "}
        {/* Elemento: Navegación del footer */}
        <a href="/about" className="footer__nav-link">
          Nosotros
        </a>{" "}
        {/* Elemento: Enlace de navegación */}
        <a href="/contact" className="footer__nav-link">
          Contacto
        </a>{" "}
        {/* Elemento: Enlace de navegación */}
        <a href="/privacy" className="footer__nav-link">
          Política de Privacidad
        </a>{" "}
        {/* Elemento: Enlace de navegación */}
      </nav>
    </footer>
  );
}

export default Footer;
