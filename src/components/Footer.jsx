import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Que Tuani!. Todos los derechos
        reservados.
      </p>
      <nav className="footer-nav">
        <a href="/about">Nosotros</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Política de Privacidad</a>
      </nav>
    </footer>
  );
}

export default Footer;
