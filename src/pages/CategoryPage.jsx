import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el parámetro de la URL
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import productsData from "../data/products"; // <--- IMPORTA DESDE AQUÍ

// Reutilizamos los mismos productos de ejemplo

function CategoryPage() {
  const { categoryName } = useParams(); // Obtiene 'electronics', 'clothing', etc. de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Filtra directamente desde productsData
    try {
      const filtered = productsData.filter(
        (product) => product.category === categoryName
      );
      setProducts(filtered);
      setLoading(false);
    } catch (err) {
      console.error(
        `Error loading products for category ${categoryName}:`,
        err
      );
      setError("No se pudieron cargar los productos de esta categoría.");
      setLoading(false);
    }
  }, [categoryName]); // Re-ejecuta cuando cambia la categoría en la URL

  if (loading) {
    return (
      <div className="category-page category-page--loading">
        Cargando productos de {categoryName}...
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-page category-page--error">Error: {error}</div>
    );
  }

  return (
    <div className="category-page">
      <h1 className="category-page__title">
        Categoría:{" "}
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}{" "}
        {/* Capitaliza el nombre */}
      </h1>

      {products.length === 0 ? (
        <p className="category-page__no-products">
          No hay productos disponibles en esta categoría.
        </p>
      ) : (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </div>
  );
}

export default CategoryPage;
