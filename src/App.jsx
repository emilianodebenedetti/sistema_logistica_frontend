import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Viajes from "./pages/Viajes";
import { AuthProvider, useAuth } from "./context/AuthContext";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";

export function PrivateRoute({ children }) {
  const { user } = useAuth();
  console.log("Verificando usuario en PrivateRoute:", user);
  return user ? children : <Navigate to="/inicio-sesion" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          <Route path="/inicio-sesion" element={<Login />} />
          <Route
            path="/viajes"
            element={
              <PrivateRoute>
                <AppNavbar />
                <Viajes />
              </PrivateRoute>
            }
            />
          <Route path="*" element={<Navigate to="/inicio-sesion" />} />
        </Routes>
      </Router>
            <AppFooter/>
    </AuthProvider>
  );
}
