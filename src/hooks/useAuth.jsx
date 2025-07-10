import { useState, useContext, createContext } from "react";
import useLocalStorage from "./useLocalStorage";

const AuthContext = createContext(null);

const MOCK_USER = {
  username: "griffinsilva10@gmail.com",
  password: "password123",
  name: "Gabriel Griffin",
  email: "griffinsilva10@gmail.com",
  role: "customer",
  avatar: "/src/assets/images/users/gabriel-griffin.jpg",
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("currentUser", null);
  const [error, setError] = useState(null);

  const login = (username, password) => {
    setError(null);
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      setUser({
        username: MOCK_USER.username,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
        role: MOCK_USER.role,
        avatar: MOCK_USER.avatar,
      });
      return true;
    } else {
      setError(
        "Credenciales inválidas. Intenta con griffinsilva10@gmail.com y password123"
      );
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const authContextValue = {
    user,
    error,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
