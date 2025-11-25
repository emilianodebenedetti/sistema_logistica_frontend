/* import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if(loading) return null; //evitamos redirects mientras se carga el user
  if(!user?.token) return <Navigate to="/inicio-sesion" replace />;
  
  return children;
} */