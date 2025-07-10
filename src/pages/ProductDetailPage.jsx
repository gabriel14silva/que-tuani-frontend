import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import productsData from "../data/products"; // <--- ELIMINA ESTA LÍNEA
import { CartContext } from "../contexts/CartContext";

// El componente ProductDetailPage ahora recibe 'products' como prop
function ProductDetailPage({ products }) {
  // <--- CAMBIO AQUÍ
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Busca el producto en las props 'products'
    const foundProduct = products.find((p) => p.id === id); // <--- CAMBIO AQUÍ
    setProduct(foundProduct);
    // Reinicia la cantidad a 1 cada vez que cambia el producto
    setQuantity(1); // Añadido para reiniciar la cantidad
  }, [id, products]); // <--- Añade 'products' a las dependencias para que se re-ejecute si el stock cambia

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-NI", {
      style: "currency",
      currency: "NIO",
    }).format(price);
  };

  // Deshabilitar botón y ajustar cantidad si el stock es 0
  const isOutOfStock = product && product.stock <= 0;
  // Asegurarse de que la cantidad no exceda el stock disponible
  useEffect(() => {
    if (product && quantity > product.stock) {
      setQuantity(Math.max(1, product.stock)); // Establece la cantidad máxima al stock disponible o 1
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
    // addToCart ya tiene la lógica de control de stock
    addToCart(product, quantity);
    // alert(`Se agregaron ${quantity} de ${product.name} al carrito!`); // El alert ahora se maneja dentro de addToCart en CartContext
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
          {/* <--- CAMBIO AQUÍ para mostrar 'Agotado' */}
        </p>

        <div className="product-detail__quantity-selector">
          <label htmlFor="quantity" className="product-detail__quantity-label">
            Cantidad:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max={product.stock} // <--- NUEVO: Establece el máximo basado en el stock
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="product-detail__quantity-input"
            disabled={isOutOfStock} // <--- Deshabilita el input si no hay stock
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="product-detail__add-to-cart-button"
          disabled={isOutOfStock} // <--- Deshabilita el botón si no hay stock
        >
          {isOutOfStock ? "Agotado" : "Agregar al Carrito"}{" "}
          {/* <--- Cambia el texto del botón */}
        </button>
      </div>
    </div>
  );
}

export default ProductDetailPage;
