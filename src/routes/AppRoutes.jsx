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
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

import { AuthProvider } from "../hooks/useAuth.jsx";

import initialProductsData from "../data/products";

import { CartProvider, useCart } from "../contexts/CartContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

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
      <AuthProvider>
        <CartProvider
          updateProductStock={updateProductStock}
          productsData={products}
        >
          <CartCountPasser
            products={products}
            updateProductStock={updateProductStock}
          />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

function CartCountPasser({ products }) {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;
