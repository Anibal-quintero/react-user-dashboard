import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importamos las páginas principales del proyecto.
import { Home } from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal que muestra el listado de usuarios */}
        <Route path="/" element={<Home />} />
        {/* Ruta para mostrar los detalles de un usuario seleccionado */}
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
