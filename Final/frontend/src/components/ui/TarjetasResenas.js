
function TarjetasResenas({ resena }) {
    return (
        <div className="tarjeta-libro">
            <p>ID: {resena.id}</p>
            <p>ID del Libro: {resena.id_libro}</p>
            <p>Reseña: {resena.resena}</p>
        </div>
    );
}

export default TarjetasResenas;