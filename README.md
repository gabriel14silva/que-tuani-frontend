# Que Tuani! 🛍️

¡Bienvenido al frontend de "Que Tuani!" Tu destino online para los gadgets más innovadores y accesorios esenciales. Esta aplicación web de ecommerce está construida con React y Vite, ofreciendo una experiencia de compra rápida y fluida.

---

## 🌟 Características Principales

Aquí tienes un resumen de lo que puedes encontrar en "Que Tuani!":

- **🛒 Carrito de Compras Interactivo:**
  - Añade, actualiza y elimina productos fácilmente.
  - Muestra la cantidad total de ítems en el ícono del carrito en el encabezado.
  - Calcula el subtotal en tiempo real.
  - Persistencia del carrito: ¡Tus ítems te esperan incluso si cierras el navegador!
- **👤 Sistema de Autenticación (Simulado):**
  - **Login:** Permite a los usuarios "iniciar sesión" (simulado).
  - **Registro:** Una página dedicada para que los nuevos usuarios se "registren".
  - **Perfil de Usuario:**
    - Muestra la información del usuario autenticado.
    - Incluye una sección de **"Mis Pedidos"** con historial de compras simulado.
    - Opción de cerrar sesión.
  - **Rutas Protegidas:** Acceso restringido a ciertas páginas (ej. Perfil) solo para usuarios autenticados.
- **✨ Productos y Categorías:**
  - **Página de Productos:** Lista todos los productos disponibles.
  - **Página de Categoría:** Filtra productos por categoría (ej. `/category/electronics`).
  - **Página de Detalle de Producto:** Muestra información detallada de cada producto.
  - **Búsqueda de Productos:** Funcionalidad para buscar productos por nombre o descripción.
  - **Productos Destacados:** Sección dedicada en la página de inicio para mostrar los productos más populares.
- **🖼️ Slider de Imágenes Dinámico:**
  - Banners rotativos en la página de inicio que enlazan a categorías relevantes.
- **⚙️ Gestión de Stock (Frontend):**
  - Simula la actualización del stock de productos al añadir/eliminar ítems del carrito.
- **🌐 Navegación Intuitiva:**
  - Barra de navegación clara y un encabezado con acceso rápido al carrito y autenticación.
  - Páginas informativas como "Nosotros", "Contacto" y "Política de Privacidad".
  - Página 404 para rutas no encontradas.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - **React:** Biblioteca JavaScript para construir interfaces de usuario.
  - **Vite:** Herramienta de construcción rápida para proyectos web.
  - **React Router DOM:** Para el manejo de rutas y navegación.
  - **CSS Puro:** Estilización personalizada para un diseño moderno y responsivo.
- **Manejo de Estado:**
  - **React Context API:** Para la gestión global del carrito de compras y la autenticación.
  - **React Hooks:** (`useState`, `useEffect`, `useContext`, `useReducer`).
- **Almacenamiento Local:**
  - **`useLocalStorage` Custom Hook:** Para persistir el estado del carrito y la autenticación en el almacenamiento local del navegador.

---

## 🚀 Cómo Ejecutar el Proyecto

Sigue estos pasos para poner en marcha "Que Tuani!" en tu máquina local:

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/en/download/) (versión 20 o superior recomendada) y npm (viene con Node.js) o Yarn.

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone git@github.com:gabriel14silva/que-tuani-frontend.git
    cd que-tuani-frontend # O el nombre de la carpeta de tu proyecto
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```
3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    # o si usas yarn
    yarn dev
    ```

    Esto iniciará el servidor de desarrollo en `http://localhost:5173` (o un puerto similar). Abre esta URL en tu navegador.

4.  **Construir para producción (opcional):**
    ```bash
    npm run build
    # o si usas yarn
    yarn build
    ```
    Este comando generará los archivos de producción optimizados en la carpeta `dist/`. Puedes servir estos archivos con un servidor web estático.

---
