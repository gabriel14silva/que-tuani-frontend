import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products"; // Importa tus productos mock

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
      {" "}
      <h1 className="home-page__title">Bienvenidos a Que Tuani!</h1>{" "}
      <div className="home-page__search-bar-container">
        {" "}
        <input
          type="text"
          placeholder="Buscar productos por nombre, descripción o categoría..."
          className="home-page__search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="home-page__product-list">
        {" "}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <>
            <p className="home-page__no-products-message">
              No se encontraron productos.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
