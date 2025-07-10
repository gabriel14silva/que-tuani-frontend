import React from "react";
import ImageSlider from "../components/ImageSlider";

function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <h1 className="home-hero__title">¡Bienvenido a Tu Tienda Online!</h1>
        <p className="home-hero__description">
          Explora nuestra increíble selección de productos electrónicos, ropa,
          hogar y más.
        </p>
      </section>

      <section className="home-slider-section">
        <ImageSlider />
      </section>

      <section className="home-featured-products">
        <h2>Productos Destacados</h2>
        {/* Aquí podrías mostrar algunos ProductCard directamente, o un enlace a la lista de productos */}
        <p>Próximamente: Nuestros productos más populares.</p>
        {/* Ejemplo: <ProductsGrid products={featuredProducts} /> */}
      </section>
    </div>
  );
}

export default HomePage;
