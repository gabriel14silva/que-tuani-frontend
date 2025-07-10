import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";

function HomePage({ products }) {
  const featuredProducts = products.filter((product) => product.isFeatured);

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

      <section className="featured-products-section">
        {" "}
        <h2 className="featured-products-section__title">
          Productos Destacados
        </h2>
        {featuredProducts.length > 0 ? (
          <div className="featured-products-grid">
            {" "}
            {featuredProducts.map((product) => (
              <div key={product.id} className="featured-product-card">
                <Link
                  to={`/product/${product.id}`}
                  className="featured-product-card__link"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="featured-product-card__image"
                  />
                  <div className="featured-product-card__details">
                    <h3 className="featured-product-card__name">
                      {product.name}
                    </h3>
                    <p className="featured-product-card__price">
                      C${product.price.toFixed(2)}
                    </p>
                    <span className="featured-product-card__category">
                      {product.category}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="featured-products-section__no-products">
            Próximamente: Nuestros productos más populares.
          </p>
        )}
      </section>
    </div>
  );
}

export default HomePage;
