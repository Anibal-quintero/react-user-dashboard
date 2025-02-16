import { useLocation } from "react-router";
import Card from "../components/Card";

const Detail = () => {
  // Extrae el estado enviado desde la navegación anterior (en este caso, los datos del usuario).
  const { state: user } = useLocation();

  return user ? (
    // Si hay datos del usuario, renderiza el componente Card con la información del usuario.
    <Card user={user} />
  ) : (
    // Si no hay datos disponibles, muestra un mensaje al usuario.
    <p className="text-center text-black bg-gray-300 bg-opacity-50 p-4 rounded-lg shadow-md">
      No hay datos disponibles
    </p>
  );
};

export default Detail;
