import React from "react";

function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("es-NI", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="privacy-policy-page">
      <h1 className="privacy-policy-page__title">Política de Privacidad</h1>
      <p className="privacy-policy-page__intro">
        Fecha de última actualización: {currentDate}
      </p>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">1. Introducción</h2>
        <p>
          En **Que Tuani!**, valoramos tu privacidad y nos comprometemos a
          proteger tu información personal. Esta Política de Privacidad describe
          cómo recopilamos, usamos, divulgamos y protegemos la información que
          obtengamos de ti a través de nuestro sitio web https://quetuanis.com/.
          Al utilizar nuestros servicios, aceptas las prácticas descritas en
          esta política.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          2. Información que Recopilamos
        </h2>
        <p>Podemos recopilar la siguiente información:</p>
        <ul className="privacy-policy-page__list">
          <li>
            <strong>Información Personal de Identificación:</strong> Nombre,
            dirección de correo electrónico, dirección de envío y facturación,
            número de teléfono, e información de pago (aunque los datos de
            tarjeta se procesan de forma segura por terceros y no los
            almacenamos directamente).
          </li>
          <li>
            <strong>Datos de Uso:</strong> Información sobre cómo interactúas
            con nuestro sitio web, incluyendo las páginas que visitas, el tiempo
            que pasas en ellas, tus patrones de navegación, dirección IP, tipo
            de navegador, sistema operativo y dispositivos que utilizas.
          </li>
          <li>
            <strong>Información del Carrito de Compras:</strong> Los productos
            que agregas a tu carrito, que pueden persistir en tu navegador
            (mediante localStorage) para tu conveniencia.
          </li>
        </ul>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          3. Cómo Usamos Tu Información
        </h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul className="privacy-policy-page__list">
          <li>Procesar tus pedidos y gestionar tu cuenta.</li>
          <li>Mejorar nuestros productos y servicios.</li>
          <li>Personalizar tu experiencia de compra.</li>
          <li>
            Comunicarnos contigo sobre ofertas, promociones o actualizaciones
            relevantes (con tu consentimiento).
          </li>
          <li>
            Prevenir fraudes y mantener la seguridad de nuestro sitio web.
          </li>
          <li>Cumplir con nuestras obligaciones legales.</li>
        </ul>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          4. Compartir Tu Información
        </h2>
        <p>
          No vendemos, comerciamos ni alquilamos tu información personal a
          terceros. Podemos compartir tu información con proveedores de
          servicios de confianza que nos ayudan a operar nuestro negocio (ej.
          procesamiento de pagos, envío, análisis web), siempre bajo acuerdos de
          confidencialidad estrictos. También podemos divulgar información si es
          requerido por ley o para proteger nuestros derechos y seguridad.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          5. Cookies y Tecnologías Similares
        </h2>
        <p>
          Nuestro sitio web utiliza "cookies" y tecnologías similares para
          mejorar tu experiencia de usuario, analizar el tráfico del sitio y
          personalizar el contenido. Las cookies son pequeños archivos de texto
          que se almacenan en tu dispositivo. Puedes configurar tu navegador
          para que rechace las cookies, pero esto podría afectar la
          funcionalidad de algunas partes de nuestro sitio.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">6. Tus Derechos</h2>
        <p>Tienes derecho a:</p>
        <ul className="privacy-policy-page__list">
          <li>Acceder a la información personal que tenemos sobre ti.</li>
          <li>Solicitar la corrección de datos incorrectos.</li>
          <li>Solicitar la eliminación de tus datos personales.</li>
          <li>
            Oponerte al procesamiento de tus datos para fines de marketing.
          </li>
        </ul>
        <p>
          Para ejercer estos derechos, por favor contáctanos a través de la
          información provista en nuestra página de{" "}
          <a href="/contact">Contacto</a>.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          7. Seguridad de los Datos
        </h2>
        <p>
          Implementamos medidas de seguridad adecuadas para proteger tu
          información personal contra el acceso no autorizado, la alteración, la
          divulgación o la destrucción. Sin embargo, ninguna transmisión de
          datos por Internet o método de almacenamiento electrónico es 100%
          seguro.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">
          8. Cambios a Esta Política de Privacidad
        </h2>
        <p>
          Podemos actualizar nuestra Política de Privacidad ocasionalmente.
          Publicaremos cualquier cambio en esta página, y te recomendamos
          revisarla periódicamente. Los cambios entrarán en vigor a partir de su
          publicación.
        </p>
      </section>

      <section className="privacy-policy-page__section">
        <h2 className="privacy-policy-page__subtitle">9. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, puedes
          contactarnos:
        </p>
        <ul className="privacy-policy-page__list">
          <li>
            Por correo electrónico:{" "}
            <a href="mailto:privacidad@quetuani.com">privacidad@quetuani.com</a>
          </li>
          <li>
            A través de nuestra página de <a href="/contact">Contacto</a>.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;
