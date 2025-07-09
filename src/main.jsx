import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes"; // Creamos este archivo luego

import { CartProvider } from "./contexts/CartContext"; // Lo creamos luego

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Envuelve la aplicación con el proveedor del carrito */}
      <AppRoutes />
    </CartProvider>
  </React.StrictMode>
);
