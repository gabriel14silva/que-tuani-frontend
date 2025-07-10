const productsData = [
  {
    id: "p1", // ID cambiado de "1" a "p1"
    name: "Laptop Ultrabook X1",
    price: 45600.0,
    imageUrl: "/src/assets/images/products/laptop-ultrabook-x.png",
    category: "electronics",
    description:
      "Laptop ultraligera y potente con procesador de última generación y 16GB de RAM.", // Nueva propiedad
    stock: 15, // Nueva propiedad
  },
  {
    id: "p2", // ID cambiado
    name: "Camiseta de Algodón Orgánico",
    price: 890.0,
    imageUrl: "/src/assets/images/products/camiseta-de-algodon.png",
    category: "clothing",
    description:
      "Camiseta suave de algodón 100% orgánico, ideal para uso diario y muy transpirable.",
    stock: 50,
  },
  {
    id: "p3", // ID cambiado
    name: "Auriculares Inalámbricos Pro",
    price: 1320.99,
    imageUrl: "/src/assets/images/products/auriculares-inalambricos.png",
    category: "electronics",
    description:
      "Sonido de alta fidelidad con cancelación de ruido activa y hasta 24 horas de batería.",
    stock: 30,
  },
  {
    id: "p4", // ID cambiado
    name: "Jeans Slim Fit Elásticos",
    price: 1150.0,
    imageUrl: "/src/assets/images/products/jeans-azul.png",
    category: "clothing",
    description:
      "Jeans ajustados pero cómodos, con tejido elástico para mayor libertad de movimiento.",
    stock: 40,
  },
  {
    id: "p5", // ID cambiado
    name: "Tostadora Compacta 2 Rebanadas",
    price: 9670.5,
    imageUrl: "/src/assets/images/products/tostadora.png",
    category: "home",
    description:
      "Tostadora moderna con ranuras anchas y 7 niveles de tostado para un desayuno perfecto.",
    stock: 20,
  },
  {
    id: "p6", // ID cambiado
    name: "Smartwatch Deportivo Serie 5",
    price: 4600.0,
    imageUrl: "/src/assets/images/products/smartwatch-deportivo-serie-5.png",
    category: "electronics",
    description:
      "Reloj inteligente con GPS, monitor de ritmo cardíaco y seguimiento de actividad física.",
    stock: 10,
  },
  {
    id: "p7", // ID cambiado (y corregido para que no sea un duplicado de p1 o p2)
    name: "Mouse Ergonómico Inalámbrico",
    price: 780.0,
    imageUrl: "/src/assets/images/products/mouse-ergonomico.png",
    category: "electronics",
    description:
      "Diseño ergonómico para largas horas de uso, con conexión inalámbrica de 2.4GHz.",
    stock: 25,
  },
  {
    id: "p8", // ID cambiado
    name: "Sudadera con Capucha Clásica",
    price: 980.0,
    imageUrl: "/src/assets/images/products/sudadera-con-capucha.png",
    category: "clothing",
    description:
      "Sudadera cómoda y versátil, perfecta para cualquier estación, con bolsillo canguro.",
    stock: 35,
  },
  {
    id: "p9", // ID cambiado
    name: "Cafetera de Goteo Programable",
    price: 3400.0,
    imageUrl: "/src/assets/images/products/cafetera-automatica.png",
    category: "home",
    description:
      "Prepara tu café automáticamente con su temporizador programable y jarra de 12 tazas.",
    stock: 18,
  },
  {
    id: "p10", // ID cambiado
    name: "Monitor Curvo Gaming 27''",
    price: 25700.87,
    imageUrl: "/src/assets/images/products/monitor-curvo.png",
    category: "electronics",
    description:
      "Experiencia de juego inmersiva con alta tasa de refresco y tiempo de respuesta rápido.",
    stock: 8,
  },
  {
    id: "p11", // ID cambiado
    name: "Libro: El Señor de los Anillos",
    price: 870.0,
    imageUrl: "/src/assets/images/products/libro-senior-anillos.png",
    category: "books", // Nueva categoría de ejemplo
    description:
      "Edición especial de la épica trilogía de J.R.R. Tolkien, imprescindible en tu biblioteca.",
    stock: 60,
  },
  {
    id: "p12", // ID cambiado
    name: "Mochila Antirrobo USB",
    price: 1300.0,
    imageUrl: "/src/assets/images/products/mochila-usb.png",
    category: "accessories", // Nueva categoría de ejemplo
    description:
      "Mochila segura con compartimentos ocultos y puerto de carga USB integrado.",
    stock: 22,
  },
  {
    id: "p13", // ID cambiado
    name: "Iphone 14 Pro Max",
    price: 36500.98,
    imageUrl: "/src/assets/images/products/iphone14promax.png",
    category: "accessories", // Nueva categoría de ejemplo
    description:
      "Iphone 14 Pro Max con pantalla Super Retina XDR, chip A16 Bionic y cámara triple de 48MP.",
    stock: 15,
  },
  {
    id: "p14", // ID cambiado
    name: "Teclado Mecánico RGB",
    price: 2600.0,
    imageUrl: "/src/assets/images/products/teclado.png",
    category: "accessories", // Nueva categoría de ejemplo
    description:
      "Teclado mecánico con retroiluminación RGB personalizable, ideal para gamers y escritores.",
    stock: 15,
  },
  {
    id: "p15", // ID cambiado
    name: "Sillón sofá de gamusa",
    price: 16900.78,
    imageUrl: "/src/assets/images/products/sillon.png",
    category: "home", // Nueva categoría de ejemplo
    description:
      "Sillón sofá de gamusa, cómodo y elegante, perfecto para cualquier sala de estar.",
    stock: 12,
  },
];

export default productsData; // Exporta el array de productos
