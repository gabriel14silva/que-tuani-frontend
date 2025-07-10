const MOCK_ORDERS = [
  {
    id: "ORD001",
    date: "2025-07-01",
    status: "Completado",
    total: 46920.99,
    items: [
      {
        id: 1,
        name: "Laptop Ultrabook X1",
        quantity: 1,
        price: 45600.0,
        imageUrl: "/src/assets/images/products/laptop-ultrabook-x.png",
      },
      {
        id: 5,
        name: "Auriculares Inalámbricos Pro",
        quantity: 1,
        price: 1320.99,
        imageUrl: "/src/assets/images/products/auriculares-inalambricos.png",
      },
    ],
  },
  {
    id: "ORD002",
    date: "2025-06-25",
    status: "Pendiente",
    total: 10180.0,
    items: [
      {
        id: 3,
        name: "Smartwatch Deportivo Serie 5",
        quantity: 2,
        price: 4600.0,
        imageUrl:
          "/src/assets/images/products/smartwatch-deportivo-serie-5.png",
      },
      {
        id: 8,
        name: "Sudadera con Capucha Clásica",
        quantity: 1,
        price: 980.0,
        imageUrl: "/src/assets/images/products/sudadera-con-capucha.png",
      },
    ],
  },
  {
    id: "ORD003",
    date: "2025-06-18",
    status: "Enviado",
    total: 25700.87,
    items: [
      {
        id: 2,
        name: "Monitor Curvo Gaming 27",
        quantity: 1,
        price: 25700.87,
        imageUrl: "/src/assets/images/products/monitor-curvo.png",
      },
    ],
  },
];

export default MOCK_ORDERS;
