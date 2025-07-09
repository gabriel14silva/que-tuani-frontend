import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";
import { CartContext } from "../contexts/CartContext";
import { formatPrice } from "../utils/currencyFormatter"; // Importa la función de formato

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="product-detail-page product-detail-page--loading">
        Cargando producto...
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Se agregaron ${quantity} de ${product.name} al carrito!`);
  };

  return (
    <div className="product-detail-page">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-detail__image"
      />
      <div className="product-detail__info">
        <h1 className="product-detail__title">{product.name}</h1>
        <p className="product-detail__price">
          {formatPrice(product.price)} {/* Usa la función de formato aquí */}
        </p>
        <p className="product-detail__description">{product.description}</p>
        <p className="product-detail__stock">
          Stock disponible: {product.stock}
        </p>
        <div className="product-detail__quantity-selector">
          <label htmlFor="quantity" className="product-detail__quantity-label">
            Cantidad:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value >= 1 && value <= product.stock) {
                setQuantity(value);
              }
            }}
            className="product-detail__quantity-input"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="product-detail__add-to-cart-button"
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? "Agregar al Carrito" : "Sin Stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
