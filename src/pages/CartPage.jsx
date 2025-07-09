import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./CartPage.css";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="cart-page-empty">Tu carrito está vacío.</div>;
  }

  return (
    <div className="cart-page">
      <h1>Tu Carrito de Compras</h1>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <div className="cart-item-quantity">
                <label htmlFor={`qty-${item.id}`}>Cantidad:</label>
                <input
                  type="number"
                  id={`qty-${item.id}`}
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-item-button"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total del Carrito: ${getTotalPrice().toFixed(2)}</h2>
        <button className="checkout-button">Proceder al Pago</button>
      </div>
    </div>
  );
}

export default CartPage;
