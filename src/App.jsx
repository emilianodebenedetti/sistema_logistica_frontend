import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Viajes from "./pages/Viajes";
import Clientes from "./pages/Clientes";
import Usuarios from "./pages/Usuarios";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import { useAuth } from "./context/AuthContext";

//el q estamos usando ahora
export function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  console.log("PrivateRoute - loading:", loading, "user:", user);
  if (loading) return null; // Evitar redirects mientras se carga el user
  return user ? children : <Navigate to="/inicio-sesion" />;
} 

export default function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/inicio-sesion" element={<Login />} />
            <Route
              path="/viajes"
              element={
                <PrivateRoute>
                  {<AppNavbar />}
                  <Viajes />
                </PrivateRoute>
              }
              />
            {/* <Route path="*" element={<Navigate to="/inicio-sesion" />} /> */}
            <Route path="/" element={<Navigate to="/viajes" replace />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/clientes" element={<Clientes/>} />
          </Routes>
        </Router>
        <AppFooter/>
    </>
  );
}
