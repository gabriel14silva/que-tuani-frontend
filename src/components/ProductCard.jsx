import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // Función para formatear el precio como Córdobas
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div className="product-card__image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-card__image"
          />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">{product.name}</h3>
          <p className="product-card__price">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <button className="product-card__button">Agregar al Carrito</button>
    </div>
  );
}

export default ProductCard;
