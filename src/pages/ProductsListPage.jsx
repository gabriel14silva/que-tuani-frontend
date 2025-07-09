import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Asegúrate de tener este componente
import ProductGrid from "../components/ProductGrid"; // El contenedor que acabamos de crear
import productsData from "../data/products"; // <--- IMPORTA DESDE AQUÍ

function ProductsListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Para la barra de búsqueda

  useEffect(() => {
    setLoading(true);
    setError(null);
    // Ya no necesitas la Promesa para simular API, usa directamente productsData
    try {
      setProducts(productsData); // <--- USA productsData DIRECTAMENTE
      setLoading(false);
    } catch (err) {
      console.error("Error loading products:", err);
      setError("No se pudieron cargar los productos.");
      setLoading(false);
    }
  }, []); // El array de dependencia está vacío porque solo carga una vez

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
