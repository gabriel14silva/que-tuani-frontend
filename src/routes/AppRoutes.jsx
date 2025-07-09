import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Importa tus PÁGINAS
import HomePage from "../pages/HomePage";
import ProductsListPage from "../pages/ProductsListPage"; // <--- NUEVO
import CategoryPage from "../pages/CategoryPage"; // <--- NUEVO
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsListPage />} />{" "}
          {/* Ruta para ver todos los productos */}
          <Route
            path="/category/:categoryName"
            element={<CategoryPage />}
          />{" "}
          {/* Ruta para categorías */}
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/about"
            element={
              <p className="basic-page-content">Página Acerca de nosotros</p>
            }
          />{" "}
          {/* Puedes crear un componente real después */}
          <Route
            path="/contact"
            element={<p className="basic-page-content">Página de Contacto</p>}
          />{" "}
          {/* Puedes crear un componente real después */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
