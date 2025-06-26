import { useState, useEffect } from "react";
import './App.css';
import Header from './components/layout/Header.js'
import FormularioAgregarLibro from "./components/ui/FormularioLibros.js";
import { agregarLibro } from "./services/librosServices.js";
import { eliminarLibro } from "./services/librosServices.js";
import TarjetaLibro from "./components/ui/TarjetasLibros.js";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/libro")
      .then(res => res.json())
      .then(data => setLibros(data || []))
      .catch(err => console.error('Error al cargar tareas:', err));
  }, []);

  const crearLibro = async (nuevoLibro) => {
    try {
      await agregarLibro(nuevoLibro);
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al agregar el libro:", error);
    }
  };

  const eliminarLibroPorId = async (id) => {
    try {
      await eliminarLibro(id);
    } catch (error) {
      alert("Error al eliminar libro: " + error.message);
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

      <div className="contenedor-tarjetas">
        {libros.map((libro) => (
          <TarjetaLibro
            key={libro.id}
            libro={libro}
            onEliminar={eliminarLibroPorId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
