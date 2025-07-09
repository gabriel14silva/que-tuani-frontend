import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// Importa más páginas a medida que las crees

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        {" "}
        {/* Estilo básico para main */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Agrega más rutas aquí */}
          <Route
            path="*"
            element={<div>404 - Página no encontrada</div>}
          />{" "}
          {/* Ruta para errores */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
