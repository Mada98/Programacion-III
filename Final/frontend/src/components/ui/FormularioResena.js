import { useState } from "react";
import './FormularioLibros.css';

function FormularioAgregarResena ({crear, cerrar}) {
    
    const [id_libro, agregarIdLibro] = useState();
    const [resena, agregarResena] = useState("");

    const handleSubmit = (evento) => {
    evento.preventDefault();

    const nuevoResena = { id_libro, resena };
    crear(nuevoResena);
    cerrar();
  };

    return (
        <div className='contenedorModal'>
            <div className='modal'>
                <h2>Agregar Reseña</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="id_libro">ID Libro:</label>
                    <input type="number" id="id_libro" value={id_libro} onChange={(evento) => agregarIdLibro(Number(evento.target.value))} required />
                    
                    <label htmlFor="resena">Reseña:</label>
                    <input type="text" id="resena" value={resena} onChange={(evento) => agregarResena(evento.target.value)} required />

                    <button type="submit">Agregar Reseña</button>
                    <button type="button" onClick={cerrar}>Cerrar</button>
                </form>
            </div>
        </div>
    )
};

export default FormularioAgregarResena