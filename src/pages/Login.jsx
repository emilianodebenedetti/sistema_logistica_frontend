import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";
import { Button, Card, Label, TextInput } from "flowbite-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password); // Esperar a que se complete el login
      navigate("/viajes"); // Luego redirigir

      /* console.log("ROL:", localStorage.getItem("rol"));
      console.log("TOKEN:", localStorage.getItem("token"));
      console.log("USER:", localStorage.getItem("user")); */

    } catch (err) {
      setError(err.message || "Error login");
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-8 px-6">
        <h1 className="text-2xl font-bold"
          style={{ color: "#41644A" }}
        >
          MG Logística
        </h1>
        <p className="text-sm text-gray-500">Gestión de viajes</p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <Card
          className="w-full max-w-md rounded-xl shadow-lg border border-gray-100"
          style={{ backgroundColor: "#EBE1D1" }}
        >
          <legend className="text-lg font-bold mb-4 "
           style={{ color: "#41644A" }}
          >
            Inicia Sesión
          </legend>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email" value="Correo electrónico" />
              <TextInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                required
                className="rounded-full w-full"
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
              />
            </div>

            <div>
              <Label htmlFor="password" value="Contraseña" />
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                className="rounded-full w-full"
                style={{ backgroundColor: "#ffffff", color: "#000000" }}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button type="submit" className="w-full rounded-full bg-green-800 hover:bg-green-900"  style={{ backgroundColor: "#41644A" }}>
              
              Iniciar Sesión
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
