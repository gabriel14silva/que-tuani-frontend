import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";

function CategoryPage({ products }) {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      const filtered = products.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
      setLoading(false);
    } catch (err) {
      console.error(
        `Error loading products for category ${categoryName}:`,
        err
      );
      setError("No se pudieron cargar los productos de esta categoría.");
      setLoading(false);
    }
  }, [categoryName, products]);

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
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="category-page__no-products">
          No hay productos disponibles en esta categoría.
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

export default CategoryPage;
