import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import HomePage from "../pages/HomePage";
import ProductsListPage from "../pages/ProductsListPage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProfilePage from "../pages/ProfilePage"; // <-- Importa la nueva página de Perfil

import { AuthProvider } from "../hooks/useAuth"; // <-- Importa el AuthProvider

import ProtectedRoute from "../ProtectedRoute"; // <-- Importa el ProtectedRoute (lo crearemos en el Paso 6)

import initialProductsData from "../data/products";

import { CartProvider } from "../contexts/CartContext";
import RegisterPage from "../pages/RegisterPage";

function AppRoutes() {
  const [products, setProducts] = useState(initialProductsData);

  const updateProductStock = (productId, quantityToAdjust) => {
    console.log(
      `[AppRoutes - updateProductStock] Recibido para Producto ID: ${productId}, Cantidad a ajustar (restar): ${quantityToAdjust}`
    );
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === productId) {
          const newStock = p.stock - quantityToAdjust;
          console.log(
            `[AppRoutes - updateProductStock] Producto: ${p.name}, Stock anterior: ${p.stock}, Stock nuevo: ${newStock}`
          );
          return { ...p, stock: newStock };
        }
        return p;
      })
    );
  };

  return (
    <Router>
      {/* Envuelve toda la aplicación con AuthProvider */}
      <AuthProvider>
        {" "}
        {/* <-- AÑADE ESTO */}
        <CartProvider
          updateProductStock={updateProductStock}
          productsData={products}
        >
          <Header />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products"
                element={<ProductsListPage products={products} />}
              />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage products={products} />}
              />
              <Route
                path="/product/:id"
                element={<ProductDetailPage products={products} />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

              {/* RUTA PROTEGIDA para el Perfil del Usuario */}
              {/* Solo se accede si el usuario está autenticado */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    {" "}
                    {/* <-- Envuelve ProfilePage con ProtectedRoute */}
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </AuthProvider>{" "}
      {/* <-- CIERRA ESTO */}
    </Router>
  );
}

export default AppRoutes;
