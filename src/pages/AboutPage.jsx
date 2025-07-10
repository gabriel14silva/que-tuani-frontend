import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-page__title">Acerca de Que Tuani!</h1>
      <p className="about-page__intro">
        ¡Bienvenido a Que Tuani!, tu destino en línea para encontrar productos
        increíbles con la mejor calidad y precios. Nos apasiona ofrecer una
        experiencia de compra única y satisfactoria para todos nuestros
        clientes.
      </p>

      <section className="about-page__section">
        <h2 className="about-page__subtitle">Nuestra Misión</h2>
        <p>
          En Que Tuani!, nuestra misión es simple: **conectar a nuestros
          clientes con productos innovadores y de alta calidad** que mejoren su
          día a día. Nos esforzamos por mantener una selección diversa que
          abarque desde la última tecnología hasta artículos esenciales para el
          hogar y las tendencias más recientes en moda, todo mientras
          garantizamos un proceso de compra seguro y eficiente.
        </p>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__subtitle">Nuestros Valores</h2>
        <ul className="about-page__values-list">
          <li>
            <strong>Calidad:</strong> Seleccionamos cuidadosamente cada producto
            para asegurar su durabilidad y excelente desempeño.
          </li>
          <li>
            <strong>Atención al Cliente:</strong> Tu satisfacción es nuestra
            prioridad. Estamos aquí para ayudarte en cada paso.
          </li>
          <li>
            <strong>Innovación:</strong> Siempre buscamos las últimas novedades
            para ofrecerte lo más relevante del mercado.
          </li>
          <li>
            <strong>Confianza:</strong> Nos comprometemos con la transparencia y
            la seguridad en todas tus transacciones.
          </li>
        </ul>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__subtitle">Nuestra Historia</h2>
        <p>
          Que Tuani! comenzó como un sueño para llevar productos excepcionales
          directamente a tu hogar, sin complicaciones. Desde nuestros inicios,
          hemos crecido gracias al apoyo de nuestra increíble comunidad de
          clientes, y continuamos expandiendo nuestro catálogo y mejorando
          nuestros servicios para servirte mejor cada día.
        </p>
      </section>

      <section className="about-page__section">
        <h2 className="about-page__subtitle">¡Gracias por elegirnos!</h2>
        <p>
          Esperamos que disfrutes explorando nuestra tienda tanto como nosotros
          disfrutamos creándola para ti. Si tienes alguna pregunta o sugerencia,
          no dudes en{" "}
          <a href="/contact" className="about-page__contact-link">
            contactarnos
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
