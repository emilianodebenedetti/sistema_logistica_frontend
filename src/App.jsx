import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Viajes from "./pages/Viajes";
import Clientes from "./pages/Clientes";
import Usuarios from "./pages/Usuarios";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import { useAuth } from "./context/AuthContext";

export function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null; // Evitar redirects mientras se carga el user
  return user ? children : <Navigate to="/inicio-sesion" />;
}

export default function App() {
  const { user, loading } = useAuth();
  if (loading) return null;

  return (
    <>
      <Router>
        {user && <AppNavbar />}
        <Routes>
          <Route path="/inicio-sesion" element={<Login />} />
          <Route path="/viajes" element={<PrivateRoute><Viajes /></PrivateRoute>} />
          <Route path="/" element={<Navigate to="/viajes" replace />} />
          <Route path="/usuarios" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
          <Route path="/clientes" element={<PrivateRoute><Clientes /></PrivateRoute>} />
        </Routes>
      </Router>
      <AppFooter />
    </>
  );
}
