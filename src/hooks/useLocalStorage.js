import { useState, useEffect } from "react";

/**
 * Custom Hook para sincronizar el estado con el localStorage.
 *
 * @param {string} key La clave (nombre) bajo la cual se almacenará el valor en localStorage.
 * @param {*} initialValue El valor inicial si no hay nada en localStorage para esa clave.
 * @returns {[*, Function]} Un array con el valor actual y una función para actualizarlo.
 */
function useLocalStorage(key, initialValue) {
  // Estado para almacenar nuestro valor
  // Intentamos obtener el valor del localStorage al inicio
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parseamos el JSON si existe, de lo contrario usamos el valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay un error (ej. JSON inválido), usamos el valor inicial
      console.error(`Error al leer de localStorage la clave "${key}":`, error);
      return initialValue;
    }
  });

  // useEffect para actualizar el localStorage cada vez que 'value' cambie
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Error al escribir en localStorage la clave "${key}":`,
        error
      );
    }
  }, [value, key]); // Las dependencias son el valor y la clave

  return [value, setValue];
}

export default useLocalStorage;
