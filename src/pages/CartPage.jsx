import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { formatPrice } from "../utils/currencyFormatter";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <p className="cart-page__empty-message">Tu carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-page__title">Tu Carrito de Compras</h1>
      <div className="cart-page__items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="cart-item__image"
            />
            <div className="cart-item__details">
              <h2 className="cart-item__name">{item.name}</h2>
              <p className="cart-item__price-text">
                Precio: {formatPrice(item.price)}
              </p>
              <div className="cart-item__quantity-control">
                <label
                  htmlFor={`qty-${item.id}`}
                  className="cart-item__quantity-label"
                >
                  Cantidad:
                </label>
                <input
                  type="number"
                  id={`qty-${item.id}`}
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="cart-item__quantity-input"
                />
              </div>
              <p className="cart-item__price-text">
                Subtotal: {formatPrice(item.price * item.quantity)}{" "}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cart-item__remove-button"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-page__summary">
        <h2 className="cart-page__summary-total">
          Total del Carrito: {formatPrice(getTotalPrice())}
        </h2>
        <button className="cart-page__checkout-button">Proceder al Pago</button>
      </div>
    </div>
  );
}

export default CartPage;
