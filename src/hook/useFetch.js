import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  // Estado para manejar el indicador de carga
  const [isLoading, setIsLoading] = useState(false);
  // Estado para capturar errores en la solicitud
  const [error, setError] = useState(null);
  // Estado para almacenar los datos recibidos de la API
  const [infoApi, setInfoApi] = useState();

  // Función para realizar la solicitud GET a la API
  const getApi = () => {
    setIsLoading(true); // Activa el estado de carga
    axios
      .get(url) // Realiza una solicitud GET a la URL proporcionada
      .then((response) => {
        setInfoApi(response?.data); // Almacena los datos de la respuesta en el estado
        setError(null); // Reinicia el estado de error si la solicitud es exitosa
      })
      .catch((error) => {
        setError(error); // Almacena el error si ocurre algún problema
        console.log(error); // Imprime el error en la consola para depuración
      })
      .finally(() => setIsLoading(false)); // Desactiva el estado de carga al finalizar
  };

  // Devuelve la función para hacer la solicitud y los estados relacionados
  return { getApi, isLoading, error, infoApi };
};

export default useFetch;
