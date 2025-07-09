import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";
import { CartContext } from "../contexts/CartContext";
import "./ProductDetailPage.css";

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

  if (!product) {
    return <div className="product-detail-loading">Cargando producto...</div>;
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
        className="product-detail-image"
      />
      <div className="product-detail-info">
        <h1 className="product-detail-title">{product.name}</h1>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-stock">
          Stock disponible: {product.stock}
        </p>

        <div className="product-quantity-selector">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-button">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
