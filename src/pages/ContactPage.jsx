import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí es donde en una aplicación real enviarías los datos del formulario.
    // Esto podría ser a una API, un servicio de correo electrónico, etc.
    // Por ahora, solo lo mostraremos en la consola.
    console.log("Formulario de contacto enviado:", formData);

    // Puedes añadir lógica para mostrar un mensaje de éxito al usuario
    alert("¡Mensaje enviado con éxito! Te responderemos pronto.");

    // Limpiar el formulario después del envío
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-page__title">Contáctanos</h1>
      <p className="contact-page__intro">
        ¿Tienes preguntas, comentarios o necesitas ayuda? ¡Estamos aquí para
        escucharte! Puedes contactarnos a través del siguiente formulario o
        usando nuestros datos de contacto.
      </p>

      <section className="contact-page__form-section">
        <h2 className="contact-page__subtitle">Envíanos un Mensaje</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form__input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-form__input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject" className="contact-form__label">
              Asunto:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact-form__input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message" className="contact-form__label">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="contact-form__textarea"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-form__submit-button">
            Enviar Mensaje
          </button>
        </form>
      </section>

      <section className="contact-page__info-section">
        <h2 className="contact-page__subtitle">
          Nuestra Información de Contacto
        </h2>
        <p>
          Si prefieres contactarnos directamente, aquí tienes nuestros detalles:
        </p>
        <ul className="contact-info-list">
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href="tel:+50588887777">(505) 8623-6685</a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@quetuani.com">info@quetuani.com</a>
          </li>
          <li>
            <strong>Dirección:</strong> Calle Principal, Frente a oficinas de
            Tigo, Nueva Guinea, Nicaragua
          </li>
          <li>
            <strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM -
            5:00 PM
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ContactPage;
