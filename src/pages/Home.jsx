import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import Table from "../components/Table";
import spinner from "/src/assets/spinner.svg";

export const Home = () => {
  // Estado para almacenar el término de búsqueda ingresado por el usuario.
  const [search, setSearch] = useState("");
  // Estado para almacenar los usuarios filtrados según la búsqueda o el filtro de ciudad.
  const [filteredUsers, setFilteredUsers] = useState([]);
  // Estado para almacenar la ciudad seleccionada en el filtro.
  const [selectedCity, setSelectedCity] = useState("");

  // URL de la API que se consume para obtener los usuarios.
  const url = "https://jsonplaceholder.typicode.com/users";
  const { getApi, isLoading, error, infoApi } = useFetch(url);

  // Efecto para cargar los datos al montar el componente.
  useEffect(() => {
    getApi();
  }, []);

  // Efecto para filtrar usuarios en base a la búsqueda y el filtro de ciudad.
  useEffect(() => {
    setFilteredUsers(
      infoApi?.filter(
        (user) =>
          (selectedCity === "" || user.address.city === selectedCity) &&
          (user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }, [search, selectedCity, infoApi]);

  return (
    <div className="min-w-[80vw] mx-auto rounded-lg">
      {/* Cabecera con título, barra de búsqueda y filtro de ciudad */}
      <header className="fixed top-0 left-0 flex justify-between p-5 bg-black w-full">
        <h1 className="text-3xl font-bold text-white text-center">
          Listado de Usuarios
        </h1>
        <div>
          {/* Campo de búsqueda para filtrar usuarios */}
          <input
            type="text"
            id="search-input"
            name="search"
            placeholder="Buscar por nombre o email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[255px] bg-[#242424] p-1 border-1 rounded-[4px] mr-2 outline-none text-white border-cyan-50"
          />
          {/* Select para filtrar usuarios por ciudad */}
          <select
            id="city-filter"
            name="city"
            defaultValue=""
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-[170px] cursor-pointer bg-[#242424] p-1 border-1 rounded-[4px] text-white border-cyan-50"
          >
            <option value="">Todas las ciudades</option>
            {/* Generar opciones de ciudades dinámicamente */}
            {infoApi?.map((city) => (
              <option key={city.id} value={city.address.city}>
                {city.address.city}
              </option>
            ))}
          </select>
        </div>
      </header>
      <main>
        {/* Mostrar estado de carga, error o resultados filtrados */}
        {isLoading ? (
          <img
            src={spinner}
            alt="Cargando datos"
            className="w-24 h-24 mx-auto"
          />
        ) : error ? (
          <p aria-live="assertive" className="text-white text-center">
            Error al obtener datos
            {/* Botón para reintentar la carga de datos en caso de error */}
            <button
              onClick={getApi}
              className="cursor-pointer ml-2 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-all focus:outline-none focus:ring focus:ring-red-300"
            >
              Reintentar
            </button>
          </p>
        ) : filteredUsers && filteredUsers.length === 0 ? (
          <p className="text-white text-center mt-4">
            No se encontraron resultados para:
            <span className="font-bold"> {search}</span>.
          </p>
        ) : (
          // Tabla que muestra los usuarios filtrados
          <Table users={filteredUsers} />
        )}
      </main>
    </div>
  );
};
