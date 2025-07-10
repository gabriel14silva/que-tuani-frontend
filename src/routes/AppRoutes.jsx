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

import initialProductsData from "../data/products";

import { CartProvider } from "../contexts/CartContext";

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
            <Route
              path="/about"
              element={
                <p className="basic-page-content">Página Acerca de nosotros</p>
              }
            />
            <Route
              path="/contact"
              element={<p className="basic-page-content">Página de Contacto</p>}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>{" "}
    </Router>
  );
}

export default AppRoutes;
