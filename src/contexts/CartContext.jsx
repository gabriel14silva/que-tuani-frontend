import React, { createContext, useState, useEffect } from "react";

// 1. Crea el Contexto
export const CartContext = createContext();

// 2. Crea el Provider
// El Provider ahora recibe 'updateProductStock' y 'productsData' como props
export const CartProvider = ({
  children,
  updateProductStock,
  productsData,
}) => {
  // Intentar cargar el carrito desde localStorage, si no, un array vacío
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem("cartItems");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return [];
    }
  });

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const addToCart = (productToAdd, quantity) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === productToAdd.id
    );

    // Encuentra el producto real en los datos actuales para obtener el stock actualizado
    const currentProductInStock = productsData.find(
      (p) => p.id === productToAdd.id
    );

    if (!currentProductInStock) {
      console.error(
        "Producto no encontrado en el stock actual:",
        productToAdd.id
      );
      alert("Error: Producto no disponible.");
      return;
    }

    // Lógica de control de stock ANTES de añadir al carrito
    if (currentProductInStock.stock < quantity) {
      alert(
        `Solo quedan ${currentProductInStock.stock} unidades de ${productToAdd.name} en stock.`
      );
      return; // No agregar al carrito si no hay suficiente stock
    }

    if (existingItemIndex > -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Si es un nuevo producto, añádelo
      setCartItems([...cartItems, { ...productToAdd, quantity }]);
    }

    // ¡IMPORTANTE! Llamar a la función para actualizar el stock (restar)
    // Para restar 'quantity', pasamos 'quantity' positivo a updateProductStock
    updateProductStock(productToAdd.id, quantity); // <--- CORRECCIÓN AQUÍ
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id); // Encuentra el ítem antes de eliminarlo
    if (itemToRemove) {
      // Si el ítem existe, devuelve su cantidad al stock
      // Para sumar 'itemToRemove.quantity', pasamos '-itemToRemove.quantity' a updateProductStock
      updateProductStock(id, -itemToRemove.quantity); // <--- CORRECCIÓN AQUÍ
    }
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const updateQuantity = (id, newQuantity) => {
    const cartItem = cartItems.find((item) => item.id === id);
    if (!cartItem) {
      console.error("Ítem de carrito no encontrado para actualizar cantidad.");
      return;
    }

    const currentProductInStock = productsData.find((p) => p.id === id);
    if (!currentProductInStock) {
      console.error("Producto no encontrado en el stock actual:", id);
      return;
    }

    const oldQuantity = cartItem.quantity;
    const quantityDifference = newQuantity - oldQuantity; // Si es positivo, se añadió; si es negativo, se quitó.

    // Si la nueva cantidad es 0 o menos, eliminar del carrito
    if (newQuantity <= 0) {
      removeFromCart(id); // removeFromCart ya maneja la devolución al stock
      return;
    }

    // Si se está intentando añadir más de lo disponible
    if (
      quantityDifference > 0 && // Solo si se está aumentando la cantidad
      currentProductInStock.stock < quantityDifference
    ) {
      alert(
        `Solo quedan ${currentProductInStock.stock} unidades adicionales de ${cartItem.name}.`
      );
      // Ajustar la nueva cantidad para que no exceda el stock disponible
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: oldQuantity + currentProductInStock.stock }
            : item
        )
      );
      // Restar el stock disponible que se acaba de añadir
      updateProductStock(id, currentProductInStock.stock);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    // Actualizar stock:
    // Si quantityDifference es positivo (se añadió al carrito), se resta del stock.
    // Si quantityDifference es negativo (se quitó del carrito), se suma al stock.
    // Pasamos 'quantityDifference' directamente a updateProductStock.
    updateProductStock(id, quantityDifference); // <--- CORRECCIÓN AQUÍ
  };

  // Calcular el total de artículos en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular el precio total del carrito
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
