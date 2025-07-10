import React, { createContext, useContext, useEffect } from "react"; // <-- ¡Asegúrate de importar useContext!
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({
  children,
  updateProductStock,
  productsData,
}) => {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  useEffect(() => {}, [cartItems]);

  const addToCart = (productToAdd, quantity) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === productToAdd.id
    );

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

    if (currentProductInStock.stock < quantity) {
      alert(
        `Solo quedan ${currentProductInStock.stock} unidades de ${productToAdd.name} en stock.`
      );
      return;
    }

    if (existingItemIndex > -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...productToAdd, quantity }]);
    }

    console.log(
      `[CartContext - addToCart] Producto: ${productToAdd.name}, Cantidad agregada: ${quantity}. Llamando a updateProductStock para RESTAR ${quantity}.`
    );
    updateProductStock(productToAdd.id, quantity);
  };

  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find((item) => item.id === id);
    if (itemToRemove) {
      console.log(
        `[CartContext - removeFromCart] Eliminando producto: ${itemToRemove.name} (ID: ${id}) con cantidad: ${itemToRemove.quantity}. Llamando a updateProductStock para SUMAR ${itemToRemove.quantity}.`
      );
      updateProductStock(id, -itemToRemove.quantity);
    } else {
      console.log(
        `[CartContext - removeFromCart] Producto con ID: ${id} no encontrado en el carrito.`
      );
    }
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

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
    const quantityDifference = newQuantity - oldQuantity;

    console.log(
      `[CartContext - updateQuantity] ID: ${id}, Cantidad anterior: ${oldQuantity}, Nueva cantidad: ${newQuantity}, Diferencia: ${quantityDifference}.`
    );

    if (newQuantity <= 0) {
      console.log(
        `[CartContext - updateQuantity] Nueva cantidad es <= 0, llamando a removeFromCart para ID: ${id}.`
      );
      removeFromCart(id);
      return;
    }

    if (
      quantityDifference > 0 &&
      currentProductInStock.stock < quantityDifference
    ) {
      alert(
        `Solo quedan ${currentProductInStock.stock} unidades adicionales de ${cartItem.name}.`
      );
      setCartItems(
        cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: oldQuantity + currentProductInStock.stock }
            : item
        )
      );
      console.log(
        `[CartContext - updateQuantity] Stock insuficiente. Ajustando cantidad en carrito. Llamando a updateProductStock para RESTAR el stock disponible (${currentProductInStock.stock}).`
      );
      updateProductStock(id, currentProductInStock.stock);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );

    console.log(
      `[CartContext - updateQuantity] Actualizando stock para ID: ${id} con diferencia: ${quantityDifference}.`
    );
    updateProductStock(id, quantityDifference);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

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

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
