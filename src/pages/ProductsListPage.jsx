import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

function ProductsListPage({ products }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");
    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm("");
    }
  }, [location.search]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="products-list-page products-list-page--loading">
        Cargando productos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-list-page products-list-page--error">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="products-list-page">
      <h1 className="products-list-page__title">Todos los Productos</h1>

      <div className="products-list-page__search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="products-list-page__search-input"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="products-list-page__no-results">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </div>
  );
}

export default ProductsListPage;
