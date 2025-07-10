import { useState, useContext, createContext } from "react";
import useLocalStorage from "./useLocalStorage"; // Reutilizamos nuestro custom hook

// Creamos un contexto para compartir el estado de autenticación
const AuthContext = createContext(null);

// Datos de usuario ficticios (¡Solo para fines de demostración!)
const MOCK_USER = {
  username: "griffinsilva10@gmail.com",
  password: "password123",
  name: "Gabriel Griffin",
  email: "griffinsilva10@gmail.com",
  role: "customer",
  avatar: "/src/assets/images/users/gabriel-griffin.jpg", // Imagen de avatar ficticia
};

export const AuthProvider = ({ children }) => {
  // `user` contendrá la información del usuario si está logeado, o null si no
  // Usamos useLocalStorage para que el estado de login persista entre recargas
  const [user, setUser] = useLocalStorage("currentUser", null);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    setError(null); // Limpiar errores previos
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setUser({
        username: MOCK_USER.username,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
        role: MOCK_USER.role,
        avatar: MOCK_USER.avatar,
      });
      return true; // Login exitoso
    } else {
      setError(
        "Credenciales inválidas. Intenta con usuario@ejemplo.com y password123"
      );
      return false; // Login fallido
    }
  };

  const logout = () => {
    setUser(null); // Borrar el usuario del estado y localStorage
    setError(null);
  };

  // El valor que se proveerá a los componentes que usen `useAuth`
  const authContextValue = {
    user, // Objeto de usuario si está logeado, null si no
    error, // Mensaje de error si el login falla
    isAuthenticated: !!user, // Booleano: ¿Está logeado?
    login, // Función para logearse
    logout, // Función para deslogearse
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook para consumir el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
