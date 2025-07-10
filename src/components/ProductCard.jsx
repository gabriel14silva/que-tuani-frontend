import React, { useContext } from "react"; // Importa useContext
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext"; // Importa CartContext

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext); // Obtén addToCart del contexto

  // Función para formatear el precio como Córdobas
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  const handleAddToCartClick = (e) => {
    e.preventDefault(); // Previene la navegación si el botón está dentro de un Link
    e.stopPropagation(); // Detiene la propagación del evento para que no se active el Link padre
    if (product.stock > 0) {
      addToCart(product, 1); // Agrega 1 unidad del producto al carrito
      // Opcional: Podrías añadir un pequeño feedback visual aquí, como un toast o un alert.
      // alert(`¡${product.name} añadido al carrito!`); // Ya se maneja en el CartContext
    } else {
      alert("Producto agotado.");
    }
  };

  const isOutOfStock = product.stock <= 0;

  return (
    <div className="product-card">
      {/* El Link para ir a la página de detalle al hacer clic en la tarjeta */}
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
      {/* Cierra el Link aquí si el botón no va dentro */}
      {/* Botón de Añadir al Carrito */}
      <button
        onClick={handleAddToCartClick}
        className="product-detail__add-to-cart-button"
        disabled={isOutOfStock} // Deshabilita si está agotado
      >
        {isOutOfStock ? "Agotado" : "Añadir al Carrito"}
      </button>
    </div>
  );
}

export default ProductCard;
