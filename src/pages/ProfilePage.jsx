import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.jsx";
import MOCK_ORDERS from "../data/orders.js"; // <-- ¡Importa tus pedidos ficticios!

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profile-page profile-page--not-logged-in">
        <p>No has iniciado sesión. Redirigiendo al login...</p>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <h1 className="profile-page__title">Perfil de Usuario</h1>
      <div className="profile-card">
        <img
          src={user.avatar}
          alt="Avatar del Usuario"
          className="profile-card__avatar"
        />
        <h2 className="profile-card__name">{user.name}</h2>
        <p className="profile-card__info">
          <strong>Usuario:</strong> {user.username}
        </p>
        <p className="profile-card__info">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="profile-card__info">
          <strong>Rol:</strong> {user.role}
        </p>

        <button onClick={handleLogout} className="profile-card__logout-button">
          Cerrar Sesión
        </button>
      </div>

      <section className="profile-orders-section">
        <h2 className="profile-orders-section__title">Mis Pedidos</h2>
        {MOCK_ORDERS.length > 0 ? (
          <div className="orders-list">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="order-item">
                <div className="order-item__header">
                  <h3>Pedido #{order.id}</h3>
                  <p>Fecha: {order.date}</p>
                  <p>
                    Estado:{" "}
                    <span
                      className={`order-status order-status--${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <p>Total: **C${order.total.toFixed(2)}**</p>
                </div>
                <div className="order-item__products">
                  <h4>Productos:</h4>
                  <ul className="order-products-list">
                    {order.items.map((item) => (
                      <li key={item.id} className="order-product-item">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="order-product-item__image"
                          />
                        )}
                        <div className="order-product-item__details">
                          <p>{item.name}</p>
                          <p>Cantidad: {item.quantity}</p>
                          <p>Precio Unitario: C${item.price.toFixed(2)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="profile-orders-section__text">Aún no tienes pedidos.</p>
        )}
      </section>
    </div>
  );
}

export default ProfilePage;
