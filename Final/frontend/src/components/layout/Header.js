
import './Header.css';

function Header({onAgregarLibroClick, onAgregarResenaClick, onFiltrarEstado, onFiltrarGenero}) {
    return(
        <header>
            
            <h1>Libreria</h1>
            <button onClick={onAgregarLibroClick}>Agregar Libro</button>
            <button onClick={onAgregarResenaClick}>Realizar Reseña</button>

            <h3>Filtrar libros por:</h3>
            <select defaultValue='todos' onChange={(e) => onFiltrarEstado(e.target.value)}>
                <option value='todos'>Todos</option>
                <option value='completado'>Completados</option>
                <option value='abandonado'>Abandonados</option>
                <option value='leyendo'>Leyendo</option>
                <option value='sin-leer'>No leidos</option>
            </select>

            <h3>Filtrar por generos</h3>
            <select defaultValue='todos' onChange={(e) => onFiltrarGenero(e.target.value)}>
                <option value='todos'>Todos</option>
                <option value='ficcion'>Ficcion</option>
                <option value="misterio">Misterio</option>
                <option value="romance">Romance</option>
                <option value="ciencia-ficcion">Ciencia ficción</option>
                <option value="fantasia">Fantasía</option>
                <option value="terror">Terror</option>
                <option value="aventura">Aventura</option>
                <option value="historico">Histórico</option>
                <option value="biografia">Biografía</option>
                <option value='filosofia'>Filosofia</option>   
            </select>
        </header>
    );
}

export default Header