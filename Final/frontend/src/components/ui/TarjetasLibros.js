//agregar editar

function TarjetasLibros({ libro, onEliminar }) {
    return (
        <div className="tarjeta-libro">
            <h3>{libro.nombre}</h3>
            <p>ID: {libro.id}</p>
            <p>Autor: {libro.autor}</p>
            <p>Genero: {libro.genero}</p>
            <p>Estado: {libro.estado}</p>
            <p>Rating: {libro.rating}/5</p>
            <button onClick={() => onEliminar(libro.id)}>Eliminar</button>
        </div>
    );
}

export default TarjetasLibros;