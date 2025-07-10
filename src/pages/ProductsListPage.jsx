import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
// import productsData from "../data/products"; // <--- ELIMINA ESTA LÍNEA

// ProductsListPage ahora recibe 'products' como prop
function ProductsListPage({ products }) {
  // <--- CAMBIO AQUÍ
  // Ya no necesitas un estado local para 'products' aquí,
  // ya que lo recibes como prop de AppRoutes
  // const [products, setProducts] = useState([]); // <--- ELIMINA O COMENTA ESTA LÍNEA
  const [loading, setLoading] = useState(false); // <--- CAMBIO: set a false ya que los productos vienen de prop
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // El useEffect para cargar productos ya no es necesario aquí,
  // los productos ya vienen en las props
  /*
  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      setProducts(productsData);
      setLoading(false);
    } catch (err) {
      console.error("Error loading products:", err);
      setError("No se pudieron cargar los productos.");
      setLoading(false);
    }
  }, []);
  */

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // El estado de loading siempre será false si los productos vienen por prop
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
