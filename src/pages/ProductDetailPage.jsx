import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";
import { CartContext } from "../contexts/CartContext";

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // En una aplicación real, harías una llamada a la API aquí
    const foundProduct = productsData.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  // Función para formatear el precio como Córdobas Nicaragüenses
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  if (!product) {
    return (
      <div className="product-detail-page--loading">Cargando producto...</div>
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
          {formatPrice(product.price)}
        </p>{" "}
        {/* <--- CAMBIO AQUÍ */}
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
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="product-detail__quantity-input"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="product-detail__add-to-cart-button"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
