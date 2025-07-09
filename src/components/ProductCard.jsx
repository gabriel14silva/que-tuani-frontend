import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card-image"
        />
        <h3 className="product-card-title">{product.name}</h3>
      </Link>
      <p className="product-card-price">${product.price.toFixed(2)}</p>
      <button className="product-card-button">Agregar al Carrito</button>
    </div>
  );
}

export default ProductCard;
