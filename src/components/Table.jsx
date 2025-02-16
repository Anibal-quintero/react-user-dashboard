import { useNavigate } from "react-router";

const Table = ({ users }) => {
  const navigate = useNavigate(); // Hook para la navegación entre rutas.

  return (
    <table className="w-full table-auto text-white bg-[#1e2939]">
      <thead>
        <tr>
          {/* Encabezados de la tabla */}
          <th className="p-3 border border-gray-300 bg-[#364153]">Nombre</th>
          <th className="p-3 border border-gray-300 bg-[#364153]">Email</th>
          <th className="p-3 border border-gray-300 bg-[#364153]">Compañía</th>
          <th className="p-3 border border-gray-300 bg-[#364153]">Ciudad</th>
          <th className="p-3 border border-gray-300 bg-[#364153]">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Itera sobre la lista de usuarios y crea filas para cada uno */}
        {users?.map((user) => (
          <tr key={user.id}>
            <td className="p-2 border border-gray-300">{user.name}</td>
            <td className="p-2 border border-gray-300">{user.email}</td>
            <td className="p-2 border border-gray-300">{user.company.name}</td>
            <td className="p-2 border border-gray-300">{user.address.city}</td>
            <td className="p-2 border border-gray-300 text-center">
              {/* Botón para navegar al detalle del usuario, pasando sus datos como estado */}
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition cursor-pointer"
                onClick={() => navigate("/detail", { state: user })}
              >
                Ver Detalle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
