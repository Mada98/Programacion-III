import { useState, useEffect } from "react";
import './App.css';
import Header from './components/layout/Header.js'
//FORMULARIOS
import FormularioAgregarLibro from "./components/ui/FormularioLibros.js";
import FormularioAgregarResena from "./components/ui/FormularioResena.js";
//FUNCIONES
import { agregarLibro } from "./services/librosServices.js";
import { agregarResena } from "./services/resenaServices.js";
import { eliminarLibro } from "./services/librosServices.js";
//TARJETAS
import TarjetaLibro from "./components/ui/TarjetasLibros.js";
import TarjetasResenas from "./components/ui/TarjetasResenas.js";

function App() {
  const [mostrarFormularioLibro, setMostrarFormularioLibro] = useState(false);
  const [mostrarFormularioResena, setMostrarFormularioResena] = useState(false);
  const [libros, setLibros] = useState([]);
  const [Resenas, setResenas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/api/libro")
      .then(res => res.json())
      .then(data => setLibros(data || []))
      .catch(err => console.error('Error al cargar los Libros:', err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/resena")
      .then(res => res.json())
      .then(data => setResenas(data || []))
      .catch(err => console.error('Error al cargar las reseñas:', err));
  }, []);

  const crearLibro = async (nuevoLibro) => {
    try {
      await agregarLibro(nuevoLibro);
      alert("Libro agregado")
    } catch (error) {
      console.error("Error al agregar el libro:", error);
    }
  };

  const eliminarLibroPorId = async (id) => {
    try {
      await eliminarLibro(id);
      alert("Libro eliminado")
    } catch (error) {
      alert("Error al eliminar libro: " + error.message);
    }
  };
  
  const crearResena = async (nuevoResena) => {
    try {
      await agregarResena(nuevoResena);
      alert("Reseña creada")
    } catch (error) {
      console.error("Error al realizar una reseña:", error);
    }
  };

  return (
    <div className="App">
      <Header
        onAgregarLibroClick={() => setMostrarFormularioLibro(true)}
        onAgregarResenaClick={() => setMostrarFormularioResena(true)}
      />

      {mostrarFormularioLibro && (
        <FormularioAgregarLibro
          crear={crearLibro}
          cerrar={() => setMostrarFormularioLibro(false)}
        />
      )}

      {mostrarFormularioResena && (
        <FormularioAgregarResena
          crear={crearResena}
          cerrar={() => setMostrarFormularioResena(false)}
        />
      )}

      <div className="contenedor-tarjetas">
        <h2>Libros</h2>
        {libros.map((libro) => (
          <TarjetaLibro
            key={libro.id}
            libro={libro}
            onEliminar={eliminarLibroPorId}
          />
        ))}
      </div>

      <div className="contenedor-tarjetas">
        <h2>Reseñas</h2>
        {Resenas.map((resena) => (
          <TarjetasResenas
            key={resena.id}
            resena={resena}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
