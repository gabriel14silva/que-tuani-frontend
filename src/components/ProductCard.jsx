import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.stock > 0) {
      addToCart(product, 1);
    } else {
      alert("Producto agotado.");
    }
  };

  const isOutOfStock = product.stock <= 0;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__image"
        />
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__stock">
          Stock: {product.stock > 0 ? product.stock : "Agotado"}
        </p>
      </Link>{" "}
      <button
        onClick={handleAddToCartClick}
        className="product-detail__add-to-cart-button"
        disabled={isOutOfStock}
      >
        {isOutOfStock ? "Agotado" : "Añadir al Carrito"}
      </button>
    </div>
  );
}

export default ProductCard;
