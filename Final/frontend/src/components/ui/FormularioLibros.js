import { useState } from "react";

function FormularioAgregarLibro ({crear, cerrar}) {
    const [titulo, agregarTitulo] = useState("");
    const [autor, agregarAutor] = useState("");
    const [genero, agregarGenero] = useState("");
    const [estado, agregarEstado] = useState("");
    const [rating, agregarRating] = useState(1);
    const [review, agregarReview] = useState("");

    const generos = ["ficcion", "misterio", "romance", "ciencia-ficcion", "fantasia", "terror", "aventura", "historico", "biografia", "filosofia"];

    const estados = ["completado", "abandonado", "leyendo", "sin-leer"];

    const handleSubmit = (evento) => {
    evento.preventDefault();

    const nuevoLibro = { titulo, autor, genero, estado, rating, review };
    crear(nuevoLibro);
    cerrar();
  };

    return (
        <div className='contenedorModal'>
            <div className='modal'>
                <h2>Agregar Libro</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="titulo">Título:</label>
                    <input type="text" id="titulo" value={titulo} onChange={(evento) => agregarTitulo(evento.target.value)} required />

                    <label htmlFor="autor">Autor:</label>
                    <input type="text" id="autor" value={autor} onChange={(evento) => agregarAutor(evento.target.value)} required />

                    <label htmlFor="genero">Género:</label>
                    <select id="genero" value={genero} onChange={(evento) => agregarGenero(evento.target.value)} required>
                        <option value="">Seleccione un género</option>
                        {generos.map((gen) => (
                            <option key={gen} value={gen}>{gen}</option>
                        ))}
                    </select>

                    <label htmlFor="estado">Estado:</label>
                    <select id="estado" value={estado} onChange={(evento) => agregarEstado(evento.target.value)} required>
                        <option value="">Seleccione un estado</option>
                        {estados.map((est) => (
                            <option key={est} value={est}>{est}</option>
                        ))}
                    </select>

                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" min="1" max="5" value={rating} onChange={(evento) => agregarRating(Number(evento.target.value))} required />

                    <label htmlFor="review">Review:</label>
                    <textarea id="review" value={review} onChange={(evento) => agregarReview(evento.target.value)}></textarea>

                    <button type="submit">Agregar Libro</button>
                    <button type="button" onClick={cerrar}>Cerrar</button>
                </form>
            </div>
        </div>
    )
};

export default FormularioAgregarLibro