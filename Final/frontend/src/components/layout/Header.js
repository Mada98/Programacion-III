
// Agregar path de las funcion onClick de agregar Libro 

//Agregar seleccion de opcion y llamada a la funcion de filtrado

//ELegir generos especificos y agregar seleccion de opcion y llamada a la funcion de filtrado

//FUTURO SI ESTAMOS BIEN DE TIEMPO: FILTRAR POR A-Z, PUNTUACION.

function Header(){
    return(
        <header>
            
            <h1>Libreria</h1>
            <button onClick>Agregar Libro</button>

            <h3>Filtrar libros por:</h3>
            <select defaultValue='todos'>
                <option value='todos'>Todos</option>
                <option value='completado'>Completados</option>
                <option value='abandonado'>Abandonados</option>
                <option value='leyendo'>Leyendo</option>
                <option value='sin-leer'>No leidos</option>
            </select>

            <h3>Filtrar por generos</h3>
            <select defaultValue='todos'>
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