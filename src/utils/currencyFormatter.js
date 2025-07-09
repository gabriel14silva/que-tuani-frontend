export const formatPrice = (price) => {
  return new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency: "NIO",
  }).format(price);
};

// Alternativa simple si Intl no funciona bien
export const formatPriceSimple = (price) => {
  return `C$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
