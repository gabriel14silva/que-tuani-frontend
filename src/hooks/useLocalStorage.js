import { useState, useEffect } from "react";

/**
 * Custom Hook para sincronizar el estado con el localStorage.
 *
 * @param {string} key
 * @param {*} initialValue
 * @returns {[*, Function]}
 */
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error al leer de localStorage la clave "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Error al escribir en localStorage la clave "${key}":`,
        error
      );
    }
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
