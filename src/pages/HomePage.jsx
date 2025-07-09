import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products"; // Importa tus productos mock
import "./HomePage.css";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    const lowercasedQuery = query.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery) ||
        product.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="home-page">
      <h1>Bienvenidos a Que Tuani!</h1>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Buscar productos por nombre, descripción o categoría..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
