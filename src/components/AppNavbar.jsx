import { Badge, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate, Link } from "react-router-dom";

export default function AppNavbar() {
  const navigate = useNavigate();
  const rol = localStorage.getItem("rol") || "";

  const handleLogout = (e) => {
    e?.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("user");
    localStorage.removeItem("user_nombre");
    navigate("/inicio-sesion");
  };

  return (
    <Navbar fluid className=" mb-6 shadow" style={{ backgroundColor: '#FAFAF5' }}>
      <NavbarBrand>
        <span
          role="button"
          onClick={() => navigate("/")}
          className="self-center whitespace-nowrap text-xl font-semibold cursor-pointer"
        >
           <h1 className="text-xl font-semibold text-green-800">MG Logística</h1>
        <p className="text-sm text-gray-500">Gestión de viajes</p>
        </span>
      </NavbarBrand>
      {/* <header className="py-8 px-6">
       
      </header> */}

      <div className="flex md:order-2">
        <Badge color="light" size="sm" className="mr-4 self-center">{rol}</Badge>

        <button
          onClick={handleLogout}
          title="Cerrar sesión"
          className="flex items-center justify-center p-2 rounded hover:bg-gray-200/20 text-gray-500"
        >
          <RiLogoutBoxRLine size={20} />
        </button>

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
          {/* Viajes visible para todos */}
          <Link
            to="/viajes"
            className="block py-2 px-3 hover:underline text-black"
            style={{ color: "text-gray-500", cursor: "pointer" }}
          >
            Viajes
          </Link>
          {rol === "admin" && (
            <>
              <Link
                to="/usuarios"
                className="block py-2 px-3 hover:underline"
                style={{ color: "text-gray-500", cursor: "pointer" }}
              >
                Usuarios
              </Link>

              <Link
                to="/clientes"
                className="block py-2 px-3 hover:underline"
                style={{ color: "text-gray-500", cursor: "pointer" }}
              >
                Clientes
              </Link>
            </>
          )}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}