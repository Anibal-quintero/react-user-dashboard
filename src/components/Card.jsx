import { useNavigate } from "react-router";

const Card = ({ user }) => {
  const navigate = useNavigate(); // Hook para redirigir al usuario a otra ruta.

  return (
    <div className="mt-14 bg-opacity-70 bg-gray-800 backdrop-blur-lg shadow-xl rounded-2xl p-6 text-white max-w-sm w-full">
      {/* Título del detalle del usuario */}
      <h2 className="detail-title text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-400 pb-2">
        Detalle de Usuario
      </h2>

      {/* Información del usuario mostrada dinámicamente */}
      <p className="mb-2">
        <strong className="text-cyan-300">Nombre:</strong> {user.name}
      </p>
      <p className="mb-2">
        <strong className="text-cyan-300">Email:</strong> {user.email}
      </p>
      <p className="mb-2">
        <strong className="text-cyan-300">Teléfono:</strong> {user.phone}
      </p>
      <p className="mb-2">
        <strong className="text-cyan-300">Dirección: </strong>
        {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
      </p>
      <p className="mb-4">
        <strong className="text-cyan-300">Empresa:</strong> {user.company.name}
      </p>

      {/* Botón para regresar a la página anterior */}
      <button
        className="cursor-pointer w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-200"
        onClick={() => navigate("/")} // Redirige a la ruta raíz.
      >
        Regresar
      </button>
    </div>
  );
};

export default Card;
