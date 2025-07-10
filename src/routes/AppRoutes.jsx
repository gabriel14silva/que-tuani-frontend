import React, { useState } from "react"; // Importa useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Importa tus PÁGINAS
import HomePage from "../pages/HomePage";
import ProductsListPage from "../pages/ProductsListPage";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

// Importa los datos iniciales de los productos
import initialProductsData from "../data/products"; // <--- CAMBIO: Renombra la importación

// Importa el CartContext
import { CartProvider } from "../contexts/CartContext"; // <--- Asegúrate de tener CartProvider

function AppRoutes() {
  // <--- NUEVO ESTADO PARA LOS PRODUCTOS
  const [products, setProducts] = useState(initialProductsData);

  // <--- NUEVA FUNCIÓN PARA ACTUALIZAR EL STOCK
  const updateProductStock = (productId, quantityToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - quantityToRemove } : p
      )
    );
  };

  return (
    <Router>
      {/* Envuelve toda la aplicación con CartProvider y pasa el stock updater */}
      <CartProvider
        updateProductStock={updateProductStock}
        productsData={products}
      >
        {" "}
        {/* <--- CAMBIO AQUÍ */}
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Pasa los productos al ProductsListPage */}
            <Route
              path="/products"
              element={<ProductsListPage products={products} />}
            />{" "}
            {/* <--- CAMBIO AQUÍ */}
            {/* Pasa los productos a CategoryPage */}
            <Route
              path="/category/:categoryName"
              element={<CategoryPage products={products} />}
            />{" "}
            {/* <--- CAMBIO AQUÍ */}
            {/* Pasa los productos a ProductDetailPage */}
            <Route
              path="/product/:id"
              element={<ProductDetailPage products={products} />}
            />{" "}
            {/* <--- CAMBIO AQUÍ */}
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
      {/* <--- Cierra CartProvider aquí */}
    </Router>
  );
}

export default AppRoutes;
