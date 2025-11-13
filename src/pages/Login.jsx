import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Label, TextInput } from "flowbite-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password); // Esperar a que se complete el login
      console.log("ROL:", localStorage.getItem("rol"));
      console.log("TOKEN:", localStorage.getItem("token"));
      navigate("/viajes"); // Luego redirigir
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas");
    }
  };
 return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-8 px-6">
        <h1 className="text-2xl font-semibold text-green-800">MG Logística</h1>
        <p className="text-sm text-gray-500">Gestión de viajes</p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <Card
          className="w-full max-w-md rounded-xl shadow-lg border border-gray-100"
          style={{ backgroundColor: "#FAFAF5" }}
        >
          <legend className="text-lg font-semibold mb-4 text-green-800">
            Inicia Sesión
          </legend>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label htmlFor="email" value="Correo electrónico" />
              <TextInput
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Correo electrónico"
                required
                className="rounded-full w-full !bg-white"
              />
            </div>

            <div>
              <Label htmlFor="password" value="Contraseña" />
              <TextInput
                id="password"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Contraseña"
                required
                className="rounded-full"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button type="submit" className="w-full rounded-full bg-green-800 hover:bg-green-900">
              Iniciar Sesión
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
}
