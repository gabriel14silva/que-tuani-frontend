import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
// import productsData from "../data/products"; // <--- ELIMINA ESTA LÍNEA

// CategoryPage ahora recibe 'products' como prop
function CategoryPage({ products }) {
  // <--- CAMBIO AQUÍ
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]); // <--- Cambia el nombre para evitar confusión
  const [loading, setLoading] = useState(false); // <--- CAMBIO: set a false ya que los productos vienen de prop
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      // Filtra desde los productos que vienen por prop
      const filtered = products.filter(
        // <--- CAMBIO AQUÍ
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered); // <--- Usa el nuevo estado
      setLoading(false);
    } catch (err) {
      console.error(
        `Error loading products for category ${categoryName}:`,
        err
      );
      setError("No se pudieron cargar los productos de esta categoría.");
      setLoading(false);
    }
  }, [categoryName, products]); // <--- Añade 'products' a las dependencias

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

      {filteredProducts.length === 0 ? ( // <--- Usa el nuevo estado
        <p className="category-page__no-products">
          No hay productos disponibles en esta categoría.
        </p>
      ) : (
        <ProductGrid>
          {filteredProducts.map(
            (
              product // <--- Usa el nuevo estado
            ) => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </ProductGrid>
      )}
    </div>
  );
}

export default CategoryPage;
