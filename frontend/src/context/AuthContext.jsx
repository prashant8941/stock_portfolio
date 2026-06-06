import { createContext, useState } from "react";

export const AuthContext = createContext();

const getStoredUser = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) return null;

  try {
    const parsedUser = JSON.parse(storedUser);
    return parsedUser.name || storedUser;
  } catch {
    return storedUser;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser());

  const login = (userData, token) => {
    const name = userData?.name || userData;

    localStorage.setItem("user", name);
    localStorage.setItem("token", token);

    setUser(name);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};