import { useState, useEffect } from "react";
import './App.css';
import Header from './components/layout/Header.js'
import FormularioAgregarLibro from "./components/ui/FormularioLibros.js";
import { agregarLibro } from "./services/librosServices.js";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const crearLibro = async (nuevoLibro) => {
    try {
      await agregarLibro(nuevoLibro);
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al agregar el libro:", error);
    }
  };

  return (
    <div className="App">
      <Header onAgregarClick={() => setMostrarFormulario(true)} />
      {mostrarFormulario && (
        <FormularioAgregarLibro
          crear={crearLibro}
          cerrar={() => setMostrarFormulario(false)}
        />
      )}
    </div>
  );
}

export default App;
