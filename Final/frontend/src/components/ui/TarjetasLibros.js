import { editarLibro } from "../../services/librosServices";
import './TarjetasLibros.css'

const updateLibro = async (id, newEstado) => {
    try{
        await editarLibro(id, newEstado)
        alert('Estado del libro actualizado, actualice la pagina para ver los resultados')
    }catch (error){
        alert("Error al actualizar el estado del libro: " + error.message);
    }
}

const estados = ["completado", "abandonado", "leyendo", "sin-leer"];

function TarjetasLibros({ libro, onEliminar }) {
    return (
        <div className="tarjeta-libro">
            <h3>{libro.nombre}</h3>
            <p>ID: {libro.id}</p>
            <p>Autor: {libro.autor}</p>
            <p>Genero: {libro.genero}</p>
            <p>
                <strong>Estado:</strong>{' '}
                <select
                    value={libro.estado}
                    onChange={(e) => updateLibro(libro.id, e.target.value)}
                >
                    {estados.map((s) => (
                  <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </p>
            <p>Rating: {libro.rating}/5</p>
            <button onClick={() => onEliminar(libro.id)}>Eliminar</button>
        </div>
    );
}

export default TarjetasLibros;