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

import initialProductsData from "../data/products";

import { CartProvider } from "../contexts/CartContext";
import RegisterPage from "../pages/RegisterPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";

function AppRoutes() {
  const [products, setProducts] = useState(initialProductsData);

  const updateProductStock = (productId, quantityToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - quantityToRemove } : p
      )
    );
  };

  return (
    <Router>
      <CartProvider
        updateProductStock={updateProductStock}
        productsData={products}
      >
        {" "}
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductsListPage products={products} />}
            />{" "}
            <Route
              path="/category/:categoryName"
              element={<CategoryPage products={products} />}
            />{" "}
            <Route
              path="/product/:id"
              element={<ProductDetailPage products={products} />}
            />{" "}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>{" "}
    </Router>
  );
}

export default AppRoutes;
