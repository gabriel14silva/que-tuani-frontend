import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRoutes from "./routes/AppRoutes";

import { CartProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      <AppRoutes />
    </CartProvider>
  </React.StrictMode>
);
