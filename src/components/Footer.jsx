import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {" "}
      <p className="footer__text">
        {" "}
        &copy; {new Date().getFullYear()} Que Tuani!. Todos los derechos
        reservados.
      </p>
      <nav className="footer__nav">
        {" "}
        <a href="/about" className="footer__nav-link">
          Nosotros
        </a>{" "}
        <a href="/contact" className="footer__nav-link">
          Contacto
        </a>{" "}
        <a href="/privacy" className="footer__nav-link"></a>{" "}
      </nav>
    </footer>
  );
}

export default Footer;
