import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

function ProductDetailPage({ products }) {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
    setQuantity(1);
  }, [id, products]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  const isOutOfStock = product && product.stock <= 0;
  useEffect(() => {
    if (product && quantity > product.stock) {
      setQuantity(Math.max(1, product.stock));
    }
  }, [product, quantity]);

  if (!product) {
    return (
      <div className="product-detail-page--loading">Cargando producto...</div>
    );
  }

  const handleAddToCart = () => {
    if (product.stock === 0) {
      alert("Este producto está agotado.");
      return;
    }
    addToCart(product, quantity);
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
        <p className="product-detail__price">{formatPrice(product.price)}</p>
        <p className="product-detail__description">{product.description}</p>
        <p className="product-detail__stock">
          Stock disponible: {product.stock > 0 ? product.stock : "Agotado"}{" "}
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
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="product-detail__quantity-input"
            disabled={isOutOfStock}
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="product-detail__add-to-cart-button"
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "Agotado" : "Agregar al Carrito"}{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
