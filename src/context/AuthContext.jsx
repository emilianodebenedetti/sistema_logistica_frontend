import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");
    const rawUser = localStorage.getItem("user");

    let parsed = null;
    try { parsed = rawUser ? JSON.parse(rawUser) : null; } catch {}
    
    if (token) {
      setUser({ token, rol: rol || parsed?.rol, ...(parsed || {}) });
    } else {
      setUser(null);
    }
    setLoading(false);
   /*  if (token && rol) {
      setUser({ token, rol });
    }
    setLoading(false); // Asegúrate de que loading se actualice */
  }, []);

  const login = async (email, password) => {
    const res = await fetch(`${import.meta.env.VITE_URL_API}/auth/inicio-sesion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");
    
    // Guardar token, usuario y rol
    if (data.token) localStorage.setItem("token", data.token);
    if (data.rol) localStorage.setItem("rol", data.rol);
    if (data.user) localStorage.setItem("user", JSON.stringify(data.user));

    setUser({ token: data.token, rol: data.rol, ...(data.user || {}) });
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
